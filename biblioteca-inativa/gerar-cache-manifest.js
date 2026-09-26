// ============================================
// GERADOR AUTOMÁTICO DO MANIFESTO DE CACHE
// ============================================
// Escaneia as pastas do projeto e gera "cache-manifest.js" sozinho,
// listando todo arquivo de conteúdo (lições, biblioteca) que deve
// ser guardado para uso offline — sem precisar editar nada na mão.
//
// A "versão" do cache é calculada automaticamente a partir de um hash
// do conteúdo de todos os arquivos. Ou seja: se QUALQUER arquivo mudar
// (uma lição nova, uma correção em uma pergunta, etc.), a versão muda
// sozinha, e o Service Worker sabe que precisa baixar tudo de novo da
// próxima vez que o site abrir com internet.
//
// Este script roda automaticamente a cada deploy no Netlify (veja
// netlify.toml). Também pode ser rodado manualmente, se precisar:
//   node gerar-cache-manifest.js
// ============================================

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const RAIZ = __dirname;

// Pastas de onde os arquivos ".js" de conteúdo são coletados automaticamente.
// "biblioteca/vendor" fica de fora de propósito — essas bibliotecas (Leaflet,
// Mermaid) já são tratadas à parte no service-worker.js (ARQUIVOS_ESTATICOS),
// porque quase nunca mudam.
const PASTAS_CONTEUDO = [
  'dados/dominical',
  'dados/teologia',
  'biblioteca'
];

// Arquivos que já são tratados manualmente como "estáticos" em service-worker.js
// (ex: a Bíblia local, que é grande e quase nunca muda) — não entram no
// escaneamento automático para não duplicar nem buscar de novo à toa.
const IGNORAR_NO_ESCANEAMENTO = new Set([
  './biblioteca/biblia-almeida.js'
]);

function listarArquivosJs(pastaRelativa) {
  const pastaAbsoluta = path.join(RAIZ, pastaRelativa);
  if (!fs.existsSync(pastaAbsoluta)) return [];
  return fs.readdirSync(pastaAbsoluta)
    .filter(nome => nome.endsWith('.js'))
    .map(nome => `./${pastaRelativa}/${nome}`.replace(/\\/g, '/'))
    .filter(caminho => !IGNORAR_NO_ESCANEAMENTO.has(caminho));
}

// 1) Monta a lista de arquivos de conteúdo automaticamente
const arquivosDeConteudo = [
  './index.html',
  './dominical-v2.html',
  './teologia-v2.html',
  ...PASTAS_CONTEUDO.flatMap(listarArquivosJs)
].sort();

// 2) Calcula um hash a partir do CONTEÚDO de cada arquivo (não só do nome),
//    para que qualquer edição (mesmo sem adicionar/remover arquivo) já
//    seja suficiente para invalidar o cache antigo automaticamente.
const hash = crypto.createHash('sha256');
for (const caminho of arquivosDeConteudo) {
  const caminhoAbsoluto = path.join(RAIZ, caminho);
  hash.update(caminho);
  if (fs.existsSync(caminhoAbsoluto)) {
    hash.update(fs.readFileSync(caminhoAbsoluto));
  }
}
const versao = hash.digest('hex').slice(0, 12); // 12 caracteres já é suficiente

// 3) Escreve o manifesto que o service-worker.js vai carregar via importScripts()
const conteudoManifesto = `// ============================================
// ARQUIVO GERADO AUTOMATICAMENTE — NÃO EDITE NA MÃO
// Gerado por gerar-cache-manifest.js em ${new Date().toISOString()}
// ============================================
self.CACHE_MANIFEST = {
  versao: ${JSON.stringify(versao)},
  arquivosConteudo: ${JSON.stringify(arquivosDeConteudo, null, 2)}
};
`;

fs.writeFileSync(path.join(RAIZ, 'cache-manifest.js'), conteudoManifesto, 'utf8');

console.log(`✅ cache-manifest.js gerado com sucesso.`);
console.log(`   Versão do cache: ${versao}`);
console.log(`   Total de arquivos de conteúdo: ${arquivosDeConteudo.length}`);
