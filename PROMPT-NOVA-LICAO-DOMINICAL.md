# 📋 Prompt pronto — Nova Lição da Escola Dominical (v5)

Passo a passo (e prompt pronto pra copiar e colar) pra montar uma lição da
**Escola Dominical** (revista **Jovens**) na página `dominical-v5.html`.
Segue o mesmo padrão SÓ BÍBLIA da Teologia v5 (Livro 8).

## ⚠️ Regra principal: SÓ BÍBLIA

A revista tem **direitos autorais**. O material do site **não reproduz nada
do texto dela**: nem o título da lição, nem Resumo da Lição, Objetivos,
Interação, Orientação Pedagógica, Introdução, títulos dos tópicos,
explicações, Subsídios, Pense!, Ponto Importante!, Conclusão, os títulos dos
dias da Leitura Semanal ou as perguntas e respostas da Hora da Revisão.
A Alana estuda **com a revista em mãos**; o site é um índice das
**referências bíblicas** da lição, com a localização de cada uma.

A exceção são as **Perguntas Sugeridas**: elas são sobre o que a revista
explica em cada subtópico, mas escritas com palavras próprias, com resposta
curta e sem copiar frases da revista (veja a seção Perguntas).

O que entra:
- o nome genérico do bloco quando ele cita versículo (`Texto Principal`,
  `Leitura Semanal · Segunda`, `Texto Bíblico`, `Introdução`, `Subsídio 1`,
  `Conclusão`, `Hora da Revisão · 5`);
- números das seções (`I`, `II`, `III`) e dos tópicos (`1.`, `2.`, `3.`);
- página da revista;
- referência bíblica;
- **tags = palavras-chave do próprio versículo** (texto da Almeida em
  `biblioteca/biblia-almeida.js`). Tag não explica o versículo, só cita
  palavras dele. Ex.: Fp 3.2 → `acautelai-vos dos cães / acautelai-vos dos
  maus obreiros / acautelai-vos da falsa circuncisão`.

A Almeida do site pode ter palavras diferentes da tradução da revista
(Fp 3.2: "Acautelai-vos" no site, "Guardai-vos" na revista). As tags seguem
a Almeida do site, que é o texto que aparece nos cards.

Modelo atual: `dados/dominical/dados-4T2026-licao6-v5.js` (mapa mental em
2 níveis: `biblioteca/mermaid-dominical.js`, entrada `4T2026-licao6`).

---

## 🔹 O que anexar no chat

- Os prints/fotos da lição, **em ordem**, da página de abertura (Texto
  Principal e Leitura Semanal) até a Hora da Revisão. Uma página por foto ou
  revista aberta (duas páginas); fotos de lado também servem. Se alguma sair
  desfocada, mande de novo.
- Não precisa renomear as fotos: o número da página é lido no rodapé
  ("JOVENS 41").
- O número da lição e a data aparecem na abertura ("LIÇÃO 6 · 8 nov 2026");
  se souber, diga também o trimestre.

---

## 🔹 Prompt pronto (copiar e colar)

```
Oi! Seguem os prints da Lição [N] da Escola Dominical ([data], trimestre
[4T2026 ou outro], páginas [XX-XX]). Monte no padrão v5 SÓ BÍBLIA do
repositório oracaobomdiajesus-art/glossario-estudo-biblico, seguindo o
arquivo PROMPT-NOVA-LICAO-DOMINICAL.md (modelo:
dados/dominical/dados-4T2026-licao6-v5.js):

1. Arquivo de dados: dados/dominical/dados-[TRIMESTRE]-licao[N]-v5.js
2. Diagrama: entrada "[TRIMESTRE]-licao[N]" em biblioteca/mermaid-dominical.js
3. Perguntas: entrada "[TRIMESTRE]-licao[N]" em biblioteca/perguntas-dominical.js
4. Seletor do dominical-v5.html (const licoesDisponiveisV4) e o ?v= dos scripts
5. Banco de tags: biblioteca/tags-versiculos.js

Não reproduza nada do texto da revista (tem direitos autorais): só o nome
do bloco, números da seção e do tópico, página, referência e palavras-chave
do versículo. Perguntas: 1 para cada subtópico, sobre o que a revista
explica nele (texto dos prints), com resposta curta em palavras próprias.
Não incluir minhas anotações à mão.
Se tiver dúvida, me diga. Teste a página, faça commit e push na main e me
passe o link.
```

---

## 🔹 Arquivos que mudam a cada lição

| O quê | Onde | Chave/nome |
|---|---|---|
| Dados da lição | `dados/dominical/dados-[TRIMESTRE]-licao[N]-v5.js` | arquivo novo |
| Diagrama | `biblioteca/mermaid-dominical.js` | `window.bibliotecaMermaid["[TRIMESTRE]-licao[N]"]` |
| Perguntas | `biblioteca/perguntas-dominical.js` | `window.bibliotecaPerguntas["[TRIMESTRE]-licao[N]"]` |
| Seletor | `dominical-v5.html` → `const licoesDisponiveisV4` | `"4T2026": [6, 7]` |
| Sem cache | `dominical-v5.html` → `perguntas-dominical.js?v=` e `mermaid-dominical.js?v=` | trocar a data (ex.: `?v=20261115a`) |
| Banco de tags | `biblioteca/tags-versiculos.js` | referências novas e `usos` |

- Chave do trimestre: `[N]T[ANO]` → 1T = jan–mar, 2T = abr–jun,
  3T = jul–set, 4T = out–dez (ex.: `4T2026`).
- Trimestre novo: acrescentar no **começo** de `licoesDisponiveisV4`, em
  `nomesTrimestre` (ex.: `"1T2027": "1º Trimestre 2027"`) e trocar
  `selTrimestre.value`. A página abre nesse trimestre e na **última** lição
  da lista.
- Pular números de lição é normal: aula que não foi feita não tem arquivo.

---

## 🔹 Como ler os prints (estrutura da revista)

- **Abertura** (1ª página): **Texto Principal** e **Leitura Semanal**
  (Segunda a Sábado, uma referência por dia). O título do dia não entra; só o
  dia e a referência.
- **Objetivos, Interação e Orientação Pedagógica**: geralmente sem versículo.
- **Texto Bíblico**: a passagem lida em sala (ex.: `Fp 3.1-11`).
- **Introdução**.
- **Seções I, II e III**: os versículos do parágrafo de abertura vão no
  `refs` da própria seção; os dos tópicos **1., 2., 3.** vão no tópico.
- **Subsídio N**: no fim de cada seção → `onde: "I · Subsídio 1"`.
- **Pense!** e **Ponto Importante!**: só entram se citarem versículo.
- **Conclusão**.
- **Hora da Revisão**: as perguntas e respostas **não** entram. Se a resposta
  citar versículo, ele entra como `Hora da Revisão · N` (N = número da pergunta).

Blocos sem versículo não entram em nada (na Lição 6, o II.2 não cita
versículo, então o II vai do 1. para o 3.).

---

## 🔹 Padrão do arquivo de dados

```js
window.dadosLicaoV4 = {
  titulo: "🎭 Lição 6 – 8 nov 2026",          // sem o título da lição
  subtitulo: "Escola Dominical · 4º Trimestre 2026 · 8 nov 2026",
  paginas: "39-46",
  mapaConfig: { centro: [31.7683, 35.2137], zoom: 6 },
  hierarquia: [
    { label: "Texto Principal", refs: [ ... ], filhos: [] },
    { label: "Leitura Semanal", refs: [], filhos: [
        { label: "Segunda", refs: [ ... ], filhos: [] }, ...
    ] },
    { label: "Texto Bíblico", refs: [ ... ], filhos: [] },
    { label: "Introdução", refs: [ ... ], filhos: [] },
    { label: "I", refs: [ /* versículos da abertura da seção */ ], filhos: [
        { label: "1.", refs: [ ... ], filhos: [] },
        { label: "Subsídio 1", refs: [ ... ], filhos: [] }   // só se citar versículo
    ] },
    ...
    { label: "Conclusão", refs: [ ... ], filhos: [] },
    { label: "Hora da Revisão", refs: [], filhos: [
        { label: "5.", refs: [ ... ], filhos: [] }
    ] }
  ],
  imagens: [],       // sempre existe, mesmo vazio (gancho da biblioteca de imagens)
  listaAparicao: [   // só linhas com referência, na ordem da revista
    { numero: 1, onde: "Texto Principal", referencia: "Fp 3.2", tags: "acautelai-vos dos cães / ...", pagina: 39, id: "fp3.2", locais: [] },
    { numero: 2, onde: "Leitura Semanal · Segunda", referencia: "Gl 5.9", tags: "um pouco de fermento / leveda a massa toda", pagina: 39, id: "gl5.9a", locais: [] },
    { numero: 12, onde: "I.1", referencia: "Lv 10.1,2", tags: "Nadabe e Abiú / ...", pagina: 42, id: "lv10.1-2", locais: [] },
    { numero: 19, onde: "I · Subsídio 1", ... }
  ],
  listaAlfabetica: [ /* as mesmas linhas, sem "numero", em ordem alfabética da referência (ignorando acentos) */ ]
};
```

- Cada `ref` da hierarquia: `{ id, referencia, tags }`.
- O campo `onde` aparece na coluna 📍 Onde da página.
- O nome `dadosLicaoV4` é mantido de propósito (é o que a página lê).

---

## 🔹 Referências e IDs

- **Referência:** abreviação + capítulo + **ponto** + versículos, do jeito
  que a revista cita: `"Fp 3.2"`, `"Lv 10.1,2"`, `"1 Sm 2.12-17,22-25"`.
- `(Rm 1.17; Fp 3.9)` → duas referências: `"Rm 1.17"` e `"Fp 3.9"`.
- **(v. 3)** = versículo do **Texto Bíblico** da lição (na Lição 6, `Fp 3.3`).
- Nota de Bíblia de estudo dentro do Subsídio com "veja 1.17, nota" (sem
  livro) = mesmo livro da passagem comentada (na Lição 6, `Fp 1.17`).
- **Capítulo inteiro** ("cf. Mt 23") → intervalo completo (`Mt 23.1-39`),
  porque a página só lê capítulo.versículo. Nas tags, palavras dos versículos
  centrais.
- Ponto no lugar da vírgula por erro de impressão ("Mt 24.11.24") →
  `Mt 24.11,24`.
- **ID:** abreviação minúscula sem espaço, vírgula vira hífen:
  `fp3.2`, `lv10.1-2`, `1sm2.12-17-22-25`, `2jo1.10`.
- Referência repetida na lição ganha letra no fim, em todas as aparições e na
  ordem: `gl5.9a`, `gl5.9b`…
- A abreviação precisa existir em `LIVRO_SLUG` no `dominical-v5.html`.
- Na página, trechos com **mais de 3 versículos** mostram os 3 primeiros e o
  botão **"ver mais"** (constante `LIMITE_VERSICULOS`).
- Cada referência tem **1 card** de contexto; as outras aparições dela viram
  âncoras dentro desse card, então os links continuam funcionando.
- O mesmo versículo tem **sempre as mesmas tags**, na teologia e na dominical.

### Banco de tags (`biblioteca/tags-versiculos.js`)

É o mesmo banco da Teologia v5: o site todo usa as mesmas tags. Antes de
escrever qualquer tag ou palavra do mapa, **procurar a referência no banco**
(`window.bancoTagsVersiculos`), exatamente como a revista cita:

- **Já está no banco** → usar a `tags` e a `mapa` dele sem mudar nada (na
  Lição 6, `Tg 3.1` veio do banco).
- **Não está** → criar as tags (palavras do próprio versículo, Almeida) e,
  depois de publicar a lição, **acrescentar a referência ao banco** com
  `tags`, `mapa` (se entrou no mapa) e `usos` (`"4T2026-licao6"` etc.). Se já
  existia, só acrescentar a lição em `usos`.
- O banco fica em ordem bíblica (Gênesis → Apocalipse). A página não carrega
  esse arquivo; ele é só consulta de trabalho.

---

## 🔹 Diagrama (mapa mental resumido: 1 versículo por ramo)

O mapa é o **resumo da lição**, não a lista completa (a lista completa fica na
hierarquia e na tabela de referências). Cerca de 20 a 25 caixas:

- **raiz**: `Lição N · data`;
- **Texto Principal** → o versículo do Texto Principal;
- **Seção** → o versículo da abertura da seção (o que melhor resume, se tiver
  mais de um); seção sem versículo na abertura fica só `Seção II`;
- **cada tópico** → **1 versículo** (o que melhor resume o tópico; de
  preferência de um livro+capítulo ainda não usado no mapa); tópico sem
  versículo não aparece;
- **sem** Leitura Semanal, Texto Bíblico, Introdução, Subsídios, Conclusão e
  Hora da Revisão;
- **sem repetir** versículo;
- cada item tem **2 níveis**: o ramo com `número · Ref` e, logo abaixo, um
  sub-ramo só com a palavra-chave curta do versículo (2 a 4 palavras).

```js
window.bibliotecaMermaid["4T2026-licao6"] = `%%{init: {"mindmap": {"useMaxWidth": false}}}%%
mindmap
  root((Lição 6 · 8 nov 2026))
    Texto Principal · Fp 3.2
      acautelai-vos dos maus obreiros
    Seção I · 2 Tm 2.20
      numa grande casa
      I.1 · Lv 10.1,2
        fogo estranho
      ...
    Seção II
      II.1 · Ap 22.15
        ficarão de fora os cães
      ...
`;
```

- `useMaxWidth: false` deixa o mapa no tamanho real (no celular, arrasta para o lado).
- Sem parênteses, colchetes, aspas, `?`, `:`, `#` ou `;` nos nós.
- O mesmo versículo usa sempre a mesma palavra-chave curta (campo `mapa` do banco).
- Nenhum texto da revista no diagrama.

---

## 🔹 Perguntas (1 por subtópico, sobre o texto da revista)

**Estilo:** cada pergunta é sobre o que a **revista explica** naquele
subtópico (o texto dos prints), como numa revisão da aula. A resposta vem
desse texto, mas é escrita **com palavras próprias**, curta (1 ou 2 frases),
sem copiar frases da revista. Citações bíblicas na resposta podem ir entre
aspas (ex.: "sereis como Deus", Gênesis 3.5).

```js
window.bibliotecaPerguntas["4T2026-licao6"] = [
  { pergunta: "Segundo a lição, que exemplos do Antigo Testamento mostram maus obreiros dentro da própria liderança espiritual?",
    resposta: "Nadabe e Abiú, sobrinhos de Moisés, que ofereceram fogo estranho (Levítico 10.1,2); os filhos do sacerdote Eli (1 Samuel 2.12-17,22-25); e os filhos do profeta Samuel (1 Samuel 8.3).",
    topicoOrigem: "I.1", pagina: 42,
    tags: "Nadabe e Abiú / filhos de Eli / filhos de Samuel",
    refs: ["lv10.1-2", "1sm2.12-17-22-25", "1sm8.3"] },
  { pergunta: "O que os maus obreiros queriam impor aos gentios convertidos, e como a NVI traduz \"guardai-vos dos maus obreiros\"?",
    resposta: "Queriam obrigar os gentios a seguir a Torá. A NVI traduz como \"cuidado com os que praticam o mal\".",
    topicoOrigem: "II.2", pagina: 43,
    tags: "impor a Torá aos gentios / praticantes do mal / NVI",
    refs: ["fp3.2"] },
  ...
];
```

- **1 pergunta para cada subtópico** (`I.1`, `I.2`, `I.3`, `II.1`… até
  `III.3`): normalmente **9 perguntas**. Texto Bíblico, abertura das seções,
  Subsídios, Leitura Semanal e Conclusão não ganham pergunta própria.
- Vale também para subtópico sem versículo (na Lição 6, o II.2): a pergunta é
  sobre o que a revista diz ali.
- As perguntas ficam **na ordem da lição** no arquivo; a página mostra nessa
  ordem, com o subtópico (`II.1`) no lugar do número.
- Quando a pergunta cita a Bíblia, o livro vai por extenso ("Mateus 7.15").
- `resposta` = gabarito curto em palavras próprias; aparece no gabarito 🔑
  como ✅ Resposta. É o campo `resposta` que liga o estilo novo na página.
- `tags` = 2 a 4 palavras-chave da resposta.
- `topicoOrigem` = o subtópico (`"II.2"`); `pagina` = a página do subtópico.
- `refs` = ids dos versículos citados naquele subtópico (podem ser vários).
  No subtópico sem versículo, o id do versículo que ele comenta (`fp3.2`).
  Todo id em `refs` precisa existir na `listaAparicao`.
- **Não** copiar nem repetir as perguntas da Hora da Revisão (elas já estão
  na revista); escolher outro ângulo do mesmo subtópico.

---

## 🔹 Coisas que já ficaram combinadas

- Nada do texto da revista no site (direitos autorais); o título da lição
  também não entra (fica `Lição N – data`). As perguntas falam do conteúdo
  da revista, mas com palavras próprias.
- Não incluir anotações à mão, marcações de caneta, caixinhas marcadas nem
  respostas escritas pela Alana.
- Não precisa renomear os prints quando o número da página aparece na foto.
- `imagens: []` sempre existe, mesmo vazio.
- `locais: []` e o `mapaConfig` padrão, como na teologia.
- As lições 7 e 13 do 3T2026 ficaram no padrão antigo (com texto da revista);
  a partir da Lição 6 do 4T2026, é só Bíblia.

---

## 🔹 Depois de criar

1. Atualizar o banco `biblioteca/tags-versiculos.js` (referências novas e `usos`).
2. Validar os `.js` com Node (`window` simulado) e conferir que todos os `refs`
   das perguntas existem na `listaAparicao`, que as tags das referências saem
   do texto do versículo e que há 1 pergunta por subtópico, na ordem da lição.
3. Trocar o `?v=` dos scripts no `dominical-v5.html`.
4. Abrir o `dominical-v5.html` localmente e checar: abre na lição nova,
   hierarquia, diagrama (renderiza sem erro), perguntas, coluna 📍 Onde e
   "ver mais".
5. `git add` + `git commit` + `git push origin main`.
6. Publicação pelo **GitHub Pages** (o Netlify da equipe ficou sem créditos em
   out/2026): https://oracaobomdiajesus-art.github.io/glossario-estudo-biblico/dominical-v5.html
   (atualiza de 1 a 3 minutos depois do push).
