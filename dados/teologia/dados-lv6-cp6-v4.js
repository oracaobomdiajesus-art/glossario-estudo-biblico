// ============================================
// DADOS DO CURSO TEOLOGIA DESCOMPLICADA PARA JOVENS
// LIVRO 6 - CAPÍTULO VI - DÚVIDAS SINCERAS QUE OS
//           JOVENS TÊM
// MODELO V4 - hierarquia, listaAparicao, listaAlfabetica
//             (extraídos dos prints, páginas 114-135)
// Contexto histórico -> motor-contextos.js (automático,
//             igual dominical v4 — não precisa cadastrar nada aqui)
//
// Atualizado para o padrão v4 do dominical:
// - Notação de referência padronizada para PONTO (ex: "Sl 91.11"),
//   igual ao id ("sl91.11a") — antes usava dois-pontos ("Sl 91:11"),
//   fora do padrão usado pelo motor-contextos.js.
// - Campo locais: [] adicionado em cada item de listaAparicao e
//   listaAlfabetica, igual ao schema usado no dominical v4.
// ============================================

window.dadosLicaoV4 = {
  titulo: "📚 Capítulo VI – Dúvidas Sinceras Que os Jovens Têm",
  subtitulo: "Teologia Descomplicada para Jovens - Livro 6, Capítulo 6",
  paginas: "114-135",

  mapaConfig: {
    centro: [31.7683, 35.2137],
    zoom: 6
  },

  // ============================================
  // HIERARQUIA DE TÓPICOS
  // ============================================
  hierarquia: [
    {
      label: "1. Todo crente tem um anjo da guarda?",
      refs: [
        { id: "sl91.11a", referencia: "Sl 91.11", tags: "versículo-chave / porque aos seus anjos dará ordens a teu respeito, para que te guardem em todos os teus caminhos" }
      ],
      filhos: [
        {
          label: "a) Anjos só agem por ordem de Deus",
          refs: [
            { id: "sl91.11b", referencia: "Sl 91.11", tags: "é Deus quem dá ordens aos anjos; eles não escolhem sozinhos quem proteger" }
          ]
        },
        {
          label: "b) Quando a Bíblia registra, mas não ensina",
          refs: [
            { id: "at12.15", referencia: "At 12.15", tags: "\"é o seu anjo\" — o texto registra a fala dos irmãos, sem transformá-la em doutrina" }
          ]
        },
        {
          label: "c) A Bíblia não afirma que cada pessoa tem um anjo exclusivo",
          refs: [
            { id: "mt18.10", referencia: "Mt 18.10", tags: "os seus anjos veem continuamente a face do Pai" },
            { id: "hb1.14a", referencia: "Hb 1.14", tags: "não são todos eles espíritos ministradores, enviados para servir?" }
          ]
        },
        {
          label: "d) Deus pode enviar um ou vários anjos conforme a necessidade",
          refs: [
            { id: "2rs6.16-17b", referencia: "2 Rs 6.16-17", tags: "o cuidado de Deus é ilimitado e não depende de uma estrutura fixa" },
            { id: "dn7.10", referencia: "Dn 7.10", tags: "milhares de milhares o serviam" },
            { id: "sl91b", referencia: "Sl 91", tags: "o cuidado de Deus conforme a situação, não um padrão fixo de um anjo por pessoa" }
          ]
        },
        {
          label: "Perguntas Rápidas dentro da explicação — a Bíblia fala de anjos enviados por Deus, não de \"anjo da guarda\"; a fonte da proteção é o Senhor",
          refs: []
        },
        {
          label: "Exemplo Didático — um médico-chefe que coordena uma equipe em um hospital",
          refs: []
        },
        {
          label: "Exemplo Atual — um jovem que anda por uma área monitorada por câmeras e seguranças",
          refs: []
        },
        {
          label: "Toque de Sabedoria — mais valioso do que a presença de um anjo é a certeza da presença de Deus",
          refs: []
        },
        {
          label: "Você sabia? — a expressão \"anjo da guarda\" não aparece na Bíblia",
          refs: [
            { id: "sl34.7", referencia: "Sl 34.7", tags: "o anjo do Senhor acampa-se ao redor dos que o temem" },
            { id: "hb1.14b", referencia: "Hb 1.14", tags: "o foco da proteção sempre está em Deus, e não em um anjo específico" }
          ]
        },
        {
          label: "História Ilustrativa — O Cuidado Vem de Deus (Laura)",
          refs: []
        },
        {
          label: "Palavra Pastoral — não se preocupe em descobrir se tem um anjo só seu; Deus cuida de você e pode enviar quantos forem necessários",
          refs: []
        },
        {
          label: "Tarefa Simples para o Coração — orar de gratidão a Deus pelo cuidado constante e escrever uma situação onde sentiu a proteção do Senhor",
          refs: []
        }
      ]
    },
    {
      label: "2. Um cristão pode ser possuído por demônios?",
      refs: [
        { id: "1co6.19a", referencia: "1 Co 6.19", tags: "versículo-chave / o corpo de vocês é santuário do Espírito Santo que habita em vocês" }
      ],
      filhos: [
        {
          label: "a) O cristão é habitação do Espírito Santo",
          refs: [
            { id: "1co6.19b", referencia: "1 Co 6.19", tags: "na conversão, Deus faz morada no coração do cristão por meio do Espírito Santo" },
            { id: "rm8.9", referencia: "Rm 8.9", tags: "se alguém não tem o Espírito de Cristo, esse tal não é dele" },
            { id: "1jo4.4a", referencia: "1 Jo 4.4", tags: "onde o Espírito habita, não há espaço para domínio do inimigo" }
          ]
        },
        {
          label: "b) O cristão pode ser tentado e oprimido, mas não possuído",
          refs: [
            { id: "tg1.14a", referencia: "Tg 1.14", tags: "na opressão, forças espirituais externas podem influenciar fortemente a mente e as emoções" },
            { id: "1pe5.8-9", referencia: "1 Pe 5.8-9", tags: "a pessoa continua responsável por suas escolhas / resisti-lhe firmes na fé" },
            { id: "ef6.11c", referencia: "Ef 6.11", tags: "a possessão implica domínio espiritual que a Bíblia não atribui ao verdadeiro cristão" }
          ]
        },
        {
          label: "c) Nenhum cristão é mencionado na Bíblia sendo possuído por demônios",
          refs: [
            { id: "cl1.13", referencia: "Cl 1.13", tags: "os crentes são descritos como templo do Espírito Santo e propriedade de Deus" }
          ]
        },
        {
          label: "d) O cristão deve viver com equilíbrio, sem medo e sem descuido",
          refs: [
            { id: "1pe5.8b", referencia: "1 Pe 5.8", tags: "o crente não deve viver apavorado com o inimigo nem agir com negligência espiritual" },
            { id: "2tm1.7", referencia: "2 Tm 1.7", tags: "Deus não nos deu o espírito de temor, mas de fortaleza, amor e moderação" },
            { id: "tg4.7c", referencia: "Tg 4.7", tags: "vigilância, sobriedade e confiança no poder de Deus" }
          ]
        },
        {
          label: "Perguntas Rápidas dentro da explicação — o cristão não pode ser possuído porque pertence a Deus e é habitação do Espírito Santo",
          refs: []
        },
        {
          label: "Exemplo Didático — uma casa que agora tem dono, escritura registrada e proteção constante",
          refs: []
        },
        {
          label: "Exemplo Atual — um jovem usando um cofre com senha, que ninguém consegue abrir",
          refs: []
        },
        {
          label: "Toque de Sabedoria — o selo do Espírito Santo é a marca de uma vida que já tem dono",
          refs: []
        },
        {
          label: "Você sabia? — 1 João 4:4 é uma das maiores declarações de segurança espiritual para o cristão",
          refs: [
            { id: "1jo4.4b", referencia: "1 Jo 4.4", tags: "maior é aquele que está em vós do que aquele que está no mundo" }
          ]
        },
        {
          label: "História Ilustrativa — O Selo da Propriedade (José Ricardo)",
          refs: []
        },
        {
          label: "Palavra Pastoral — você não pertence às trevas, você pertence a Cristo; não viva com medo do inimigo",
          refs: []
        },
        {
          label: "Tarefa Simples para o Coração — escrever uma oração agradecendo a Deus pela salvação e declarando que pertence a Cristo",
          refs: []
        }
      ]
    },
    {
      label: "3. Existe diferença entre tentação e provação?",
      refs: [
        { id: "tg1.13a", referencia: "Tg 1.13", tags: "versículo-chave / ninguém, ao ser tentado, diga: estou sendo tentado por Deus" }
      ],
      filhos: [
        {
          label: "a) A diferença entre tentação e provação",
          refs: [
            { id: "tg1.14b", referencia: "Tg 1.14", tags: "tentação: quando somos atraídos para o pecado, nasce dentro de nós" },
            { id: "mt4.1", referencia: "Mt 4.1", tags: "a tentação também pode ser estimulada pelo inimigo" },
            { id: "tg1.2-3a", referencia: "Tg 1.2-3", tags: "provação: dificuldades permitidas por Deus para fortalecer a nossa fé" },
            { id: "1pe1.6-7", referencia: "1 Pe 1.6-7", tags: "a provação pode vir através de perdas, desafios ou momentos difíceis" }
          ]
        },
        {
          label: "b) A tentação atrai para o pecado; a provação testa a fidelidade",
          refs: [
            { id: "gn3.6", referencia: "Gn 3.6", tags: "Eva foi tentada pelo desejo, pela aparência e pela falsa promessa ligada ao fruto" },
            { id: "gn22.1-12", referencia: "Gn 22.1-12", tags: "Abraão revelou sua fé na provação ao entregar Isaque em obediência a Deus" },
            { id: "1pe1.7", referencia: "1 Pe 1.7", tags: "a provação revela se nossa fé é verdadeira ou superficial" }
          ]
        },
        {
          label: "c) A tentação pode ser evitada; a provação precisa ser enfrentada",
          refs: [
            { id: "gn39.12", referencia: "Gn 39.12", tags: "José fugiu da tentação quando a mulher de Potifar tentou seduzi-lo" },
            { id: "dn6.16-23", referencia: "Dn 6.16-23", tags: "Daniel não pôde evitar a provação da cova dos leões, mas permaneceu fiel" },
            { id: "mt26.41b", referencia: "Mt 26.41", tags: "muitas tentações podem ser evitadas com vigilância e decisões sábias" }
          ]
        },
        {
          label: "d) A tentação leva à queda quando aceita; a provação gera aprovação quando suportada",
          refs: [
            { id: "js7.20-21", referencia: "Js 7.20-21", tags: "Acã viu, desejou e tomou para si aquilo que Deus havia proibido" },
            { id: "dn1.8", referencia: "Dn 1.8", tags: "Daniel propôs no coração não se contaminar" },
            { id: "dn6.10-22", referencia: "Dn 6.10,22", tags: "Daniel foi provado em terra estranha e permaneceu fiel, honrado pelo Senhor" }
          ]
        },
        {
          label: "Perguntas Rápidas dentro da explicação — ceder à tentação traz pecado e afastamento de Deus; suportar a provação traz aprovação e crescimento espiritual",
          refs: []
        },
        {
          label: "Exemplo Didático — a tentação é como um doce envenenado; a provação é como um remédio amargo",
          refs: []
        },
        {
          label: "Exemplo Atual — um jovem que vence o convite pra uma festa errada, mas não escolheu enfrentar o divórcio dos pais",
          refs: []
        },
        {
          label: "Toque de Sabedoria — a tentação testa nossa obediência; a provação desenvolve nossa perseverança",
          refs: []
        },
        {
          label: "Você sabia? — a palavra grega peirasmos pode significar tanto \"tentação\" quanto \"provação\", dependendo do contexto",
          refs: [
            { id: "tg1.2-13", referencia: "Tg 1.2,13", tags: "você sabia / peirasmos: contexto de pecado é tentação, contexto de fé é provação" }
          ]
        },
        {
          label: "História Ilustrativa — Entre Duas Lutas (Endrik)",
          refs: []
        },
        {
          label: "Palavra Pastoral — nem toda luta que você enfrenta é igual; na tentação resista e fuja do mal, na provação permaneça firme e confie em Deus",
          refs: []
        },
        {
          label: "Tarefa Simples para o Coração — anotar se o que está enfrentando é tentação ou provação",
          refs: []
        }
      ]
    },
    {
      label: "4. Como ter paz mesmo em meio à batalha espiritual?",
      refs: [
        { id: "jo14.27", referencia: "Jo 14.27", tags: "versículo-chave / deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá" }
      ],
      filhos: [
        {
          label: "a) A paz nasce da presença de Deus",
          refs: [
            { id: "sl23.1-4", referencia: "Sl 23.1,4", tags: "Davi enfrentou perigos, mas descansava porque sabia que Deus era seu pastor" },
            { id: "hb13.5", referencia: "Hb 13.5", tags: "não te deixarei, nem te desampararei" }
          ]
        },
        {
          label: "b) A paz nasce da confiança em Deus",
          refs: [
            { id: "is26.3", referencia: "Is 26.3", tags: "tu conservarás em paz aquele cujo propósito está firme em ti" },
            { id: "rm4.20-21", referencia: "Rm 4.20-21", tags: "Abraão confiou na promessa, mesmo sem ver o cumprimento imediato" }
          ]
        },
        {
          label: "c) A paz vem quando entregamos tudo a Deus em oração",
          refs: [
            { id: "fp4.6-7", referencia: "Fp 4.6-7", tags: "a oração é o caminho para trocar ansiedade por paz" },
            { id: "1pe5.7", referencia: "1 Pe 5.7", tags: "lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós" },
            { id: "1sm1.18", referencia: "1 Sm 1.18", tags: "Ana orou em meio à dor e saiu em paz, confiando que Deus cuidaria da situação" }
          ]
        },
        {
          label: "d) A paz permanece quando confiamos que Deus luta por nós",
          refs: [
            { id: "ex14.14", referencia: "Êx 14.14", tags: "o Senhor pelejará por vós, e vós vos calareis" },
            { id: "2cr20.17", referencia: "2 Cr 20.17", tags: "não sereis vós que pelejareis nesta batalha; o Senhor estará convosco" },
            { id: "sl46.10", referencia: "Sl 46.10", tags: "aquietai-vos, e sabei que eu sou Deus" }
          ]
        },
        {
          label: "Perguntas Rápidas dentro da explicação — a paz não depende das circunstâncias, mas da presença de Deus e nasce da confiança nEle; a oração troca ansiedade por paz",
          refs: []
        },
        {
          label: "Exemplo Didático — uma criança atravessando uma multidão de mãos dadas com o pai",
          refs: []
        },
        {
          label: "Exemplo Atual — um jovem enfrentando pressão e lutas internas que sente paz profunda ao buscar a Deus em oração",
          refs: []
        },
        {
          label: "Toque de Sabedoria — a paz de Deus não elimina a guerra, ela nos sustenta no meio dela",
          refs: []
        },
        {
          label: "Você sabia? — em Mateus 14, Jesus primeiro acalmou o coração dos discípulos antes de agir sobre as circunstâncias",
          refs: [
            { id: "mt14.27", referencia: "Mt 14.27", tags: "tende bom ânimo! sou eu. não temais!" }
          ]
        },
        {
          label: "História Ilustrativa — A Janela Iluminada (Ludmilla)",
          refs: [
            { id: "fp4.7", referencia: "Fp 4.7", tags: "e a paz de Deus, que excede todo entendimento, guardará o vosso coração e a vossa mente em Cristo Jesus" }
          ]
        },
        {
          label: "Palavra Pastoral — Deus não prometeu ausência de lutas, mas prometeu estar conosco todos os dias",
          refs: []
        },
        {
          label: "Tarefa Simples para o Coração — escrever uma preocupação do coração e orar entregando isso a Deus",
          refs: []
        }
      ]
    }
  ],

  // ============================================
  // LISTA DE APARIÇÃO
  // ============================================
  listaAparicao: [
    { numero: 1, referencia: "", tags: "capítulo VI / capa / Dúvidas sinceras que os jovens têm", pagina: 114, id: "", locais: [] },
    { numero: 2, referencia: "Sl 91.11", tags: "versículo-chave / porque aos seus anjos dará ordens a teu respeito, para que te guardem em todos os teus caminhos", pagina: 115, id: "sl91.11a", locais: [] },
    { numero: 3, referencia: "", tags: "ideia central / Deus envia anjos para proteger os que o temem, mas não fala de um anjo particular para cada crente", pagina: 115, id: "", locais: [] },
    { numero: 4, referencia: "", tags: "explicação simples e profunda / a Palavra não fala de um anjo exclusivo para cada pessoa", pagina: 115, id: "", locais: [] },
    { numero: 5, referencia: "Sl 91.11", tags: "é Deus quem dá ordens aos anjos; eles não escolhem sozinhos quem proteger", pagina: 115, id: "sl91.11b", locais: [] },
    { numero: 6, referencia: "At 12.15", tags: "\"é o seu anjo\" — o texto registra a fala dos irmãos, sem transformá-la em doutrina", pagina: 116, id: "at12.15", locais: [] },
    { numero: 7, referencia: "Mt 18.10", tags: "os seus anjos veem continuamente a face do Pai", pagina: 116, id: "mt18.10", locais: [] },
    { numero: 8, referencia: "Hb 1.14", tags: "não são todos eles espíritos ministradores, enviados para servir?", pagina: 116, id: "hb1.14a", locais: [] },
    { numero: 9, referencia: "2 Rs 6.16-17", tags: "o cuidado de Deus é ilimitado e não depende de uma estrutura fixa", pagina: 116, id: "2rs6.16-17b", locais: [] },
    { numero: 10, referencia: "Dn 7.10", tags: "milhares de milhares o serviam", pagina: 116, id: "dn7.10", locais: [] },
    { numero: 11, referencia: "Sl 91", tags: "o cuidado de Deus conforme a situação, não um padrão fixo de um anjo por pessoa", pagina: 116, id: "sl91b", locais: [] },
    { numero: 12, referencia: "", tags: "perguntas rápidas / a Bíblia fala de anjos enviados por Deus, não de anjo da guarda / a fonte da proteção é o Senhor", pagina: 116, id: "", locais: [] },
    { numero: 13, referencia: "", tags: "exemplo didático / um médico-chefe que coordena uma equipe em um hospital", pagina: 116, id: "", locais: [] },
    { numero: 14, referencia: "", tags: "exemplo atual / um jovem que anda por uma área monitorada por câmeras e seguranças", pagina: 117, id: "", locais: [] },
    { numero: 15, referencia: "", tags: "toque de sabedoria / mais valioso do que a presença de um anjo é a certeza da presença de Deus", pagina: 117, id: "", locais: [] },
    { numero: 16, referencia: "Sl 34.7", tags: "você sabia / o anjo do Senhor acampa-se ao redor dos que o temem", pagina: 118, id: "sl34.7", locais: [] },
    { numero: 17, referencia: "Hb 1.14", tags: "o foco da proteção sempre está em Deus, e não em um anjo específico", pagina: 118, id: "hb1.14b", locais: [] },
    { numero: 18, referencia: "", tags: "história ilustrativa / o cuidado vem de Deus / Laura", pagina: 118, id: "", locais: [] },
    { numero: 19, referencia: "", tags: "palavra pastoral / não se preocupe em descobrir se tem um anjo só seu; Deus cuida de você", pagina: 119, id: "", locais: [] },
    { numero: 20, referencia: "", tags: "aplicação prática / marque suas respostas", pagina: 119, id: "", locais: [] },
    { numero: 21, referencia: "", tags: "tarefa simples para o coração / orar de gratidão pelo cuidado constante de Deus", pagina: 119, id: "", locais: [] },
    { numero: 22, referencia: "", tags: "espaço para resposta", pagina: 119, id: "", locais: [] },
    { numero: 23, referencia: "1 Co 6.19", tags: "versículo-chave / o corpo de vocês é santuário do Espírito Santo que habita em vocês", pagina: 120, id: "1co6.19a", locais: [] },
    { numero: 24, referencia: "", tags: "ideia central / a Bíblia ensina que um verdadeiro cristão não pode ser possuído por demônios", pagina: 120, id: "", locais: [] },
    { numero: 25, referencia: "", tags: "explicação simples e profunda / muitos confundem tentação, opressão e possessão", pagina: 120, id: "", locais: [] },
    { numero: 26, referencia: "1 Co 6.19", tags: "na conversão, Deus faz morada no coração do cristão por meio do Espírito Santo", pagina: 120, id: "1co6.19b", locais: [] },
    { numero: 27, referencia: "Rm 8.9", tags: "se alguém não tem o Espírito de Cristo, esse tal não é dele", pagina: 120, id: "rm8.9", locais: [] },
    { numero: 28, referencia: "1 Jo 4.4", tags: "onde o Espírito habita, não há espaço para domínio do inimigo", pagina: 120, id: "1jo4.4a", locais: [] },
    { numero: 29, referencia: "Tg 1.14", tags: "na opressão, forças espirituais externas podem influenciar fortemente a mente e as emoções", pagina: 121, id: "tg1.14a", locais: [] },
    { numero: 30, referencia: "1 Pe 5.8-9", tags: "a pessoa continua responsável por suas escolhas / resisti-lhe firmes na fé", pagina: 121, id: "1pe5.8-9", locais: [] },
    { numero: 31, referencia: "Ef 6.11", tags: "a possessão implica domínio espiritual que a Bíblia não atribui ao verdadeiro cristão", pagina: 121, id: "ef6.11c", locais: [] },
    { numero: 32, referencia: "Cl 1.13", tags: "os crentes são descritos como templo do Espírito Santo e propriedade de Deus", pagina: 121, id: "cl1.13", locais: [] },
    { numero: 33, referencia: "1 Pe 5.8", tags: "o crente não deve viver apavorado com o inimigo nem agir com negligência espiritual", pagina: 121, id: "1pe5.8b", locais: [] },
    { numero: 34, referencia: "2 Tm 1.7", tags: "Deus não nos deu o espírito de temor, mas de fortaleza, amor e moderação", pagina: 121, id: "2tm1.7", locais: [] },
    { numero: 35, referencia: "Tg 4.7", tags: "vigilância, sobriedade e confiança no poder de Deus", pagina: 121, id: "tg4.7c", locais: [] },
    { numero: 36, referencia: "", tags: "perguntas rápidas / o cristão não pode ser possuído porque pertence a Deus / o cristão é liberto do império das trevas", pagina: 122, id: "", locais: [] },
    { numero: 37, referencia: "", tags: "exemplo didático / uma casa que agora tem dono, escritura registrada e proteção constante", pagina: 122, id: "", locais: [] },
    { numero: 38, referencia: "", tags: "exemplo atual / um jovem usando um cofre com senha, que ninguém consegue abrir", pagina: 122, id: "", locais: [] },
    { numero: 39, referencia: "", tags: "toque de sabedoria / o selo do Espírito Santo é a marca de uma vida que já tem dono", pagina: 122, id: "", locais: [] },
    { numero: 40, referencia: "1 Jo 4.4", tags: "você sabia / maior é aquele que está em vós do que aquele que está no mundo", pagina: 123, id: "1jo4.4b", locais: [] },
    { numero: 41, referencia: "", tags: "história ilustrativa / o selo da propriedade / José Ricardo", pagina: 123, id: "", locais: [] },
    { numero: 42, referencia: "", tags: "palavra pastoral / você não pertence às trevas, você pertence a Cristo", pagina: 124, id: "", locais: [] },
    { numero: 43, referencia: "", tags: "aplicação prática / marque suas respostas", pagina: 124, id: "", locais: [] },
    { numero: 44, referencia: "", tags: "tarefa simples para o coração / escrever oração agradecendo pela salvação e proteção", pagina: 124, id: "", locais: [] },
    { numero: 45, referencia: "", tags: "espaço para resposta", pagina: 124, id: "", locais: [] },
    { numero: 46, referencia: "Tg 1.13", tags: "versículo-chave / ninguém, ao ser tentado, diga: estou sendo tentado por Deus", pagina: 125, id: "tg1.13a", locais: [] },
    { numero: 47, referencia: "", tags: "ideia central / a tentação é um convite ao pecado; a provação é permitida por Deus pra fortalecer a fé", pagina: 125, id: "", locais: [] },
    { numero: 48, referencia: "", tags: "explicação simples e profunda / nem toda luta tem a mesma origem nem o mesmo propósito", pagina: 125, id: "", locais: [] },
    { numero: 49, referencia: "Tg 1.14", tags: "tentação: quando somos atraídos para o pecado, nasce dentro de nós", pagina: 125, id: "tg1.14b", locais: [] },
    { numero: 50, referencia: "Mt 4.1", tags: "a tentação também pode ser estimulada pelo inimigo", pagina: 125, id: "mt4.1", locais: [] },
    { numero: 51, referencia: "Tg 1.2-3", tags: "provação: dificuldades permitidas por Deus para fortalecer a nossa fé", pagina: 125, id: "tg1.2-3a", locais: [] },
    { numero: 52, referencia: "1 Pe 1.6-7", tags: "a provação pode vir através de perdas, desafios ou momentos difíceis", pagina: 125, id: "1pe1.6-7", locais: [] },
    { numero: 53, referencia: "Gn 3.6", tags: "Eva foi tentada pelo desejo, pela aparência e pela falsa promessa ligada ao fruto", pagina: 126, id: "gn3.6", locais: [] },
    { numero: 54, referencia: "Gn 22.1-12", tags: "Abraão revelou sua fé na provação ao entregar Isaque em obediência a Deus", pagina: 126, id: "gn22.1-12", locais: [] },
    { numero: 55, referencia: "1 Pe 1.7", tags: "a provação revela se nossa fé é verdadeira ou superficial", pagina: 126, id: "1pe1.7", locais: [] },
    { numero: 56, referencia: "Gn 39.12", tags: "José fugiu da tentação quando a mulher de Potifar tentou seduzi-lo", pagina: 126, id: "gn39.12", locais: [] },
    { numero: 57, referencia: "Dn 6.16-23", tags: "Daniel não pôde evitar a provação da cova dos leões, mas permaneceu fiel", pagina: 126, id: "dn6.16-23", locais: [] },
    { numero: 58, referencia: "Mt 26.41", tags: "muitas tentações podem ser evitadas com vigilância e decisões sábias", pagina: 126, id: "mt26.41b", locais: [] },
    { numero: 59, referencia: "Js 7.20-21", tags: "Acã viu, desejou e tomou para si aquilo que Deus havia proibido", pagina: 126, id: "js7.20-21", locais: [] },
    { numero: 60, referencia: "Dn 1.8", tags: "Daniel propôs no coração não se contaminar", pagina: 126, id: "dn1.8", locais: [] },
    { numero: 61, referencia: "Dn 6.10,22", tags: "Daniel foi provado em terra estranha e permaneceu fiel, honrado pelo Senhor", pagina: 126, id: "dn6.10-22", locais: [] },
    { numero: 62, referencia: "", tags: "perguntas rápidas / ceder à tentação traz pecado / suportar a provação traz aprovação e crescimento", pagina: 127, id: "", locais: [] },
    { numero: 63, referencia: "", tags: "exemplo didático / a tentação é como um doce envenenado; a provação é como um remédio amargo", pagina: 127, id: "", locais: [] },
    { numero: 64, referencia: "", tags: "exemplo atual / jovem que vence convite pra festa errada / enfrenta o divórcio dos pais", pagina: 127, id: "", locais: [] },
    { numero: 65, referencia: "", tags: "toque de sabedoria / a tentação testa nossa obediência; a provação desenvolve nossa perseverança", pagina: 127, id: "", locais: [] },
    { numero: 66, referencia: "Tg 1.2,13", tags: "você sabia / a palavra grega peirasmos pode significar tentação ou provação, dependendo do contexto", pagina: 128, id: "tg1.2-13", locais: [] },
    { numero: 67, referencia: "", tags: "história ilustrativa / entre duas lutas / Endrik", pagina: 128, id: "", locais: [] },
    { numero: 68, referencia: "", tags: "palavra pastoral / nem toda luta que você enfrenta é igual", pagina: 129, id: "", locais: [] },
    { numero: 69, referencia: "", tags: "aplicação prática / marque suas respostas", pagina: 129, id: "", locais: [] },
    { numero: 70, referencia: "", tags: "tarefa simples para o coração / anotar se o que está enfrentando é tentação ou provação", pagina: 130, id: "", locais: [] },
    { numero: 71, referencia: "", tags: "espaço para resposta", pagina: 130, id: "", locais: [] },
    { numero: 72, referencia: "Jo 14.27", tags: "versículo-chave / deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá", pagina: 131, id: "jo14.27", locais: [] },
    { numero: 73, referencia: "", tags: "ideia central / mesmo em meio à batalha espiritual, o cristão pode viver em paz", pagina: 131, id: "", locais: [] },
    { numero: 74, referencia: "", tags: "explicação simples e profunda / a paz que Jesus oferece não depende do que está acontecendo ao redor", pagina: 131, id: "", locais: [] },
    { numero: 75, referencia: "Sl 23.1,4", tags: "Davi enfrentou perigos, mas descansava porque sabia que Deus era seu pastor", pagina: 131, id: "sl23.1-4", locais: [] },
    { numero: 76, referencia: "Hb 13.5", tags: "não te deixarei, nem te desampararei", pagina: 131, id: "hb13.5", locais: [] },
    { numero: 77, referencia: "Is 26.3", tags: "tu conservarás em paz aquele cujo propósito está firme em ti", pagina: 132, id: "is26.3", locais: [] },
    { numero: 78, referencia: "Rm 4.20-21", tags: "Abraão confiou na promessa, mesmo sem ver o cumprimento imediato", pagina: 132, id: "rm4.20-21", locais: [] },
    { numero: 79, referencia: "Fp 4.6-7", tags: "a oração é o caminho para trocar ansiedade por paz", pagina: 132, id: "fp4.6-7", locais: [] },
    { numero: 80, referencia: "1 Pe 5.7", tags: "lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós", pagina: 132, id: "1pe5.7", locais: [] },
    { numero: 81, referencia: "1 Sm 1.18", tags: "Ana orou em meio à dor e saiu em paz, confiando que Deus cuidaria da situação", pagina: 132, id: "1sm1.18", locais: [] },
    { numero: 82, referencia: "Êx 14.14", tags: "o Senhor pelejará por vós, e vós vos calareis", pagina: 132, id: "ex14.14", locais: [] },
    { numero: 83, referencia: "2 Cr 20.17", tags: "não sereis vós que pelejareis nesta batalha; o Senhor estará convosco", pagina: 132, id: "2cr20.17", locais: [] },
    { numero: 84, referencia: "Sl 46.10", tags: "aquietai-vos, e sabei que eu sou Deus", pagina: 132, id: "sl46.10", locais: [] },
    { numero: 85, referencia: "", tags: "perguntas rápidas / a paz depende da presença de Deus, não das circunstâncias / a oração troca ansiedade por paz", pagina: 132, id: "", locais: [] },
    { numero: 86, referencia: "", tags: "exemplo didático / uma criança atravessando uma multidão de mãos dadas com o pai", pagina: 133, id: "", locais: [] },
    { numero: 87, referencia: "", tags: "exemplo atual / jovem enfrentando pressão que sente paz profunda ao buscar a Deus em oração", pagina: 133, id: "", locais: [] },
    { numero: 88, referencia: "", tags: "toque de sabedoria / a paz de Deus não elimina a guerra, ela nos sustenta no meio dela", pagina: 133, id: "", locais: [] },
    { numero: 89, referencia: "Mt 14.27", tags: "você sabia / tende bom ânimo! sou eu. não temais!", pagina: 133, id: "mt14.27", locais: [] },
    { numero: 90, referencia: "", tags: "história ilustrativa / a janela iluminada / Ludmilla", pagina: 134, id: "", locais: [] },
    { numero: 91, referencia: "Fp 4.7", tags: "e a paz de Deus, que excede todo entendimento, guardará o vosso coração e a vossa mente em Cristo Jesus", pagina: 134, id: "fp4.7", locais: [] },
    { numero: 92, referencia: "", tags: "palavra pastoral / Deus não prometeu ausência de lutas, mas prometeu estar conosco todos os dias", pagina: 135, id: "", locais: [] },
    { numero: 93, referencia: "", tags: "aplicação prática / marque suas respostas", pagina: 135, id: "", locais: [] },
    { numero: 94, referencia: "", tags: "tarefa simples para o coração / escrever uma preocupação e orar entregando isso a Deus", pagina: 135, id: "", locais: [] },
    { numero: 95, referencia: "", tags: "espaço para resposta", pagina: 135, id: "", locais: [] }
  ],

  // ============================================
  // LISTA ALFABÉTICA (gerada automaticamente a partir da listaAparicao)
  // ============================================
  listaAlfabetica: [
    { referencia: "1 Co 6.19", tags: "versículo-chave / o corpo de vocês é santuário do Espírito Santo que habita em vocês", pagina: 120, id: "1co6.19a", locais: [] },
    { referencia: "1 Co 6.19", tags: "na conversão, Deus faz morada no coração do cristão por meio do Espírito Santo", pagina: 120, id: "1co6.19b", locais: [] },
    { referencia: "1 Jo 4.4", tags: "onde o Espírito habita, não há espaço para domínio do inimigo", pagina: 120, id: "1jo4.4a", locais: [] },
    { referencia: "1 Jo 4.4", tags: "você sabia / maior é aquele que está em vós do que aquele que está no mundo", pagina: 123, id: "1jo4.4b", locais: [] },
    { referencia: "1 Pe 1.6-7", tags: "a provação pode vir através de perdas, desafios ou momentos difíceis", pagina: 125, id: "1pe1.6-7", locais: [] },
    { referencia: "1 Pe 1.7", tags: "a provação revela se nossa fé é verdadeira ou superficial", pagina: 126, id: "1pe1.7", locais: [] },
    { referencia: "1 Pe 5.7", tags: "lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós", pagina: 132, id: "1pe5.7", locais: [] },
    { referencia: "1 Pe 5.8", tags: "o crente não deve viver apavorado com o inimigo nem agir com negligência espiritual", pagina: 121, id: "1pe5.8b", locais: [] },
    { referencia: "1 Pe 5.8-9", tags: "a pessoa continua responsável por suas escolhas / resisti-lhe firmes na fé", pagina: 121, id: "1pe5.8-9", locais: [] },
    { referencia: "1 Sm 1.18", tags: "Ana orou em meio à dor e saiu em paz, confiando que Deus cuidaria da situação", pagina: 132, id: "1sm1.18", locais: [] },
    { referencia: "2 Cr 20.17", tags: "não sereis vós que pelejareis nesta batalha; o Senhor estará convosco", pagina: 132, id: "2cr20.17", locais: [] },
    { referencia: "2 Rs 6.16-17", tags: "o cuidado de Deus é ilimitado e não depende de uma estrutura fixa", pagina: 116, id: "2rs6.16-17b", locais: [] },
    { referencia: "2 Tm 1.7", tags: "Deus não nos deu o espírito de temor, mas de fortaleza, amor e moderação", pagina: 121, id: "2tm1.7", locais: [] },
    { referencia: "At 12.15", tags: "\"é o seu anjo\" — o texto registra a fala dos irmãos, sem transformá-la em doutrina", pagina: 116, id: "at12.15", locais: [] },
    { referencia: "Cl 1.13", tags: "os crentes são descritos como templo do Espírito Santo e propriedade de Deus", pagina: 121, id: "cl1.13", locais: [] },
    { referencia: "Dn 1.8", tags: "Daniel propôs no coração não se contaminar", pagina: 126, id: "dn1.8", locais: [] },
    { referencia: "Dn 6.10,22", tags: "Daniel foi provado em terra estranha e permaneceu fiel, honrado pelo Senhor", pagina: 126, id: "dn6.10-22", locais: [] },
    { referencia: "Dn 6.16-23", tags: "Daniel não pôde evitar a provação da cova dos leões, mas permaneceu fiel", pagina: 126, id: "dn6.16-23", locais: [] },
    { referencia: "Dn 7.10", tags: "milhares de milhares o serviam", pagina: 116, id: "dn7.10", locais: [] },
    { referencia: "Ef 6.11", tags: "a possessão implica domínio espiritual que a Bíblia não atribui ao verdadeiro cristão", pagina: 121, id: "ef6.11c", locais: [] },
    { referencia: "Êx 14.14", tags: "o Senhor pelejará por vós, e vós vos calareis", pagina: 132, id: "ex14.14", locais: [] },
    { referencia: "Fp 4.6-7", tags: "a oração é o caminho para trocar ansiedade por paz", pagina: 132, id: "fp4.6-7", locais: [] },
    { referencia: "Fp 4.7", tags: "e a paz de Deus, que excede todo entendimento, guardará o vosso coração e a vossa mente em Cristo Jesus", pagina: 134, id: "fp4.7", locais: [] },
    { referencia: "Gn 22.1-12", tags: "Abraão revelou sua fé na provação ao entregar Isaque em obediência a Deus", pagina: 126, id: "gn22.1-12", locais: [] },
    { referencia: "Gn 3.6", tags: "Eva foi tentada pelo desejo, pela aparência e pela falsa promessa ligada ao fruto", pagina: 126, id: "gn3.6", locais: [] },
    { referencia: "Gn 39.12", tags: "José fugiu da tentação quando a mulher de Potifar tentou seduzi-lo", pagina: 126, id: "gn39.12", locais: [] },
    { referencia: "Hb 1.14", tags: "não são todos eles espíritos ministradores, enviados para servir?", pagina: 116, id: "hb1.14a", locais: [] },
    { referencia: "Hb 1.14", tags: "o foco da proteção sempre está em Deus, e não em um anjo específico", pagina: 118, id: "hb1.14b", locais: [] },
    { referencia: "Hb 13.5", tags: "não te deixarei, nem te desampararei", pagina: 131, id: "hb13.5", locais: [] },
    { referencia: "Is 26.3", tags: "tu conservarás em paz aquele cujo propósito está firme em ti", pagina: 132, id: "is26.3", locais: [] },
    { referencia: "Jo 14.27", tags: "versículo-chave / deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá", pagina: 131, id: "jo14.27", locais: [] },
    { referencia: "Js 7.20-21", tags: "Acã viu, desejou e tomou para si aquilo que Deus havia proibido", pagina: 126, id: "js7.20-21", locais: [] },
    { referencia: "Mt 14.27", tags: "você sabia / tende bom ânimo! sou eu. não temais!", pagina: 133, id: "mt14.27", locais: [] },
    { referencia: "Mt 18.10", tags: "os seus anjos veem continuamente a face do Pai", pagina: 116, id: "mt18.10", locais: [] },
    { referencia: "Mt 26.41", tags: "muitas tentações podem ser evitadas com vigilância e decisões sábias", pagina: 126, id: "mt26.41b", locais: [] },
    { referencia: "Mt 4.1", tags: "a tentação também pode ser estimulada pelo inimigo", pagina: 125, id: "mt4.1", locais: [] },
    { referencia: "Rm 4.20-21", tags: "Abraão confiou na promessa, mesmo sem ver o cumprimento imediato", pagina: 132, id: "rm4.20-21", locais: [] },
    { referencia: "Rm 8.9", tags: "se alguém não tem o Espírito de Cristo, esse tal não é dele", pagina: 120, id: "rm8.9", locais: [] },
    { referencia: "Sl 23.1,4", tags: "Davi enfrentou perigos, mas descansava porque sabia que Deus era seu pastor", pagina: 131, id: "sl23.1-4", locais: [] },
    { referencia: "Sl 34.7", tags: "você sabia / o anjo do Senhor acampa-se ao redor dos que o temem", pagina: 118, id: "sl34.7", locais: [] },
    { referencia: "Sl 46.10", tags: "aquietai-vos, e sabei que eu sou Deus", pagina: 132, id: "sl46.10", locais: [] },
    { referencia: "Sl 91", tags: "o cuidado de Deus conforme a situação, não um padrão fixo de um anjo por pessoa", pagina: 116, id: "sl91b", locais: [] },
    { referencia: "Sl 91.11", tags: "versículo-chave / porque aos seus anjos dará ordens a teu respeito, para que te guardem em todos os teus caminhos", pagina: 115, id: "sl91.11a", locais: [] },
    { referencia: "Sl 91.11", tags: "é Deus quem dá ordens aos anjos; eles não escolhem sozinhos quem proteger", pagina: 115, id: "sl91.11b", locais: [] },
    { referencia: "Tg 1.13", tags: "versículo-chave / ninguém, ao ser tentado, diga: estou sendo tentado por Deus", pagina: 125, id: "tg1.13a", locais: [] },
    { referencia: "Tg 1.14", tags: "na opressão, forças espirituais externas podem influenciar fortemente a mente e as emoções", pagina: 121, id: "tg1.14a", locais: [] },
    { referencia: "Tg 1.14", tags: "tentação: quando somos atraídos para o pecado, nasce dentro de nós", pagina: 125, id: "tg1.14b", locais: [] },
    { referencia: "Tg 1.2-3", tags: "provação: dificuldades permitidas por Deus para fortalecer a nossa fé", pagina: 125, id: "tg1.2-3a", locais: [] },
    { referencia: "Tg 1.2,13", tags: "você sabia / a palavra grega peirasmos pode significar tentação ou provação, dependendo do contexto", pagina: 128, id: "tg1.2-13", locais: [] },
    { referencia: "Tg 4.7", tags: "vigilância, sobriedade e confiança no poder de Deus", pagina: 121, id: "tg4.7c", locais: [] }
  ]
};
