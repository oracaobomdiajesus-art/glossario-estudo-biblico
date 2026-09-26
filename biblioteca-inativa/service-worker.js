// ============================================
// SERVICE WORKER — Escola Dominical / Teologia
// Deixa o site utilizável sem internet depois da primeira visita.
// ============================================
//
// A lista de arquivos de conteúdo e a versão do cache vêm de
// "cache-manifest.js" (gerado automaticamente por gerar-cache-manifest.js
// a cada deploy — veja netlify.toml). NÃO É PRECISO editar nada aqui à
// mão quando uma lição nova for adicionada: o manifesto se atualiza
// sozinho, e a versão do cache muda sozinha junto.
importScripts('./cache-manifest.js');

const CACHE_NAME = `escola-biblica-${self.CACHE_MANIFEST.versao}`;
const ARQUIVOS_CONTEUDO = self.CACHE_MANIFEST.arquivosConteudo;

// ── Arquivos "estáticos" (raramente mudam) — cache-first ──
// Servidos direto do cache sempre que possível, sem re-baixar a cada carregamento.
// Esta lista é curta e estável (bibliotecas de terceiros + a Bíblia local, que é
// grande mas praticamente nunca muda), por isso continua mantida à mão aqui.
const ARQUIVOS_ESTATICOS = [
  './biblioteca/vendor/leaflet.js',
  './biblioteca/vendor/leaflet.css',
  './biblioteca/vendor/mermaid.min.js',
  './biblioteca/vendor/images/marker-icon.png',
  './biblioteca/vendor/images/marker-icon-2x.png',
  './biblioteca/vendor/images/marker-shadow.png',
  './biblioteca/vendor/images/layers.png',
  './biblioteca/vendor/images/layers-2x.png',
  './biblioteca/biblia-almeida.js'
];

// Domínios externos que SEMPRE precisam de rede de verdade
// (nunca tenta servir do cache, nunca guarda no cache)
const SOMENTE_REDE = [
  'bible-api.com',
  'api.groq.com',
  'api.mistral.ai'
];

// Tiles do mapa: cache-first com atualização em segundo plano.
// Assim, áreas do mapa já vistas antes continuam aparecendo offline.
const DOMINIO_TILES = 'basemaps.cartocdn.com';

// ============================================
// INSTALL — baixa e guarda os arquivos na primeira visita
// ============================================
self.addEventListener('install', event => {
  self.skipWaiting(); // ativa a versão nova assim que possível

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      const todosArquivos = [...ARQUIVOS_ESTATICOS, ...ARQUIVOS_CONTEUDO];

      // Usa fetch+put individual (em vez de cache.addAll) para que,
      // se algum arquivo da lista não existir mais (ex: lição removida),
      // isso não derrube o cache inteiro — só aquele item fica de fora.
      return Promise.allSettled(
        todosArquivos.map(url =>
          fetch(url)
            .then(resposta => {
              if (resposta.ok) return cache.put(url, resposta);
            })
            .catch(() => {}) // offline na 1ª instalação, ou arquivo ausente: ignora
        )
      );
    })
  );
});

// ============================================
// ACTIVATE — limpa caches de versões antigas
// ============================================
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(nomes =>
      Promise.all(
        nomes
          .filter(nome => nome.startsWith('escola-biblica-') && nome !== CACHE_NAME)
          .map(nome => caches.delete(nome))
      )
    ).then(() => self.clients.claim())
  );
});

// ============================================
// FETCH — decide de onde servir cada requisição
// ============================================
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Só cuida de GET; POST (Groq/Mistral) passa direto pra rede.
  if (event.request.method !== 'GET') return;

  // APIs externas que exigem dado em tempo real: nunca cachear, sempre rede.
  if (SOMENTE_REDE.some(dominio => url.hostname.includes(dominio))) {
    return; // deixa o navegador lidar normalmente (vai falhar sozinho se offline)
  }

  // Tiles do mapa: cache-first + atualiza em segundo plano.
  if (url.hostname.includes(DOMINIO_TILES)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(event.request).then(respostaCache => {
          const buscaRede = fetch(event.request)
            .then(respostaRede => {
              if (respostaRede.ok) cache.put(event.request, respostaRede.clone());
              return respostaRede;
            })
            .catch(() => respostaCache); // offline: usa o que já tem, se tiver
          return respostaCache || buscaRede;
        })
      )
    );
    return;
  }

  // Arquivos estáticos do projeto (Leaflet, Mermaid, Bíblia local): cache-first.
  const ehEstatico = ARQUIVOS_ESTATICOS.some(caminho =>
    url.pathname.endsWith(caminho.replace('./', '/'))
  );
  if (ehEstatico) {
    event.respondWith(
      caches.match(event.request).then(respostaCache =>
        respostaCache || fetch(event.request).then(respostaRede => {
          if (respostaRede.ok) {
            const clone = respostaRede.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return respostaRede;
        })
      )
    );
    return;
  }

  // Tudo mais do próprio site (HTML, biblioteca/, dados/): network-first.
  // Busca a versão mais nova quando há internet; cai pro cache quando não há.
  //
  // IMPORTANTE: as lições são carregadas com "?v=timestamp" (cache-busting,
  // veja dominical-v2.html/teologia-v2.html) para o timestamp mudar a cada
  // carregamento. Isso faria o Cache API tratar cada carregamento como uma
  // URL diferente. Por isso guardamos e buscamos no cache SEMPRE pela URL
  // "limpa" (sem a query), enquanto a busca na rede usa a URL original
  // (com "?v=") para garantir que o navegador não sirva uma cópia antiga
  // do próprio cache HTTP dele.
  if (url.origin === self.location.origin) {
    const requestLimpo = new Request(url.origin + url.pathname);
    event.respondWith(
      fetch(event.request)
        .then(respostaRede => {
          if (respostaRede.ok) {
            const clone = respostaRede.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(requestLimpo, clone));
          }
          return respostaRede;
        })
        .catch(() => caches.match(requestLimpo, { ignoreSearch: true }))
    );
  }
});
