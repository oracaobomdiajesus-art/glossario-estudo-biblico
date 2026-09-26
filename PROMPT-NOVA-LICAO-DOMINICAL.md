# 📋 Prompt pronto — Nova Lição da Escola Dominical (v5)

Este arquivo guarda o passo a passo (e um prompt pronto pra copiar e colar)
pra pedir uma nova lição da Escola Dominical sempre no mesmo padrão usado
nas lições 7 e 13.

---

## 🔹 O que anexar no chat

- Os prints/fotos das páginas da lição (do material impresso), **em ordem**.
- Se souber, o número da lição, o trimestre/ano e as páginas do livro (ex.: "90-97").

---

## 🔹 Prompt pronto (copiar e colar)

```
Oi! Segue os prints da Lição [NÚMERO] (trimestre [3T2026 ou outro], páginas
[XX-XX]). Quero que você monte, no mesmo padrão da última lição feita
(pegue a lição mais recente na pasta dados/dominical/ como referência,
hoje é a lição 13 em dados-3T2026-licao13-v5.js):

1. O arquivo de dados da lição (dados/dominical/dados-[TRIMESTRE]-licao[N]-v5.js)
2. A entrada do mapa mental no biblioteca/mermaid-dominical.js
3. A entrada de perguntas e respostas no biblioteca/perguntas-dominical.js
4. Adicionar a lição [N] na lista de lições disponíveis do dominical-v5.html
   (const licoesDisponiveisV4)

Segue fielmente o material da lição (não parafrasear, usar nomes completos
dos livros bíblicos e ponto como separador de capítulo/versículo, ex.:
"Josué 8.30"). Se tiver alguma dúvida sobre algo ambíguo no material,
me pergunte antes de finalizar.
```

---

## 🔹 Padrão de dados (pra você conferir ou pra eu seguir)

Estrutura do arquivo `dados-[trimestre]-licao[N]-v5.js`:

```js
window.dadosLicaoV4 = {
  titulo: "👑 Lição [N] – [Título da lição]",
  subtitulo: "Escola Dominical · [trimestre] · [data]",
  paginas: "[XX-XX]",
  mapaConfig: { centro: [lat, lng], zoom: N },
  hierarquia: { /* árvore de tópicos: Texto Principal, Resumo,
                   Leitura Semanal, Objetivos, Texto Bíblico,
                   Introdução, seções I/II/III com Subsídios,
                   Hora da Revisão, Conclusão, Estante do Professor */ },
  imagens: [],           // sempre deixar vazio — é o "gancho" pra
                          // biblioteca de imagens linkar depois,
                          // mesmo que ainda não tenha nenhuma imagem
                          // pra essa lição
  listaAparicao: [ /* todas as referências, na ordem que aparecem */ ],
  listaAlfabetica: [ /* mesmas referências, sem repetir, em ordem
                         alfabética pelo texto da referência */ ]
};
```

**ID da referência:** nome do livro abreviado + capítulo, minúsculo, sem
espaço, vírgula vira hífen.
Exemplos: "Jz 8.30,31" → `jz8.30-31` | "1 Pe 5.2,3" → `1pe5.2-3`

**Mermaid** (`biblioteca/mermaid-dominical.js`), chave `"[trimestre]-licao[N]"`:
```js
window.bibliotecaMermaid["[trimestre]-licao[N]"] = `mindmap
  root(("[Título resumido]"))
    I[Seção I]
    II[Seção II]
    III[Seção III]
`;
```

**Perguntas** (`biblioteca/perguntas-dominical.js`), mesma chave:
```js
window.bibliotecaPerguntas["[trimestre]-licao[N]"] = [
  { pergunta: "...", topicoOrigem: "...", pagina: N, tags: [...], refs: [...] },
  // 8 perguntas de aprofundamento + 1 pergunta livre +
  // 5 perguntas oficiais da "Hora da Revisão"
];
```

---

## 🔹 Coisas que já ficaram combinadas (não precisa perguntar de novo)

- Nomes como "gibeonitas" ficam do jeito que estão no material, sem mudar.
- Pular números de lição (ex.: faltaram aulas 8 a 12) é esperado — não é erro,
  só não vai ter arquivo dessas lições mesmo.
- O campo `imagens: []` deve sempre existir, mesmo vazio, porque a biblioteca
  de imagens (`biblioteca/imagens-biblicas.js`) recebe imagens depois, de
  forma avulsa, e pode linkar com referências de lições já criadas.

---

## 🔹 Depois de criar

1. Validar a sintaxe dos arquivos `.js` antes de subir.
2. `git add` + `git commit` + `git push origin main` (ou pedir pra eu subir direto).
3. Testar no site publicado se a lição aparece certinho no seletor.
