# 📋 Prompt pronto — Novo Capítulo da Teologia Descomplicada para Jovens (v5)

Passo a passo (e prompt pronto pra copiar e colar) pra montar um capítulo do
curso **Teologia Descomplicada para Jovens** na página `teologia-v5.html`.

## ⚠️ Regra principal: SÓ BÍBLIA

A apostila tem **direitos autorais**. O material do site **não reproduz nada
do texto dela**: nem títulos de seções ou subtópicos, nem ideia central,
explicações, exemplos, histórias, Palavra Pastoral, Perguntas Rápidas ou
tarefas. A Alana estuda **com a apostila em mãos**; o site é um índice das
**referências bíblicas** do capítulo, com a localização de cada uma.

O que entra:
- números das seções (`1.`, `2.`…) e letras dos subtópicos (`a)`, `b)`…);
- o nome genérico do bloco quando ele cita versículo (`Você Sabia?`,
  `Exemplo Atual`, `História Ilustrativa`, `Palavra Pastoral`, `Perguntas Rápidas`);
- página da apostila;
- referência bíblica;
- **tags = palavras-chave do próprio versículo** (texto da Almeida em
  `biblioteca/biblia-almeida.js`). Tag não explica o versículo, só cita
  palavras dele. Ex.: Sl 23.1 → `Senhor / pastor / nada me faltará`.

O curso tem 12 livros, cada um com 7 capítulos. Modelo atual:
`dados/teologia/dados-lv7-cp2-v5.js`.

---

## 🔹 O que anexar no chat

- Os prints/fotos do capítulo, **em ordem**, da capa ("Capítulo III") até o
  último "Espaço para Resposta". Uma página por foto ou livro aberto (duas
  páginas); fotos de lado também servem. Se alguma sair desfocada, mande de novo.
- Não precisa renomear as fotos: o número da página é lido no rodapé.
- Dizer o livro e o capítulo (ex.: "Livro 7, Capítulo 4").

---

## 🔹 Prompt pronto (copiar e colar)

```
Oi! Seguem os prints do Teologia Descomplicada para Jovens, Livro [N],
Capítulo [N] (páginas [XX-XX]). Monte no padrão v5 SÓ BÍBLIA do repositório
oracaobomdiajesus-art/glossario-estudo-biblico, seguindo o arquivo
PROMPT-NOVA-LICAO-TEOLOGIA.md (modelo: dados/teologia/dados-lv7-cp2-v5.js):

1. Arquivo de dados: dados/teologia/dados-lv[N]-cp[N]-v5.js
2. Diagrama: entrada "lv[N]-cp[N]" em biblioteca/mermaid-teologia.js
3. Perguntas: entrada "lv[N]-cp[N]" em biblioteca/perguntas-teologia.js
4. Conferir o seletor do teologia-v5.html (const capitulosDisponiveisV4)

Não reproduza nada do texto da apostila (tem direitos autorais): só
números/letras, nome do bloco, página, referência e palavras-chave do
versículo. As perguntas são só sobre o que os versículos dizem, com
resposta tirada da Bíblia. Não incluir minhas anotações à mão.
Teste a página, faça commit e push na main e me passe o link.
```

---

## 🔹 Arquivos que mudam a cada capítulo

| O quê | Onde | Chave/nome |
|---|---|---|
| Dados do capítulo | `dados/teologia/dados-lv[N]-cp[N]-v5.js` | arquivo novo |
| Diagrama | `biblioteca/mermaid-teologia.js` | `window.bibliotecaMermaid["lv[N]-cp[N]"]` |
| Perguntas | `biblioteca/perguntas-teologia.js` | `window.bibliotecaPerguntas["lv[N]-cp[N]"]` |
| Seletor | `teologia-v5.html` → `const capitulosDisponiveisV4` | `"lv[N]": [1, 2, 3, 4, 5, 6, 7]` |

O Livro 7 já está no seletor com os capítulos 1 a 7. Um livro novo precisa ser
adicionado em `capitulosDisponiveisV4`; `selLivro.value` define o livro que abre
primeiro (hoje `"lv7"`).

---

## 🔹 Como ler os prints (estrutura da apostila)

Cada capítulo tem normalmente 4 seções (`1.`–`4.`). Em cada seção, os versículos
aparecem em:
- **Versículo-chave**, logo abaixo do título → vai no `refs` da própria seção;
- subtópicos **a) b) c) d)** (às vezes e), com referências entre parênteses no fim;
- às vezes em **Você Sabia?**, **Exemplo Atual**, **História Ilustrativa**,
  **Palavra Pastoral** ou **Perguntas Rápidas**.

Blocos sem versículo não entram em nada.

A capa do capítulo não tem número impresso: é a página antes da primeira
numerada (Cap. 1 → p. 2; Cap. 2 → p. 23; Cap. 3 → p. 45).

---

## 🔹 Padrão do arquivo de dados

```js
window.dadosLicaoV4 = {
  titulo: "📚 Livro 7 – Capítulo 2",          // sem o nome do capítulo
  subtitulo: "Teologia Descomplicada para Jovens",
  paginas: "23-44",
  mapaConfig: { centro: [31.7683, 35.2137], zoom: 6 },
  hierarquia: [
    { label: "1.", refs: [ /* versículo-chave */ ], filhos: [
        { label: "a)", refs: [ ... ], filhos: [] },
        { label: "b)", refs: [ ... ], filhos: [] },
        { label: "Você Sabia?", refs: [ ... ], filhos: [] }   // só se citar versículo
    ] }
  ],
  listaAparicao: [   // só linhas com referência, na ordem da apostila
    { numero: 1, onde: "1",   referencia: "Rm 5.12",    tags: "por um só homem entrou o pecado / ...", pagina: 24, id: "rm5.12",     locais: [] },
    { numero: 2, onde: "1.a", referencia: "Gn 2.16-17", tags: "de toda árvore comerás livremente / ...", pagina: 24, id: "gn2.16-17a", locais: [] },
    { numero: 9, onde: "1 · Você Sabia?", ... }
  ],
  listaAlfabetica: [ /* as mesmas linhas, sem "numero", em ordem alfabética da referência (ignorando acentos) */ ]
};
```

- Cada `ref` da hierarquia: `{ id, referencia, tags }`.
- O campo `onde` aparece na coluna 📍 Onde da página.
- O nome `dadosLicaoV4` é mantido de propósito (é o que a página lê).

---

## 🔹 Referências e IDs

- **Referência:** abreviação + capítulo + **ponto** + versículos: `"Rm 3.23"`,
  `"1 Pe 1.15-16"`, `"Rm 3.19,23-24"`. O livro usa dois-pontos; trocar por ponto.
- `(Rm 3:20; 7:7)` → duas referências: `"Rm 3.20"` e `"Rm 7.7"`.
- **ID:** abreviação minúscula sem espaço, vírgula vira hífen:
  `rm3.23`, `1pe1.15-16`, `rm5.1-10-11`, `job38.7` (Jó), `ex25.18` (Êx).
- ID repetido no capítulo ganha letra no fim, na ordem: `rm3.23a`, `rm3.23b`…
- A abreviação precisa existir em `LIVRO_SLUG` no `teologia-v5.html`.
- O mesmo versículo tem **sempre as mesmas tags**, em qualquer capítulo
  (reaproveitar as já usadas nos capítulos anteriores).

---

## 🔹 Diagrama (mapa mental resumido: 1 versículo por ramo)

O mapa é o **resumo do raciocínio do capítulo**, não a lista completa (a lista
completa fica na hierarquia e na tabela de referências). Cerca de 20 caixas:

- **Seção** → só o **versículo-chave**, no próprio nó da seção;
- **cada letra** → **1 versículo** (o que melhor resume a letra; de preferência
  de um livro+capítulo ainda não usado no mapa);
- **sem** blocos extras (Você Sabia?, História…), a não ser que a seção não
  tenha letras (ex.: "Final da Temporada");
- **sem repetir** versículo;
- cada nó: `Ref · palavra-chave curta` (2 a 4 palavras marcantes do versículo).

```js
window.bibliotecaMermaid["lv7-cp2"] = `%%{init: {"mindmap": {"useMaxWidth": false}}}%%
mindmap
  root((Livro 7 · Cap. 2))
    Seção 1 · Rm 5.12 · por um só homem entrou o pecado
      1.a · Gn 2.16-17 · não comerás
      1.b · Ec 7.29 · buscaram muitos artifícios
      1.c · Gn 3.1-6 · serpente astuta
      1.d · Jo 8.44 · pai da mentira
    Seção 2 · Jr 17.9 · enganoso é o coração
      ...
`;
```

- `useMaxWidth: false` deixa o mapa no tamanho real (no celular, arrasta para o lado).
- Sem parênteses, colchetes, aspas, `?`, `:`, `#` ou `;` nos nós.
- O mesmo versículo usa sempre a mesma palavra-chave curta em todos os capítulos.
- Nenhum texto da apostila no diagrama.

---

## 🔹 Perguntas (só sobre os versículos)

O tema geral do capítulo (ex.: origem do pecado, como ele atinge outros, a cruz)
pode guiar quais versículos perguntar, mas **a pergunta é sobre o que o
versículo diz**, e a resposta vem do texto bíblico (Almeida).

```js
window.bibliotecaPerguntas["lv7-cp2"] = [
  { pergunta: "Segundo Romanos 5.12, por quem o pecado entrou no mundo, e o que veio com ele?",
    topicoOrigem: "1", pagina: 24,
    tags: "por um só homem / a morte, que passou a todos os homens",
    refs: ["rm5.12"] },
  ...
];
```

- Uns 5 ou 6 por seção (cerca de 20 a 25 por capítulo).
- Na pergunta, o livro bíblico vai por extenso ("Romanos 5.12").
- `topicoOrigem` = mesmo valor do `onde` (`"1"`, `"1.a"`, `"2 · Você Sabia?"`).
- `tags` = gabarito (aparece no 🔑), tirado do versículo.
- Todo id em `refs` precisa existir na `listaAparicao`.
- **Não** copiar as Perguntas Rápidas da apostila.

---

## 🔹 Coisas que já ficaram combinadas

- Nada do texto da apostila no site (direitos autorais).
- Não incluir anotações à mão, marcações de caneta, caixinhas marcadas nem
  respostas escritas pela Alana.
- Não precisa renomear os prints quando o número da página aparece na foto.
- Geografia não é central: `locais: []` e o `mapaConfig` padrão.

---

## 🔹 Depois de criar

1. Validar os `.js` com Node (`window` simulado) e conferir que todos os `refs`
   das perguntas existem na `listaAparicao`.
2. Abrir `teologia-v5.html` localmente e checar título, hierarquia, diagrama (renderiza sem erro),
   perguntas e a coluna 📍 Onde.
3. `git add` + `git commit` + `git push origin main`.
4. Publicação pelo **GitHub Pages** (o Netlify da equipe ficou sem créditos em
   out/2026): https://oracaobomdiajesus-art.github.io/glossario-estudo-biblico/teologia-v5.html
   (atualiza de 1 a 3 minutos depois do push).
