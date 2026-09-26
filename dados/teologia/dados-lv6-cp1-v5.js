// ============================================
// DADOS DO CURSO TEOLOGIA DESCOMPLICADA PARA JOVENS
// LIVRO 6 - CAPÍTULO I - E AÍ... QUEM SÃO OS ANJOS,
//           AFINAL?
// MODELO V4 - hierarquia, listaAparicao, listaAlfabetica
//             (extraídos dos prints, páginas 2-25)
// Contexto histórico -> motor-contextos.js (automático,
//             igual dominical v4 — não precisa cadastrar nada aqui)
//
// Notação de referência padronizada com PONTO (ex: "Sl 91.11"),
// igual ao id ("sl91.11c"), igual ao padrão usado em dominical v4
// e no dados-lv6-cp6-v4.js.
// Campo locais: [] presente em cada item (geografia não é central
// neste capítulo teológico/doutrinário).
// ============================================

window.dadosLicaoV4 = {
  titulo: "📚 Capítulo I – E aí... quem são os anjos, afinal?",
  subtitulo: "Teologia Descomplicada para Jovens - Livro 6, Capítulo 1",
  paginas: "2-25",

  mapaConfig: {
    centro: [31.7683, 35.2137],
    zoom: 6
  },

  // ============================================
  // HIERARQUIA DE TÓPICOS
  // ============================================
  hierarquia: [
    {
      label: "1. O que a Bíblia ensina sobre a origem dos anjos?",
      refs: [{ id: "cl1.16a", referencia: "Cl 1.16", tags: "versículo-chave / pois nele foram criadas todas as coisas nos céus e na terra — tudo foi criado por ele e para ele" }],
      filhos: [
        {
          label: "a) Os anjos foram criados por Deus",
          refs: [{ id: "cl1.16b", referencia: "Cl 1.16", tags: "Deus é soberano sobre tudo, inclusive sobre o mundo espiritual" }, { id: "sl148.2-5a", referencia: "Sl 148.2,5", tags: "Deus é soberano sobre tudo, inclusive sobre o mundo espiritual" }],
          filhos: []
        },
        {
          label: "b) Os anjos foram criados antes da humanidade",
          refs: [{ id: "job38.4-7", referencia: "Jó 38.4,7", tags: "os anjos já existiam antes da criação do homem" }, { id: "gn1.26", referencia: "Gn 1.26", tags: "os anjos já existiam antes da criação do homem" }, { id: "hb1.14a", referencia: "Hb 1.14", tags: "os anjos já existiam antes da criação do homem" }],
          filhos: []
        },
        {
          label: "c) Os anjos foram criados em grande número",
          refs: [{ id: "dn7.10a", referencia: "Dn 7.10", tags: "milhares de milhares e milhões de milhões de anjos diante do trono de Deus" }, { id: "ap5.11a", referencia: "Ap 5.11", tags: "milhares de milhares e milhões de milhões de anjos diante do trono de Deus" }],
          filhos: []
        },
        {
          label: "d) Os anjos foram criados bons e perfeitos",
          refs: [{ id: "gn1.31", referencia: "Gn 1.31", tags: "tudo o que Deus cria é bom, e os anjos não foram exceção" }, { id: "ez28.15", referencia: "Ez 28.15", tags: "tudo o que Deus cria é bom, e os anjos não foram exceção" }, { id: "sl104.4a", referencia: "Sl 104.4", tags: "tudo o que Deus cria é bom, e os anjos não foram exceção" }],
          filhos: []
        },
        {
          label: "Perguntas Rápidas dentro da explicação — quem criou os anjos? Deus; eles existiam desde sempre? não, tiveram um início; vieram antes ou depois do homem? antes",
          refs: [],
          filhos: []
        },
        {
          label: "Exemplo Didático — os anjos são como uma obra de arte: não existem por si mesmos, foram criados por Deus",
          refs: [],
          filhos: []
        },
        {
          label: "Exemplo Atual — um jovem que desenvolve um aplicativo; tudo funciona porque foi planejado e criado por alguém",
          refs: [],
          filhos: []
        },
        {
          label: "Toque de Sabedoria — a existência dos anjos revela que Deus governa tanto o visível quanto o invisível",
          refs: [],
          filhos: []
        },
        {
          label: "Você Sabia? — tudo o que existe no mundo espiritual, incluindo anjos, foi criado por Cristo e para Cristo",
          refs: [{ id: "cl1.16c", referencia: "Cl 1.16", tags: "tudo o que existe no mundo espiritual foi criado por Cristo e para Cristo" }],
          filhos: []
        },
        {
          label: "História Ilustrativa — A Origem dos Anjos (João Marcos e o professor da EBD)",
          refs: [{ id: "job38.7", referencia: "Jó 38.7", tags: "os anjos já estavam lá quando Deus formou o mundo e cantavam de alegria" }],
          filhos: []
        },
        {
          label: "Palavra Pastoral — nunca coloque sua confiança em anjos ou qualquer outra criatura; direcione sua fé somente a Deus",
          refs: [],
          filhos: []
        },
        {
          label: "Tarefa Simples para o Coração — refletir sobre o poder de Deus como Criador",
          refs: [],
          filhos: []
        }
      ]
    },
    {
      label: "2. Como são os anjos segundo a Bíblia?",
      refs: [{ id: "sl104.4b", referencia: "Sl 104.4", tags: "versículo-chave / faz dos seus anjos espíritos, e dos seus ministros, labaredas de fogo" }],
      filhos: [
        {
          label: "a) Os anjos são seres espirituais",
          refs: [{ id: "sl104.4c", referencia: "Sl 104.4", tags: "os anjos são espíritos por natureza" }, { id: "hb1.14b", referencia: "Hb 1.14", tags: "os anjos são espíritos por natureza" }],
          filhos: []
        },
        {
          label: "b) Os anjos podem assumir forma visível quando Deus permite",
          refs: [{ id: "gn18.1-2a", referencia: "Gn 18.1-2", tags: "anjos aparecem de forma visível aos seres humanos" }, { id: "hb13.2a", referencia: "Hb 13.2", tags: "anjos aparecem de forma visível aos seres humanos" }, { id: "jz13.6", referencia: "Jz 13.6", tags: "anjos aparecem de forma visível aos seres humanos" }, { id: "lc24.4", referencia: "Lc 24.4", tags: "a forma visível não é permanente, e sim uma missão específica" }],
          filhos: []
        },
        {
          label: "c) Os anjos não se reproduzem",
          refs: [{ id: "mt22.30a", referencia: "Mt 22.30", tags: "os anjos não se casam nem geram outros anjos" }, { id: "lc20.34-36", referencia: "Lc 20.34-36", tags: "os anjos não se casam nem geram outros anjos" }, { id: "hb1.5", referencia: "Hb 1.5", tags: "os anjos não se casam nem geram outros anjos" }],
          filhos: []
        },
        {
          label: "d) Os anjos não envelhecem nem morrem",
          refs: [{ id: "lc20.36", referencia: "Lc 20.36", tags: "os anjos não estão sujeitos ao tempo como os humanos" }, { id: "mt22.30b", referencia: "Mt 22.30", tags: "os anjos não estão sujeitos ao tempo como os humanos" }, { id: "hb1.14c", referencia: "Hb 1.14", tags: "os anjos não estão sujeitos ao tempo como os humanos" }],
          filhos: []
        },
        {
          label: "Perguntas Rápidas dentro da explicação — têm corpo físico permanente? não; podem aparecer visivelmente? sim, quando Deus permite; podem se casar ou gerar descendência? não",
          refs: [],
          filhos: []
        },
        {
          label: "Exemplo Didático — os anjos são como o sinal de Wi-Fi: invisíveis por natureza, mas reais em sua atuação",
          refs: [],
          filhos: []
        },
        {
          label: "Exemplo Atual — uma escola onde funcionários cuidam da limpeza e segurança sem aparecer, mas tudo funciona por causa do trabalho deles",
          refs: [],
          filhos: []
        },
        {
          label: "Toque de Sabedoria — a ausência de visão não significa ausência de atuação no Reino de Deus",
          refs: [],
          filhos: []
        },
        {
          label: "Você Sabia? — em algumas ocasiões, anjos foram confundidos com pessoas comuns",
          refs: [{ id: "gn19.1-5", referencia: "Gn 19.1-5", tags: "anjos foram confundidos com pessoas comuns" }],
          filhos: []
        },
        {
          label: "História Ilustrativa — Invisível, mas Reais (Tânia e a avó observam o vento)",
          refs: [],
          filhos: []
        },
        {
          label: "Palavra Pastoral — não se preocupe em imaginar como os anjos se parecem; o importante é saber que são enviados por Deus",
          refs: [],
          filhos: []
        },
        {
          label: "Tarefa Simples para o Coração — ler Salmos 103:20 e pensar sobre a obediência dos anjos",
          refs: [{ id: "sl103.20a", referencia: "Sl 103.20", tags: "leia Salmos 103:20 e pense sobre a obediência dos anjos à voz de Deus" }],
          filhos: []
        }
      ]
    },
    {
      label: "3. Como é a ação dos anjos no mundo espiritual",
      refs: [{ id: "sl103.20b", referencia: "Sl 103.20", tags: "versículo-chave / bendizei ao Senhor, todos os seus anjos, poderosos em força, que cumprem as suas ordens" }],
      filhos: [
        {
          label: "a) Os anjos adoram constantemente no céu",
          refs: [{ id: "ap5.11-12", referencia: "Ap 5.11-12", tags: "miríades de anjos louvando o Cordeiro com vozes poderosas" }, { id: "is6.3a", referencia: "Is 6.3", tags: "os serafins proclamam continuamente: Santo, Santo, Santo é o Senhor dos Exércitos" }],
          filhos: []
        },
        {
          label: "b) Os anjos agem com obediência imediata",
          refs: [{ id: "sl103.20c", referencia: "Sl 103.20", tags: "os anjos cumprem as ordens de Deus sem demora" }, { id: "hb1.14d", referencia: "Hb 1.14", tags: "os anjos cumprem as ordens de Deus sem demora" }, { id: "mt6.10", referencia: "Mt 6.10", tags: "os anjos cumprem as ordens de Deus sem demora" }],
          filhos: []
        },
        {
          label: "c) Os anjos agem conforme a vontade de Deus, não a própria",
          refs: [{ id: "sl103.20d", referencia: "Sl 103.20", tags: "os anjos cumprem exatamente aquilo que Deus determina" }, { id: "hb1.14e", referencia: "Hb 1.14", tags: "os anjos cumprem exatamente aquilo que Deus determina" }, { id: "dn9.21-23a", referencia: "Dn 9.21-23", tags: "os anjos cumprem exatamente aquilo que Deus determina" }],
          filhos: []
        },
        {
          label: "d) Os anjos agem em batalhas espirituais invisíveis",
          refs: [{ id: "dn10.13a", referencia: "Dn 10.13", tags: "os anjos participam de conflitos espirituais" }, { id: "ap12.7a", referencia: "Ap 12.7", tags: "os anjos participam de conflitos espirituais" }, { id: "2rs6.17", referencia: "2 Rs 6.17", tags: "os anjos participam de conflitos espirituais" }],
          filhos: []
        },
        {
          label: "e) Os anjos são enviados para cumprir missões na terra",
          refs: [{ id: "hb1.14f", referencia: "Hb 1.14", tags: "os anjos são enviados por Deus para agir entre os homens" }, { id: "sl91.11c", referencia: "Sl 91.11", tags: "os anjos são enviados por Deus para agir entre os homens" }, { id: "at12.7", referencia: "At 12.7", tags: "os anjos são enviados por Deus para agir entre os homens" }],
          filhos: []
        },
        {
          label: "Perguntas Rápidas dentro da explicação — têm consciência e personalidade? sim; qual a marca do caráter deles? pureza; como respondem às ordens? com obediência total e imediata",
          refs: [],
          filhos: []
        },
        {
          label: "Exemplo Didático — os anjos são como a lua, que não tem luz própria, mas reflete a luz do sol",
          refs: [],
          filhos: []
        },
        {
          label: "Exemplo Atual — um jovem que segue exatamente as instruções de um professor durante uma prova",
          refs: [],
          filhos: []
        },
        {
          label: "Toque de Sabedoria — os anjos são fortes em poder, mas maiores ainda em obediência e humildade",
          refs: [],
          filhos: []
        },
        {
          label: "Você Sabia? — os anjos são chamados de ministros de Deus, porque servem continuamente à Sua vontade",
          refs: [{ id: "hb1.14g", referencia: "Hb 1.14", tags: "os anjos são chamados de ministros de Deus" }],
          filhos: []
        },
        {
          label: "História Ilustrativa — O Carteiro Fiel (Orlando observa a fidelidade de um carteiro)",
          refs: [],
          filhos: []
        },
        {
          label: "Palavra Pastoral — a verdadeira grandeza está na obediência; seja fiel nas pequenas atitudes do dia a dia",
          refs: [],
          filhos: []
        },
        {
          label: "Tarefa Simples para o Coração — ler Salmo 148:2 e anotar uma bênção recebida",
          refs: [{ id: "sl148.2b", referencia: "Sl 148.2", tags: "leia Salmo 148:2, louve a Deus pela sua criação" }],
          filhos: []
        }
      ]
    },
    {
      label: "4. Existe hierarquia entre os anjos?",
      refs: [{ id: "cl1.16d", referencia: "Cl 1.16", tags: "versículo-chave / porque nele foram criadas todas as coisas nos céus e na terra, sejam tronos, dominações, principados ou potestades" }],
      filhos: [
        {
          label: "a) Funções diferentes no mundo celestial",
          refs: [{ id: "cl1.16e", referencia: "Cl 1.16", tags: "há organização e hierarquia no mundo espiritual" }, { id: "ef1.21", referencia: "Ef 1.21", tags: "há organização e hierarquia no mundo espiritual" }],
          filhos: []
        },
        {
          label: "b) Anjos — Mensageiros",
          refs: [{ id: "gn32.3", referencia: "Gn 32.3", tags: "a palavra anjo significa mensageiro" }, { id: "lc1.19-26a", referencia: "Lc 1.19,26", tags: "a palavra anjo significa mensageiro" }, { id: "gn18.1-2b", referencia: "Gn 18.1-2", tags: "os anjos não são descritos como seres alados; aparecem em forma humana comum" }, { id: "hb13.2b", referencia: "Hb 13.2", tags: "os anjos não são descritos como seres alados; aparecem em forma humana comum" }, { id: "dn8.16", referencia: "Dn 8.16", tags: "exemplo: Gabriel é um anjo que aparece trazendo respostas e anúncios importantes" }, { id: "dn9.21-23b", referencia: "Dn 9.21-23", tags: "Gabriel explicou visões ao profeta Daniel" }, { id: "lc1.11-13-26-31", referencia: "Lc 1.11-13,26-31", tags: "Gabriel anunciou o nascimento de João Batista e de Jesus" }],
          filhos: []
        },
        {
          label: "c) Querubins — guardiões do espaço sagrado",
          refs: [{ id: "gn3.24", referencia: "Gn 3.24", tags: "os querubins guardam o caminho do Éden" }, { id: "ex25.18-22", referencia: "Êx 25.18-22", tags: "os querubins estão associados à Arca da Aliança" }, { id: "sl99.1", referencia: "Sl 99.1", tags: "os querubins estão associados ao trono de Deus" }, { id: "ez1a", referencia: "Ez 1", tags: "os querubins aparecem nas visões do profeta Ezequiel" }, { id: "ez10a", referencia: "Ez 10", tags: "os querubins aparecem nas visões do profeta Ezequiel" }, { id: "ez1.6", referencia: "Ez 1.6", tags: "os querubins são descritos como seres alados, com aparência impressionante" }, { id: "ez10.5", referencia: "Ez 10.5", tags: "os querubins são descritos como seres alados, com aparência impressionante" }],
          filhos: []
        },
        {
          label: "d) Serafins — seres de adoração intensa",
          refs: [{ id: "is6.2", referencia: "Is 6.2", tags: "os serafins são descritos como seres alados, com seis asas, diante do trono de Deus" }, { id: "is6.6-7", referencia: "Is 6.6-7", tags: "os serafins tocaram os lábios de Isaías com uma brasa viva, simbolizando purificação" }],
          filhos: []
        },
        {
          label: "e) Arcanjo Miguel — líder no exército de Deus",
          refs: [{ id: "jd1.9a", referencia: "Jd 1.9", tags: "Miguel é chamado de arcanjo" }, { id: "dn10.13b", referencia: "Dn 10.13", tags: "Miguel é apresentado como um dos primeiros príncipes, defensor do povo de Deus" }, { id: "dn12.1", referencia: "Dn 12.1", tags: "Miguel é apresentado como um dos primeiros príncipes, defensor do povo de Deus" }, { id: "ap12.7b", referencia: "Ap 12.7", tags: "Miguel lidera os anjos na luta contra o mal" }, { id: "jd1.9b", referencia: "Jd 1.9", tags: "somente Miguel é chamado explicitamente de arcanjo na Bíblia" }, { id: "1ts4.16", referencia: "1 Ts 4.16", tags: "somente Miguel é chamado explicitamente de arcanjo na Bíblia" }],
          filhos: []
        },
        {
          label: "Perguntas Rápidas dentro da explicação — todos têm a mesma função? não; o que fazem querubins e serafins? guardam/protegem e adoram; o que significa arcanjo? anjo principal (só existe um)",
          refs: [],
          filhos: []
        },
        {
          label: "Exemplo Didático — é como um exército: generais, capitães e soldados, cada um com função específica",
          refs: [],
          filhos: []
        },
        {
          label: "Exemplo Atual — um acampamento da igreja onde cada um cuida de uma função diferente, mas todos servem ao mesmo objetivo",
          refs: [],
          filhos: []
        },
        {
          label: "Toque de Sabedoria — quando o coração está alinhado com Deus, qualquer função se torna gloriosa",
          refs: [],
          filhos: []
        },
        {
          label: "Você Sabia? — a Bíblia menciona apenas dois anjos pelo nome: Miguel e Gabriel",
          refs: [],
          filhos: []
        },
        {
          label: "História Ilustrativa — O Ensaio da Orquestra (Marilsa e a harmonia de funções diferentes)",
          refs: [],
          filhos: []
        },
        {
          label: "Palavra Pastoral — ordem e disciplina fazem parte do plano de Deus; seja fiel ao que Deus confiou a você",
          refs: [],
          filhos: []
        },
        {
          label: "Tarefa Simples para o Coração — observar as áreas da vida e perguntar qual função Deus tem confiado ali",
          refs: [],
          filhos: []
        }
      ]
    }
  ],

  // ============================================
  // LISTA DE APARIÇÃO
  // ============================================
  listaAparicao: [
    { numero: 1, referencia: "", tags: "capítulo I / capa / E aí... quem são os anjos, afinal?", pagina: 2, id: "", locais: [] },
    { numero: 2, referencia: "Cl 1.16", tags: "versículo-chave / pois nele foram criadas todas as coisas nos céus e na terra, visíveis e invisíveis, tronos, soberanias, poderes e autoridades — tudo foi criado por ele e para ele", pagina: 3, id: "cl1.16a", locais: [] },
    { numero: 3, referencia: "", tags: "ideia central / os anjos foram criados por Deus, antes da humanidade, para louvá-lo e cumprir seus propósitos; não são eternos nem autônomos", pagina: 3, id: "", locais: [] },
    { numero: 4, referencia: "", tags: "explicação simples e profunda / os anjos são criaturas de Deus, com origem definida e propósito específico", pagina: 3, id: "", locais: [] },
    { numero: 5, referencia: "", tags: "a) os anjos foram criados por Deus / não são eternos nem existem por si mesmos, dependem totalmente dEle", pagina: 3, id: "", locais: [] },
    { numero: 6, referencia: "Cl 1.16", tags: "Deus é soberano sobre tudo, inclusive sobre o mundo espiritual", pagina: 3, id: "cl1.16b", locais: [] },
    { numero: 7, referencia: "Sl 148.2,5", tags: "Deus é soberano sobre tudo, inclusive sobre o mundo espiritual", pagina: 3, id: "sl148.2-5a", locais: [] },
    { numero: 8, referencia: "", tags: "b) os anjos foram criados antes da humanidade / testemunharam a obra da criação e celebraram o agir de Deus", pagina: 4, id: "", locais: [] },
    { numero: 9, referencia: "Jó 38.4,7", tags: "os anjos já existiam antes da criação do homem", pagina: 4, id: "job38.4-7", locais: [] },
    { numero: 10, referencia: "Gn 1.26", tags: "os anjos já existiam antes da criação do homem", pagina: 4, id: "gn1.26", locais: [] },
    { numero: 11, referencia: "Hb 1.14", tags: "os anjos já existiam antes da criação do homem", pagina: 4, id: "hb1.14a", locais: [] },
    { numero: 12, referencia: "", tags: "c) os anjos foram criados em grande número / milhares de milhares e milhões de milhões diante do trono de Deus", pagina: 4, id: "", locais: [] },
    { numero: 13, referencia: "Dn 7.10", tags: "milhares de milhares e milhões de milhões de anjos diante do trono de Deus", pagina: 4, id: "dn7.10a", locais: [] },
    { numero: 14, referencia: "Ap 5.11", tags: "milhares de milhares e milhões de milhões de anjos diante do trono de Deus", pagina: 4, id: "ap5.11a", locais: [] },
    { numero: 15, referencia: "", tags: "d) os anjos foram criados bons e perfeitos / não havia maldade em sua origem; a queda foi abandono voluntário da obediência", pagina: 4, id: "", locais: [] },
    { numero: 16, referencia: "Gn 1.31", tags: "tudo o que Deus cria é bom, e os anjos não foram exceção", pagina: 4, id: "gn1.31", locais: [] },
    { numero: 17, referencia: "Ez 28.15", tags: "tudo o que Deus cria é bom, e os anjos não foram exceção", pagina: 4, id: "ez28.15", locais: [] },
    { numero: 18, referencia: "Sl 104.4", tags: "tudo o que Deus cria é bom, e os anjos não foram exceção", pagina: 4, id: "sl104.4a", locais: [] },
    { numero: 19, referencia: "", tags: "perguntas rápidas / quem criou os anjos? Deus / eles existiam desde sempre? não, tiveram um início", pagina: 4, id: "", locais: [] },
    { numero: 20, referencia: "", tags: "perguntas rápidas / vieram antes ou depois do homem? antes, pois já louvavam quando a terra foi criada / quantos anjos Deus criou? um número incontável", pagina: 5, id: "", locais: [] },
    { numero: 21, referencia: "", tags: "exemplo didático / os anjos são como uma obra de arte: não existem por si mesmos, foram criados por Deus e dependem totalmente dEle", pagina: 5, id: "", locais: [] },
    { numero: 22, referencia: "", tags: "exemplo atual / um jovem que desenvolve um aplicativo — tudo funciona porque foi planejado e criado por alguém", pagina: 5, id: "", locais: [] },
    { numero: 23, referencia: "", tags: "toque de sabedoria / a existência dos anjos revela que Deus governa tanto o visível quanto o invisível", pagina: 5, id: "", locais: [] },
    { numero: 24, referencia: "Cl 1.16", tags: "você sabia / tudo o que existe no mundo espiritual, incluindo anjos, foi criado por Cristo e para Cristo", pagina: 5, id: "cl1.16c", locais: [] },
    { numero: 25, referencia: "", tags: "história ilustrativa / a origem dos anjos / João Marcos pergunta ao professor da EBD de onde vieram os anjos, se eles sempre existiram", pagina: 5, id: "", locais: [] },
    { numero: 26, referencia: "Jó 38.7", tags: "somente Deus é eterno; os anjos já estavam lá quando Deus formou o mundo e cantavam de alegria", pagina: 6, id: "job38.7", locais: [] },
    { numero: 27, referencia: "", tags: "palavra pastoral / nunca coloque sua confiança em anjos ou qualquer outra criatura; direcione sua fé somente a Deus", pagina: 6, id: "", locais: [] },
    { numero: 28, referencia: "", tags: "aplicação prática / marque suas respostas", pagina: 7, id: "", locais: [] },
    { numero: 29, referencia: "", tags: "tarefa simples para o coração / refletir sobre o poder de Deus como Criador", pagina: 7, id: "", locais: [] },
    { numero: 30, referencia: "", tags: "espaço para resposta", pagina: 7, id: "", locais: [] },
    { numero: 31, referencia: "Sl 104.4", tags: "versículo-chave / faz dos seus anjos espíritos, e dos seus ministros, labaredas de fogo", pagina: 8, id: "sl104.4b", locais: [] },
    { numero: 32, referencia: "", tags: "ideia central / os anjos são seres espirituais, mas podem assumir forma visível quando Deus permite; interagem com o mundo físico em missões específicas", pagina: 8, id: "", locais: [] },
    { numero: 33, referencia: "", tags: "explicação simples e profunda / a Bíblia não descreve todos os detalhes da aparência dos anjos, mas dá pistas sobre sua natureza", pagina: 8, id: "", locais: [] },
    { numero: 34, referencia: "", tags: "a) os anjos são seres espirituais / sua essência não é material, mas espiritual, invisível aos olhos humanos", pagina: 8, id: "", locais: [] },
    { numero: 35, referencia: "Sl 104.4", tags: "os anjos são espíritos por natureza", pagina: 8, id: "sl104.4c", locais: [] },
    { numero: 36, referencia: "Hb 1.14", tags: "os anjos são espíritos por natureza", pagina: 8, id: "hb1.14b", locais: [] },
    { numero: 37, referencia: "", tags: "b) os anjos podem assumir forma visível quando Deus permite / geralmente com aparência humana comum, para missões específicas", pagina: 9, id: "", locais: [] },
    { numero: 38, referencia: "Gn 18.1-2", tags: "anjos aparecem de forma visível aos seres humanos", pagina: 9, id: "gn18.1-2a", locais: [] },
    { numero: 39, referencia: "Hb 13.2", tags: "anjos aparecem de forma visível aos seres humanos", pagina: 9, id: "hb13.2a", locais: [] },
    { numero: 40, referencia: "Jz 13.6", tags: "anjos aparecem de forma visível aos seres humanos", pagina: 9, id: "jz13.6", locais: [] },
    { numero: 41, referencia: "Lc 24.4", tags: "a forma visível não é permanente, e sim uma missão específica", pagina: 9, id: "lc24.4", locais: [] },
    { numero: 42, referencia: "", tags: "c) os anjos não se reproduzem / cada um foi criado diretamente por Deus, seu número foi definido na criação", pagina: 9, id: "", locais: [] },
    { numero: 43, referencia: "Mt 22.30", tags: "os anjos não se casam nem geram outros anjos", pagina: 9, id: "mt22.30a", locais: [] },
    { numero: 44, referencia: "Lc 20.34-36", tags: "os anjos não se casam nem geram outros anjos", pagina: 9, id: "lc20.34-36", locais: [] },
    { numero: 45, referencia: "Hb 1.5", tags: "os anjos não se casam nem geram outros anjos", pagina: 9, id: "hb1.5", locais: [] },
    { numero: 46, referencia: "", tags: "d) os anjos não envelhecem nem morrem / não estão sujeitos ao tempo como os humanos; sua existência é contínua desde a criação", pagina: 9, id: "", locais: [] },
    { numero: 47, referencia: "Lc 20.36", tags: "os anjos não estão sujeitos ao tempo como os humanos", pagina: 9, id: "lc20.36", locais: [] },
    { numero: 48, referencia: "Mt 22.30", tags: "os anjos não estão sujeitos ao tempo como os humanos", pagina: 9, id: "mt22.30b", locais: [] },
    { numero: 49, referencia: "Hb 1.14", tags: "os anjos não estão sujeitos ao tempo como os humanos", pagina: 9, id: "hb1.14c", locais: [] },
    { numero: 50, referencia: "", tags: "perguntas rápidas / os anjos têm corpo físico permanente? não, sua natureza é espiritual / eles podem aparecer visivelmente? sim, quando Deus permite", pagina: 9, id: "", locais: [] },
    { numero: 51, referencia: "", tags: "perguntas rápidas / os anjos podem se casar ou gerar descendência? não, não foram criados para isso / por que às vezes assumem forma humana? para cumprir missões e transmitir mensagens de Deus", pagina: 10, id: "", locais: [] },
    { numero: 52, referencia: "", tags: "exemplo didático / os anjos são como o sinal de Wi-Fi: invisíveis por natureza, mas reais em sua atuação", pagina: 10, id: "", locais: [] },
    { numero: 53, referencia: "", tags: "exemplo atual / uma escola onde funcionários cuidam da limpeza e segurança sem aparecer, mas tudo funciona por causa do trabalho deles", pagina: 10, id: "", locais: [] },
    { numero: 54, referencia: "", tags: "toque de sabedoria / a ausência de visão não significa ausência de atuação no Reino de Deus", pagina: 10, id: "", locais: [] },
    { numero: 55, referencia: "Gn 19.1-5", tags: "você sabia / a Bíblia mostra que, em algumas ocasiões, anjos foram confundidos com pessoas comuns", pagina: 10, id: "gn19.1-5", locais: [] },
    { numero: 56, referencia: "", tags: "história ilustrativa / invisível, mas reais / Tânia e a avó observam o vento e refletem sobre coisas que não vemos mas sabemos que existem pelos efeitos que produzem", pagina: 11, id: "", locais: [] },
    { numero: 57, referencia: "", tags: "palavra pastoral / não se preocupe em imaginar como os anjos se parecem; o importante é saber que são enviados por Deus para cumprir missões", pagina: 11, id: "", locais: [] },
    { numero: 58, referencia: "", tags: "aplicação prática / marque suas respostas", pagina: 12, id: "", locais: [] },
    { numero: 59, referencia: "Sl 103.20", tags: "tarefa simples para o coração / leia Salmos 103:20 e pense sobre a obediência dos anjos à voz de Deus", pagina: 12, id: "sl103.20a", locais: [] },
    { numero: 60, referencia: "", tags: "espaço para resposta", pagina: 12, id: "", locais: [] },
    { numero: 61, referencia: "Sl 103.20", tags: "versículo-chave / bendizei ao Senhor, todos os seus anjos, poderosos em força, que cumprem as suas ordens, obedecendo à voz da sua palavra", pagina: 13, id: "sl103.20b", locais: [] },
    { numero: 62, referencia: "", tags: "ideia central / os anjos que servem a Deus são seres espirituais que vivem em santidade, obediência e humildade, refletindo o caráter de Deus", pagina: 13, id: "", locais: [] },
    { numero: 63, referencia: "", tags: "explicação simples e profunda / os anjos não vivem de forma passiva; atuam de maneira intensa, organizada e submissa à vontade de Deus", pagina: 13, id: "", locais: [] },
    { numero: 64, referencia: "", tags: "a) os anjos adoram constantemente no céu / miríades de anjos louvando o Cordeiro com vozes poderosas", pagina: 13, id: "", locais: [] },
    { numero: 65, referencia: "Ap 5.11-12", tags: "miríades de anjos louvando o Cordeiro com vozes poderosas", pagina: 13, id: "ap5.11-12", locais: [] },
    { numero: 66, referencia: "Is 6.3", tags: "os serafins proclamam continuamente: Santo, Santo, Santo é o Senhor dos Exércitos", pagina: 13, id: "is6.3a", locais: [] },
    { numero: 67, referencia: "", tags: "b) os anjos agem com obediência imediata / não questionam nem adiam aquilo que o Senhor determina", pagina: 14, id: "", locais: [] },
    { numero: 68, referencia: "Sl 103.20", tags: "os anjos cumprem as ordens de Deus sem demora", pagina: 14, id: "sl103.20c", locais: [] },
    { numero: 69, referencia: "Hb 1.14", tags: "os anjos cumprem as ordens de Deus sem demora", pagina: 14, id: "hb1.14d", locais: [] },
    { numero: 70, referencia: "Mt 6.10", tags: "os anjos cumprem as ordens de Deus sem demora", pagina: 14, id: "mt6.10", locais: [] },
    { numero: 71, referencia: "", tags: "c) os anjos agem conforme a vontade de Deus, não a própria / não tomam decisões independentes nem buscam seus próprios interesses", pagina: 14, id: "", locais: [] },
    { numero: 72, referencia: "Sl 103.20", tags: "os anjos cumprem exatamente aquilo que Deus determina", pagina: 14, id: "sl103.20d", locais: [] },
    { numero: 73, referencia: "Hb 1.14", tags: "os anjos cumprem exatamente aquilo que Deus determina", pagina: 14, id: "hb1.14e", locais: [] },
    { numero: 74, referencia: "Dn 9.21-23", tags: "os anjos cumprem exatamente aquilo que Deus determina", pagina: 14, id: "dn9.21-23a", locais: [] },
    { numero: 75, referencia: "", tags: "d) os anjos agem em batalhas espirituais invisíveis / lutam contra forças do mal em defesa dos propósitos de Deus", pagina: 14, id: "", locais: [] },
    { numero: 76, referencia: "Dn 10.13", tags: "os anjos participam de conflitos espirituais", pagina: 14, id: "dn10.13a", locais: [] },
    { numero: 77, referencia: "Ap 12.7", tags: "os anjos participam de conflitos espirituais", pagina: 14, id: "ap12.7a", locais: [] },
    { numero: 78, referencia: "2 Rs 6.17", tags: "os anjos participam de conflitos espirituais", pagina: 14, id: "2rs6.17", locais: [] },
    { numero: 79, referencia: "", tags: "e) os anjos são enviados para cumprir missões na terra / protegem, orientam, livram e executam propósitos divinos", pagina: 14, id: "", locais: [] },
    { numero: 80, referencia: "Hb 1.14", tags: "os anjos são enviados por Deus para agir entre os homens", pagina: 14, id: "hb1.14f", locais: [] },
    { numero: 81, referencia: "Sl 91.11", tags: "os anjos são enviados por Deus para agir entre os homens", pagina: 14, id: "sl91.11c", locais: [] },
    { numero: 82, referencia: "At 12.7", tags: "os anjos são enviados por Deus para agir entre os homens", pagina: 14, id: "at12.7", locais: [] },
    { numero: 83, referencia: "", tags: "perguntas rápidas / os anjos têm consciência e personalidade? sim, pensam, falam, obedecem e tomam decisões / qual a marca principal do caráter deles? pureza que reflete a santidade de Deus", pagina: 14, id: "", locais: [] },
    { numero: 84, referencia: "", tags: "perguntas rápidas / como respondem às ordens divinas? com obediência total e imediata / para que usam sua força? para cumprir os planos do Senhor", pagina: 14, id: "", locais: [] },
    { numero: 85, referencia: "", tags: "exemplo didático / os anjos são como a lua, que não tem luz própria, mas reflete a luz do sol", pagina: 15, id: "", locais: [] },
    { numero: 86, referencia: "", tags: "exemplo atual / um jovem que segue exatamente as instruções de um professor durante uma prova, sem questionar nem improvisar", pagina: 16, id: "", locais: [] },
    { numero: 87, referencia: "", tags: "toque de sabedoria / os anjos são fortes em poder, mas maiores ainda em obediência e humildade", pagina: 16, id: "", locais: [] },
    { numero: 88, referencia: "Hb 1.14", tags: "você sabia / os anjos são chamados de ministros de Deus, porque servem continuamente à Sua vontade", pagina: 16, id: "hb1.14g", locais: [] },
    { numero: 89, referencia: "", tags: "história ilustrativa / o carteiro fiel / Orlando observa um carteiro que nunca falta, mesmo com sol ou tempestade, e reflete sobre a fidelidade dos anjos", pagina: 16, id: "", locais: [] },
    { numero: 90, referencia: "", tags: "palavra pastoral / os anjos que servem a Deus nos lembram que a verdadeira grandeza está na obediência", pagina: 17, id: "", locais: [] },
    { numero: 91, referencia: "", tags: "aplicação prática / marque suas respostas", pagina: 17, id: "", locais: [] },
    { numero: 92, referencia: "", tags: "aplicação prática / marque suas respostas (continuação)", pagina: 18, id: "", locais: [] },
    { numero: 93, referencia: "Sl 148.2", tags: "tarefa simples para o coração / leia Salmo 148:2, louve a Deus pela sua criação e anote uma bênção recebida", pagina: 18, id: "sl148.2b", locais: [] },
    { numero: 94, referencia: "", tags: "espaço para resposta", pagina: 18, id: "", locais: [] },
    { numero: 95, referencia: "Cl 1.16", tags: "versículo-chave / porque nele foram criadas todas as coisas nos céus e na terra, visíveis e invisíveis, tronos, dominações, principados, potestades — tudo foi criado por ele e para ele", pagina: 19, id: "cl1.16d", locais: [] },
    { numero: 96, referencia: "", tags: "ideia central / todos os anjos são servos de Deus, mas não exercem as mesmas funções; há ordem, funções distintas e liderança estabelecida pelo Senhor", pagina: 19, id: "", locais: [] },
    { numero: 97, referencia: "", tags: "explicação simples e profunda / a Escritura revela que Deus é um Deus de ordem; existem funções diferentes e até posições de liderança no mundo angelical", pagina: 19, id: "", locais: [] },
    { numero: 98, referencia: "", tags: "a) funções diferentes no mundo celestial / tronos, dominações, principados e potestades mostram organização e hierarquia no mundo espiritual", pagina: 19, id: "", locais: [] },
    { numero: 99, referencia: "Cl 1.16", tags: "há organização e hierarquia no mundo espiritual", pagina: 19, id: "cl1.16e", locais: [] },
    { numero: 100, referencia: "Ef 1.21", tags: "há organização e hierarquia no mundo espiritual", pagina: 19, id: "ef1.21", locais: [] },
    { numero: 101, referencia: "", tags: "b) anjos - mensageiros / Mal'akh (hebraico) e angelos (grego) significam literalmente mensageiro; a palavra anjo descreve função, não natureza", pagina: 20, id: "", locais: [] },
    { numero: 102, referencia: "Gn 32.3", tags: "a palavra anjo significa mensageiro", pagina: 20, id: "gn32.3", locais: [] },
    { numero: 103, referencia: "Lc 1.19,26", tags: "a palavra anjo significa mensageiro", pagina: 20, id: "lc1.19-26a", locais: [] },
    { numero: 104, referencia: "Gn 18.1-2", tags: "os anjos não são descritos na Bíblia como seres alados; em muitos casos aparecem em forma humana comum", pagina: 20, id: "gn18.1-2b", locais: [] },
    { numero: 105, referencia: "Hb 13.2", tags: "os anjos não são descritos na Bíblia como seres alados; em muitos casos aparecem em forma humana comum", pagina: 20, id: "hb13.2b", locais: [] },
    { numero: 106, referencia: "Dn 8.16", tags: "exemplo: Gabriel é um anjo que aparece trazendo respostas e anúncios importantes", pagina: 20, id: "dn8.16", locais: [] },
    { numero: 107, referencia: "Dn 9.21-23", tags: "Gabriel explicou visões ao profeta Daniel", pagina: 20, id: "dn9.21-23b", locais: [] },
    { numero: 108, referencia: "Lc 1.11-13,26-31", tags: "Gabriel anunciou o nascimento de João Batista e de Jesus", pagina: 20, id: "lc1.11-13-26-31", locais: [] },
    { numero: 109, referencia: "", tags: "c) querubins - guardiões do espaço sagrado / a palavra hebraica keruv está associada à ideia de guardar, proteger e estar próximo da presença divina", pagina: 20, id: "", locais: [] },
    { numero: 110, referencia: "Gn 3.24", tags: "os querubins guardam o caminho do Éden", pagina: 20, id: "gn3.24", locais: [] },
    { numero: 111, referencia: "Êx 25.18-22", tags: "os querubins estão associados à Arca da Aliança", pagina: 21, id: "ex25.18-22", locais: [] },
    { numero: 112, referencia: "Sl 99.1", tags: "os querubins estão associados ao trono de Deus", pagina: 21, id: "sl99.1", locais: [] },
    { numero: 113, referencia: "Ez 1", tags: "os querubins aparecem nas visões do profeta Ezequiel", pagina: 21, id: "ez1a", locais: [] },
    { numero: 114, referencia: "Ez 10", tags: "os querubins aparecem nas visões do profeta Ezequiel", pagina: 21, id: "ez10a", locais: [] },
    { numero: 115, referencia: "Ez 1.6", tags: "os querubins são descritos como seres alados, com aparência impressionante", pagina: 21, id: "ez1.6", locais: [] },
    { numero: 116, referencia: "Ez 10.5", tags: "os querubins são descritos como seres alados, com aparência impressionante", pagina: 21, id: "ez10.5", locais: [] },
    { numero: 117, referencia: "", tags: "d) serafins - seres de adoração intensa / a palavra serafim vem do hebraico saraf, que significa arder ou queimar, ligados à santidade e glória intensa de Deus", pagina: 21, id: "", locais: [] },
    { numero: 118, referencia: "Is 6.2", tags: "os serafins são descritos como seres alados, com seis asas, diante do trono de Deus", pagina: 21, id: "is6.2", locais: [] },
    { numero: 119, referencia: "Is 6.6-7", tags: "os serafins tocaram os lábios do profeta Isaías com uma brasa viva, simbolizando purificação e preparação para o ministério", pagina: 21, id: "is6.6-7", locais: [] },
    { numero: 120, referencia: "", tags: "e) arcanjo Miguel - líder no exército de Deus / a palavra arc vem do grego arché, que significa principal, líder ou chefe", pagina: 22, id: "", locais: [] },
    { numero: 121, referencia: "Jd 1.9", tags: "Miguel é chamado de arcanjo", pagina: 22, id: "jd1.9a", locais: [] },
    { numero: 122, referencia: "Dn 10.13", tags: "Miguel é apresentado como um dos primeiros príncipes, defensor do povo de Deus", pagina: 22, id: "dn10.13b", locais: [] },
    { numero: 123, referencia: "Dn 12.1", tags: "Miguel é apresentado como um dos primeiros príncipes, defensor do povo de Deus", pagina: 22, id: "dn12.1", locais: [] },
    { numero: 124, referencia: "Ap 12.7", tags: "Miguel lidera os anjos na luta contra o mal", pagina: 22, id: "ap12.7b", locais: [] },
    { numero: 125, referencia: "Jd 1.9", tags: "somente Miguel é chamado explicitamente de arcanjo na Bíblia", pagina: 22, id: "jd1.9b", locais: [] },
    { numero: 126, referencia: "1 Ts 4.16", tags: "somente Miguel é chamado explicitamente de arcanjo na Bíblia", pagina: 22, id: "1ts4.16", locais: [] },
    { numero: 127, referencia: "", tags: "perguntas rápidas / todos os anjos têm a mesma função? não, há funções diferentes / o que fazem querubins e serafins? querubins guardam e protegem; serafins adoram", pagina: 22, id: "", locais: [] },
    { numero: 128, referencia: "", tags: "perguntas rápidas / o que significa arcanjo? anjo principal ou chefe (não há mais de um, é somente um) / mesmo com hierarquia, quem é o Senhor de todos? somente Deus", pagina: 22, id: "", locais: [] },
    { numero: 129, referencia: "", tags: "exemplo didático / é como um exército: generais, capitães e soldados fazem parte da mesma tropa, cada um com função específica", pagina: 22, id: "", locais: [] },
    { numero: 130, referencia: "", tags: "exemplo atual / um acampamento da igreja onde cada um cuida de uma função diferente, mas todos servem ao mesmo objetivo", pagina: 23, id: "", locais: [] },
    { numero: 131, referencia: "", tags: "toque de sabedoria / quando o coração está alinhado com Deus, qualquer função se torna gloriosa", pagina: 23, id: "", locais: [] },
    { numero: 132, referencia: "", tags: "você sabia / a Bíblia menciona apenas dois anjos pelo nome: Miguel e Gabriel", pagina: 23, id: "", locais: [] },
    { numero: 133, referencia: "", tags: "história ilustrativa / o ensaio da orquestra / Marilsa se encanta com a harmonia da orquestra, onde cada instrumento tem função diferente, mas juntos criam uma melodia perfeita", pagina: 23, id: "", locais: [] },
    { numero: 134, referencia: "", tags: "Deus organizou o exército celestial com ordem e propósito: Miguel lidera, mensageiros anunciam, querubins guardam, serafins adoram — todos sob o mesmo Maestro", pagina: 24, id: "", locais: [] },
    { numero: 135, referencia: "", tags: "palavra pastoral / os anjos nos ensinam que ordem e disciplina fazem parte do plano de Deus; cada um tem sua função, mas todos vivem para servir ao Senhor", pagina: 24, id: "", locais: [] },
    { numero: 136, referencia: "", tags: "aplicação prática / marque suas respostas", pagina: 24, id: "", locais: [] },
    { numero: 137, referencia: "", tags: "tarefa simples para o coração / observar as áreas da vida (igreja, casa, escola, trabalho) e perguntar qual a função que Deus tem confiado ali", pagina: 25, id: "", locais: [] },
    { numero: 138, referencia: "", tags: "espaço para resposta", pagina: 25, id: "", locais: [] }
  ],

  // ============================================
  // LISTA ALFABÉTICA (gerada automaticamente a partir da listaAparicao)
  // ============================================
  listaAlfabetica: [
    { referencia: "1 Ts 4.16", tags: "somente Miguel é chamado explicitamente de arcanjo na Bíblia", pagina: 22, id: "1ts4.16", locais: [] },
    { referencia: "2 Rs 6.17", tags: "os anjos participam de conflitos espirituais", pagina: 14, id: "2rs6.17", locais: [] },
    { referencia: "Ap 12.7", tags: "os anjos participam de conflitos espirituais", pagina: 14, id: "ap12.7a", locais: [] },
    { referencia: "Ap 12.7", tags: "Miguel lidera os anjos na luta contra o mal", pagina: 22, id: "ap12.7b", locais: [] },
    { referencia: "Ap 5.11", tags: "milhares de milhares e milhões de milhões de anjos diante do trono de Deus", pagina: 4, id: "ap5.11a", locais: [] },
    { referencia: "Ap 5.11-12", tags: "miríades de anjos louvando o Cordeiro com vozes poderosas", pagina: 13, id: "ap5.11-12", locais: [] },
    { referencia: "At 12.7", tags: "os anjos são enviados por Deus para agir entre os homens", pagina: 14, id: "at12.7", locais: [] },
    { referencia: "Cl 1.16", tags: "versículo-chave / pois nele foram criadas todas as coisas nos céus e na terra, visíveis e invisíveis, tronos, soberanias, poderes e autoridades — tudo foi criado por ele e para ele", pagina: 3, id: "cl1.16a", locais: [] },
    { referencia: "Cl 1.16", tags: "Deus é soberano sobre tudo, inclusive sobre o mundo espiritual", pagina: 3, id: "cl1.16b", locais: [] },
    { referencia: "Cl 1.16", tags: "você sabia / tudo o que existe no mundo espiritual, incluindo anjos, foi criado por Cristo e para Cristo", pagina: 5, id: "cl1.16c", locais: [] },
    { referencia: "Cl 1.16", tags: "versículo-chave / porque nele foram criadas todas as coisas nos céus e na terra, visíveis e invisíveis, tronos, dominações, principados, potestades — tudo foi criado por ele e para ele", pagina: 19, id: "cl1.16d", locais: [] },
    { referencia: "Cl 1.16", tags: "há organização e hierarquia no mundo espiritual", pagina: 19, id: "cl1.16e", locais: [] },
    { referencia: "Dn 10.13", tags: "os anjos participam de conflitos espirituais", pagina: 14, id: "dn10.13a", locais: [] },
    { referencia: "Dn 10.13", tags: "Miguel é apresentado como um dos primeiros príncipes, defensor do povo de Deus", pagina: 22, id: "dn10.13b", locais: [] },
    { referencia: "Dn 12.1", tags: "Miguel é apresentado como um dos primeiros príncipes, defensor do povo de Deus", pagina: 22, id: "dn12.1", locais: [] },
    { referencia: "Dn 7.10", tags: "milhares de milhares e milhões de milhões de anjos diante do trono de Deus", pagina: 4, id: "dn7.10a", locais: [] },
    { referencia: "Dn 8.16", tags: "exemplo: Gabriel é um anjo que aparece trazendo respostas e anúncios importantes", pagina: 20, id: "dn8.16", locais: [] },
    { referencia: "Dn 9.21-23", tags: "os anjos cumprem exatamente aquilo que Deus determina", pagina: 14, id: "dn9.21-23a", locais: [] },
    { referencia: "Dn 9.21-23", tags: "Gabriel explicou visões ao profeta Daniel", pagina: 20, id: "dn9.21-23b", locais: [] },
    { referencia: "Ef 1.21", tags: "há organização e hierarquia no mundo espiritual", pagina: 19, id: "ef1.21", locais: [] },
    { referencia: "Ez 1", tags: "os querubins aparecem nas visões do profeta Ezequiel", pagina: 21, id: "ez1a", locais: [] },
    { referencia: "Ez 1.6", tags: "os querubins são descritos como seres alados, com aparência impressionante", pagina: 21, id: "ez1.6", locais: [] },
    { referencia: "Ez 10", tags: "os querubins aparecem nas visões do profeta Ezequiel", pagina: 21, id: "ez10a", locais: [] },
    { referencia: "Ez 10.5", tags: "os querubins são descritos como seres alados, com aparência impressionante", pagina: 21, id: "ez10.5", locais: [] },
    { referencia: "Ez 28.15", tags: "tudo o que Deus cria é bom, e os anjos não foram exceção", pagina: 4, id: "ez28.15", locais: [] },
    { referencia: "Gn 1.26", tags: "os anjos já existiam antes da criação do homem", pagina: 4, id: "gn1.26", locais: [] },
    { referencia: "Gn 1.31", tags: "tudo o que Deus cria é bom, e os anjos não foram exceção", pagina: 4, id: "gn1.31", locais: [] },
    { referencia: "Gn 18.1-2", tags: "anjos aparecem de forma visível aos seres humanos", pagina: 9, id: "gn18.1-2a", locais: [] },
    { referencia: "Gn 18.1-2", tags: "os anjos não são descritos na Bíblia como seres alados; em muitos casos aparecem em forma humana comum", pagina: 20, id: "gn18.1-2b", locais: [] },
    { referencia: "Gn 19.1-5", tags: "você sabia / a Bíblia mostra que, em algumas ocasiões, anjos foram confundidos com pessoas comuns", pagina: 10, id: "gn19.1-5", locais: [] },
    { referencia: "Gn 3.24", tags: "os querubins guardam o caminho do Éden", pagina: 20, id: "gn3.24", locais: [] },
    { referencia: "Gn 32.3", tags: "a palavra anjo significa mensageiro", pagina: 20, id: "gn32.3", locais: [] },
    { referencia: "Hb 1.14", tags: "os anjos já existiam antes da criação do homem", pagina: 4, id: "hb1.14a", locais: [] },
    { referencia: "Hb 1.14", tags: "os anjos são espíritos por natureza", pagina: 8, id: "hb1.14b", locais: [] },
    { referencia: "Hb 1.14", tags: "os anjos não estão sujeitos ao tempo como os humanos", pagina: 9, id: "hb1.14c", locais: [] },
    { referencia: "Hb 1.14", tags: "os anjos cumprem as ordens de Deus sem demora", pagina: 14, id: "hb1.14d", locais: [] },
    { referencia: "Hb 1.14", tags: "os anjos cumprem exatamente aquilo que Deus determina", pagina: 14, id: "hb1.14e", locais: [] },
    { referencia: "Hb 1.14", tags: "os anjos são enviados por Deus para agir entre os homens", pagina: 14, id: "hb1.14f", locais: [] },
    { referencia: "Hb 1.14", tags: "você sabia / os anjos são chamados de ministros de Deus, porque servem continuamente à Sua vontade", pagina: 16, id: "hb1.14g", locais: [] },
    { referencia: "Hb 1.5", tags: "os anjos não se casam nem geram outros anjos", pagina: 9, id: "hb1.5", locais: [] },
    { referencia: "Hb 13.2", tags: "anjos aparecem de forma visível aos seres humanos", pagina: 9, id: "hb13.2a", locais: [] },
    { referencia: "Hb 13.2", tags: "os anjos não são descritos na Bíblia como seres alados; em muitos casos aparecem em forma humana comum", pagina: 20, id: "hb13.2b", locais: [] },
    { referencia: "Is 6.2", tags: "os serafins são descritos como seres alados, com seis asas, diante do trono de Deus", pagina: 21, id: "is6.2", locais: [] },
    { referencia: "Is 6.3", tags: "os serafins proclamam continuamente: Santo, Santo, Santo é o Senhor dos Exércitos", pagina: 13, id: "is6.3a", locais: [] },
    { referencia: "Is 6.6-7", tags: "os serafins tocaram os lábios do profeta Isaías com uma brasa viva, simbolizando purificação e preparação para o ministério", pagina: 21, id: "is6.6-7", locais: [] },
    { referencia: "Jd 1.9", tags: "Miguel é chamado de arcanjo", pagina: 22, id: "jd1.9a", locais: [] },
    { referencia: "Jd 1.9", tags: "somente Miguel é chamado explicitamente de arcanjo na Bíblia", pagina: 22, id: "jd1.9b", locais: [] },
    { referencia: "Jz 13.6", tags: "anjos aparecem de forma visível aos seres humanos", pagina: 9, id: "jz13.6", locais: [] },
    { referencia: "Jó 38.4,7", tags: "os anjos já existiam antes da criação do homem", pagina: 4, id: "job38.4-7", locais: [] },
    { referencia: "Jó 38.7", tags: "somente Deus é eterno; os anjos já estavam lá quando Deus formou o mundo e cantavam de alegria", pagina: 6, id: "job38.7", locais: [] },
    { referencia: "Lc 1.11-13,26-31", tags: "Gabriel anunciou o nascimento de João Batista e de Jesus", pagina: 20, id: "lc1.11-13-26-31", locais: [] },
    { referencia: "Lc 1.19,26", tags: "a palavra anjo significa mensageiro", pagina: 20, id: "lc1.19-26a", locais: [] },
    { referencia: "Lc 20.34-36", tags: "os anjos não se casam nem geram outros anjos", pagina: 9, id: "lc20.34-36", locais: [] },
    { referencia: "Lc 20.36", tags: "os anjos não estão sujeitos ao tempo como os humanos", pagina: 9, id: "lc20.36", locais: [] },
    { referencia: "Lc 24.4", tags: "a forma visível não é permanente, e sim uma missão específica", pagina: 9, id: "lc24.4", locais: [] },
    { referencia: "Mt 22.30", tags: "os anjos não se casam nem geram outros anjos", pagina: 9, id: "mt22.30a", locais: [] },
    { referencia: "Mt 22.30", tags: "os anjos não estão sujeitos ao tempo como os humanos", pagina: 9, id: "mt22.30b", locais: [] },
    { referencia: "Mt 6.10", tags: "os anjos cumprem as ordens de Deus sem demora", pagina: 14, id: "mt6.10", locais: [] },
    { referencia: "Sl 103.20", tags: "tarefa simples para o coração / leia Salmos 103:20 e pense sobre a obediência dos anjos à voz de Deus", pagina: 12, id: "sl103.20a", locais: [] },
    { referencia: "Sl 103.20", tags: "versículo-chave / bendizei ao Senhor, todos os seus anjos, poderosos em força, que cumprem as suas ordens, obedecendo à voz da sua palavra", pagina: 13, id: "sl103.20b", locais: [] },
    { referencia: "Sl 103.20", tags: "os anjos cumprem as ordens de Deus sem demora", pagina: 14, id: "sl103.20c", locais: [] },
    { referencia: "Sl 103.20", tags: "os anjos cumprem exatamente aquilo que Deus determina", pagina: 14, id: "sl103.20d", locais: [] },
    { referencia: "Sl 104.4", tags: "tudo o que Deus cria é bom, e os anjos não foram exceção", pagina: 4, id: "sl104.4a", locais: [] },
    { referencia: "Sl 104.4", tags: "versículo-chave / faz dos seus anjos espíritos, e dos seus ministros, labaredas de fogo", pagina: 8, id: "sl104.4b", locais: [] },
    { referencia: "Sl 104.4", tags: "os anjos são espíritos por natureza", pagina: 8, id: "sl104.4c", locais: [] },
    { referencia: "Sl 148.2", tags: "tarefa simples para o coração / leia Salmo 148:2, louve a Deus pela sua criação e anote uma bênção recebida", pagina: 18, id: "sl148.2b", locais: [] },
    { referencia: "Sl 148.2,5", tags: "Deus é soberano sobre tudo, inclusive sobre o mundo espiritual", pagina: 3, id: "sl148.2-5a", locais: [] },
    { referencia: "Sl 91.11", tags: "os anjos são enviados por Deus para agir entre os homens", pagina: 14, id: "sl91.11c", locais: [] },
    { referencia: "Sl 99.1", tags: "os querubins estão associados ao trono de Deus", pagina: 21, id: "sl99.1", locais: [] },
    { referencia: "Êx 25.18-22", tags: "os querubins estão associados à Arca da Aliança", pagina: 21, id: "ex25.18-22", locais: [] }
  ]
};
