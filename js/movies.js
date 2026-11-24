/* ==========================================================
   MARVEL TIMELINE - movies.js
   Dados e funcionalidades dos filmes

   COMO ADICIONAR UM FILME NOVO
   Copie um bloco { ... } da lista MOVIES e preencha os campos.
   - dataLancamento: data de estreia nos EUA, no formato "AAAA-MM-DD".
     O ano e a posição na ordem de lançamento são calculados sozinhos.
   - ordemCronologica: posição entre os filmes (1, 2, 3...). Ao inserir
     um filme no meio da lista, os números seguintes precisam subir 1.
   - poster: caminho da imagem, por exemplo "assets/images/homem-de-ferro.jpg".
     Enquanto estiver vazio ("") aparece o pôster provisório.
   - observacao: opcional. Use para avisar sobre posições debatidas.
   ========================================================== */

/* ---------- 1. DADOS ---------- */
const MOVIES = [
  /* ===== FASE 1 ===== */
  {
    id: "homem-de-ferro", tipo: "filme",
    titulo: "Homem de Ferro", tituloOriginal: "Iron Man",
    dataLancamento: "2008-05-02", fase: 1, ordemCronologica: 3, poster: "assets/images/filmes/homem-de-ferro.jpg",
    sinopse: "O bilionário Tony Stark escapa do cativeiro com uma armadura de sua invenção e decide usá-la para proteger as pessoas.",
    observacao: "",
  },
  {
    id: "o-incrivel-hulk", tipo: "filme",
    titulo: "O Incrível Hulk", tituloOriginal: "The Incredible Hulk",
    dataLancamento: "2008-06-13", fase: 1, ordemCronologica: 5, poster: "assets/images/filmes/o-incrivel-hulk.jpg",
    sinopse: "Em fuga, o cientista Bruce Banner procura uma cura para a transformação que o faz virar o Hulk, enquanto é perseguido pelo exército.",
    observacao: "Os eventos de Homem de Ferro 2, O Incrível Hulk e Thor acontecem mais ou menos ao mesmo tempo. A sequência usada aqui segue a do Disney+.",
  },
  {
    id: "homem-de-ferro-2", tipo: "filme",
    titulo: "Homem de Ferro 2", tituloOriginal: "Iron Man 2",
    dataLancamento: "2010-05-07", fase: 1, ordemCronologica: 4, poster: "assets/images/filmes/homem-de-ferro-2.jpg",
    sinopse: "Com a identidade revelada ao mundo, Tony Stark é pressionado a entregar sua tecnologia ao governo, enquanto novos inimigos surgem.",
    observacao: "Os eventos de Homem de Ferro 2, O Incrível Hulk e Thor acontecem mais ou menos ao mesmo tempo. A sequência usada aqui segue a do Disney+.",
  },
  {
    id: "thor", tipo: "filme",
    titulo: "Thor", tituloOriginal: "Thor",
    dataLancamento: "2011-05-06", fase: 1, ordemCronologica: 6, poster: "assets/images/filmes/thor.jpg",
    sinopse: "Banido de Asgard e enviado à Terra, o poderoso Thor precisa aprender humildade para recuperar seu martelo e proteger os mundos.",
    observacao: "Os eventos de Homem de Ferro 2, O Incrível Hulk e Thor acontecem mais ou menos ao mesmo tempo. A sequência usada aqui segue a do Disney+.",
  },
  {
    id: "capitao-america-o-primeiro-vingador", tipo: "filme",
    titulo: "Capitão América: O Primeiro Vingador", tituloOriginal: "Captain America: The First Avenger",
    dataLancamento: "2011-07-22", fase: 1, ordemCronologica: 1, poster: "assets/images/filmes/capitao-america-o-primeiro-vingador.jpg",
    sinopse: "Na Segunda Guerra Mundial, o franzino Steve Rogers é transformado em super-soldado e enfrenta a organização Hydra.",
    observacao: "A maior parte da história se passa na Segunda Guerra Mundial. O trecho final acontece nos dias atuais do MCU.",
  },
  {
    id: "os-vingadores", tipo: "filme",
    titulo: "Os Vingadores", tituloOriginal: "The Avengers",
    dataLancamento: "2012-05-04", fase: 1, ordemCronologica: 7, poster: "assets/images/filmes/os-vingadores.jpg",
    sinopse: "Nick Fury reúne heróis improváveis para deter Loki, que lidera uma invasão alienígena em Nova York.",
    observacao: "",
  },

  /* ===== FASE 2 ===== */
  {
    id: "homem-de-ferro-3", tipo: "filme",
    titulo: "Homem de Ferro 3", tituloOriginal: "Iron Man 3",
    dataLancamento: "2013-05-03", fase: 2, ordemCronologica: 9, poster: "assets/images/filmes/homem-de-ferro-3.jpg",
    sinopse: "Abalado pelos eventos de Nova York, Tony Stark vê sua vida desmoronar após os ataques de um terrorista chamado Mandarim.",
    observacao: "",
  },
  {
    id: "thor-o-mundo-sombrio", tipo: "filme",
    titulo: "Thor: O Mundo Sombrio", tituloOriginal: "Thor: The Dark World",
    dataLancamento: "2013-11-08", fase: 2, ordemCronologica: 8, poster: "assets/images/filmes/thor-o-mundo-sombrio.jpg",
    sinopse: "Thor enfrenta uma ameaça ancestral, os elfos negros, que querem mergulhar os Nove Reinos na escuridão.",
    observacao: "",
  },
  {
    id: "capitao-america-soldado-invernal", tipo: "filme",
    titulo: "Capitão América: Soldado Invernal", tituloOriginal: "Captain America: The Winter Soldier",
    dataLancamento: "2014-04-04", fase: 2, ordemCronologica: 10, poster: "assets/images/filmes/capitao-america-soldado-invernal.jpg",
    sinopse: "Steve Rogers tenta se adaptar ao mundo moderno, até que uma conspiração dentro da S.H.I.E.L.D. e um misterioso assassino o colocam em perigo.",
    observacao: "",
  },
  {
    id: "guardioes-da-galaxia", tipo: "filme",
    titulo: "Guardiões da Galáxia", tituloOriginal: "Guardians of the Galaxy",
    dataLancamento: "2014-08-01", fase: 2, ordemCronologica: 11, poster: "assets/images/filmes/guardioes-da-galaxia.jpg",
    sinopse: "O aventureiro Peter Quill reúne um grupo de fora da lei para impedir que um poderoso artefato caia nas mãos de um vilão.",
    observacao: "",
  },
  {
    id: "vingadores-era-de-ultron", tipo: "filme",
    titulo: "Vingadores: Era de Ultron", tituloOriginal: "Avengers: Age of Ultron",
    dataLancamento: "2015-05-01", fase: 2, ordemCronologica: 13, poster: "assets/images/filmes/vingadores-era-de-ultron.jpg",
    sinopse: "Os Vingadores precisam deter Ultron, uma inteligência artificial criada para proteger o mundo que decide acabar com a humanidade.",
    observacao: "",
  },
  {
    id: "homem-formiga", tipo: "filme",
    titulo: "Homem-Formiga", tituloOriginal: "Ant-Man",
    dataLancamento: "2015-07-17", fase: 2, ordemCronologica: 14, poster: "assets/images/filmes/homem-formiga.jpg",
    sinopse: "O ex-ladrão Scott Lang recebe um traje que o faz encolher e é recrutado para um assalto que pode evitar uma catástrofe.",
    observacao: "",
  },

  /* ===== FASE 3 ===== */
  {
    id: "capitao-america-guerra-civil", tipo: "filme",
    titulo: "Capitão América: Guerra Civil", tituloOriginal: "Captain America: Civil War",
    dataLancamento: "2016-05-06", fase: 3, ordemCronologica: 15, poster: "assets/images/filmes/capitao-america-guerra-civil.jpg",
    sinopse: "Um acordo para controlar os super-heróis divide os Vingadores e coloca antigos amigos em lados opostos.",
    observacao: "",
  },
  {
    id: "doutor-estranho", tipo: "filme",
    titulo: "Doutor Estranho", tituloOriginal: "Doctor Strange",
    dataLancamento: "2016-11-04", fase: 3, ordemCronologica: 19, poster: "assets/images/filmes/doutor-estranho.jpg",
    sinopse: "Depois de um acidente que destrói sua carreira, o neurocirurgião Stephen Strange busca a cura e descobre o mundo da magia.",
    observacao: "",
  },
  {
    id: "guardioes-da-galaxia-vol-2", tipo: "filme",
    titulo: "Guardiões da Galáxia Vol. 2", tituloOriginal: "Guardians of the Galaxy Vol. 2",
    dataLancamento: "2017-05-05", fase: 3, ordemCronologica: 12, poster: "assets/images/filmes/guardioes-da-galaxia-vol-2.jpg",
    sinopse: "Os Guardiões tentam se manter unidos enquanto Peter Quill descobre a verdade sobre suas origens.",
    observacao: "",
  },
  {
    id: "homem-aranha-de-volta-ao-lar", tipo: "filme",
    titulo: "Homem-Aranha: De Volta ao Lar", tituloOriginal: "Spider-Man: Homecoming",
    dataLancamento: "2017-07-07", fase: 3, ordemCronologica: 18, poster: "assets/images/filmes/homem-aranha-de-volta-ao-lar.jpg",
    sinopse: "O jovem Peter Parker tenta equilibrar a vida escolar com a de herói, sob a orientação de Tony Stark, e enfrenta o Abutre.",
    observacao: "Os eventos começam pouco depois de Guerra Civil, mas o Disney+ o coloca mais adiante, depois de Pantera Negra.",
  },
  {
    id: "thor-ragnarok", tipo: "filme",
    titulo: "Thor: Ragnarok", tituloOriginal: "Thor: Ragnarok",
    dataLancamento: "2017-11-03", fase: 3, ordemCronologica: 20, poster: "assets/images/filmes/thor-ragnarok.jpg",
    sinopse: "Preso em um planeta distante, Thor precisa escapar para impedir que a deusa Hela destrua Asgard.",
    observacao: "",
  },
  {
    id: "pantera-negra", tipo: "filme",
    titulo: "Pantera Negra", tituloOriginal: "Black Panther",
    dataLancamento: "2018-02-16", fase: 3, ordemCronologica: 17, poster: "assets/images/filmes/pantera-negra.jpg",
    sinopse: "T'Challa volta a Wakanda para assumir o trono como rei e protetor, e é desafiado por um inimigo do passado.",
    observacao: "",
  },
  {
    id: "vingadores-guerra-infinita", tipo: "filme",
    titulo: "Vingadores: Guerra Infinita", tituloOriginal: "Avengers: Infinity War",
    dataLancamento: "2018-04-27", fase: 3, ordemCronologica: 22, poster: "assets/images/filmes/vingadores-guerra-infinita.jpg",
    sinopse: "Os Vingadores e seus aliados lutam para impedir que Thanos reúna as Joias do Infinito e destrua metade da vida no universo.",
    observacao: "",
  },
  {
    id: "homem-formiga-e-a-vespa", tipo: "filme",
    titulo: "Homem-Formiga e a Vespa", tituloOriginal: "Ant-Man and the Wasp",
    dataLancamento: "2018-07-06", fase: 3, ordemCronologica: 21, poster: "assets/images/filmes/homem-formiga-e-a-vespa.jpg",
    sinopse: "Em prisão domiciliar, Scott Lang é chamado por Hope van Dyne e Hank Pym para uma nova missão ligada ao Reino Quântico.",
    observacao: "A história acontece mais ou menos ao mesmo tempo que Vingadores: Guerra Infinita. O Disney+ a coloca antes desse filme.",
  },
  {
    id: "capita-marvel", tipo: "filme",
    titulo: "Capitã Marvel", tituloOriginal: "Captain Marvel",
    dataLancamento: "2019-03-08", fase: 3, ordemCronologica: 2, poster: "assets/images/filmes/capita-marvel.jpg",
    sinopse: "Em 1995, a piloto Carol Danvers descobre seus poderes e se vê no meio de uma guerra entre duas civilizações alienígenas, os kree e os skrulls.",
    observacao: "A história principal se passa em 1995. Uma cena durante os créditos acontece muito depois, perto dos eventos de Vingadores: Ultimato.",
  },
  {
    id: "vingadores-ultimato", tipo: "filme",
    titulo: "Vingadores: Ultimato", tituloOriginal: "Avengers: Endgame",
    dataLancamento: "2019-04-26", fase: 3, ordemCronologica: 23, poster: "assets/images/filmes/vingadores-ultimato.jpg",
    sinopse: "Depois da devastação causada por Thanos, os heróis que restaram fazem uma última tentativa de reverter a tragédia.",
    observacao: "Inclui um salto de cinco anos e viagens no tempo para momentos de filmes anteriores.",
  },
  {
    id: "homem-aranha-longe-de-casa", tipo: "filme",
    titulo: "Homem-Aranha: Longe de Casa", tituloOriginal: "Spider-Man: Far From Home",
    dataLancamento: "2019-07-02", fase: 3, ordemCronologica: 24, poster: "assets/images/filmes/homem-aranha-longe-de-casa.jpg",
    sinopse: "Em uma viagem de férias pela Europa, Peter Parker é recrutado por Nick Fury para enfrentar criaturas elementais.",
    observacao: "Acontece depois de Ultimato. Na lista do Disney+, aparece depois de algumas séries da Fase 4 (veja a página Cronologia).",
  },

  /* ===== FASE 4 ===== */
  {
    id: "viuva-negra", tipo: "filme",
    titulo: "Viúva Negra", tituloOriginal: "Black Widow",
    dataLancamento: "2021-07-09", fase: 4, ordemCronologica: 16, poster: "assets/images/filmes/viuva-negra.jpg",
    sinopse: "Natasha Romanoff enfrenta seu passado ao reencontrar a família que deixou para trás e confrontar a organização que a treinou.",
    observacao: "Os eventos acontecem logo depois de Guerra Civil, embora o filme só tenha sido lançado em 2021. A cena pós-créditos se conecta à série Gavião Arqueiro.",
  },
  {
    id: "shang-chi-e-a-lenda-dos-dez-aneis", tipo: "filme",
    titulo: "Shang-Chi e a Lenda dos Dez Anéis", tituloOriginal: "Shang-Chi and the Legend of the Ten Rings",
    dataLancamento: "2021-09-03", fase: 4, ordemCronologica: 25, poster: "assets/images/filmes/shang-chi-e-a-lenda-dos-dez-aneis.jpg",
    sinopse: "Shang-Chi é forçado a encarar seu passado e a organização criminosa liderada pelo pai, dono dos Dez Anéis.",
    observacao: "",
  },
  {
    id: "eternos", tipo: "filme",
    titulo: "Eternos", tituloOriginal: "Eternals",
    dataLancamento: "2021-11-05", fase: 4, ordemCronologica: 26, poster: "assets/images/filmes/eternos.jpg",
    sinopse: "Seres imortais que protegem a humanidade há milênios saem das sombras para enfrentar uma ameaça antiga.",
    observacao: "",
  },
  {
    id: "homem-aranha-sem-volta-para-casa", tipo: "filme",
    titulo: "Homem-Aranha: Sem Volta para Casa", tituloOriginal: "Spider-Man: No Way Home",
    dataLancamento: "2021-12-17", fase: 4, ordemCronologica: 27, poster: "assets/images/filmes/homem-aranha-sem-volta-para-casa.jpg",
    sinopse: "Com a identidade revelada, Peter Parker pede ajuda ao Doutor Estranho, e um feitiço abre portas para outros universos.",
    observacao: "A posição é debatida entre os fãs. O Disney+ a coloca depois de Eternos e antes de Doutor Estranho no Multiverso da Loucura, embora a história comece logo depois de Longe de Casa.",
  },
  {
    id: "doutor-estranho-no-multiverso-da-loucura", tipo: "filme",
    titulo: "Doutor Estranho no Multiverso da Loucura", tituloOriginal: "Doctor Strange in the Multiverse of Madness",
    dataLancamento: "2022-05-06", fase: 4, ordemCronologica: 28, poster: "assets/images/filmes/doutor-estranho-no-multiverso-da-loucura.jpg",
    sinopse: "Stephen Strange protege uma jovem perseguida por forças misteriosas e enfrenta os perigos do multiverso.",
    observacao: "",
  },
  {
    id: "thor-amor-e-trovao", tipo: "filme",
    titulo: "Thor: Amor e Trovão", tituloOriginal: "Thor: Love and Thunder",
    dataLancamento: "2022-07-08", fase: 4, ordemCronologica: 30, poster: "assets/images/filmes/thor-amor-e-trovao.jpg",
    sinopse: "Em busca de paz, Thor é forçado a agir contra um assassino de deuses, com a ajuda de antigos aliados.",
    observacao: "O Disney+ coloca Pantera Negra: Wakanda Para Sempre antes deste filme, embora ele tenha sido lançado depois.",
  },
  {
    id: "pantera-negra-wakanda-para-sempre", tipo: "filme",
    titulo: "Pantera Negra: Wakanda Para Sempre", tituloOriginal: "Black Panther: Wakanda Forever",
    dataLancamento: "2022-11-11", fase: 4, ordemCronologica: 29, poster: "assets/images/filmes/pantera-negra-wakanda-para-sempre.jpg",
    sinopse: "Wakanda luta para proteger seu povo depois da morte do rei T'Challa, diante de uma nova ameaça vinda do oceano.",
    observacao: "",
  },

  /* ===== FASE 5 ===== */
  {
    id: "homem-formiga-e-a-vespa-quantumania", tipo: "filme",
    titulo: "Homem-Formiga e a Vespa: Quantumania", tituloOriginal: "Ant-Man and the Wasp: Quantumania",
    dataLancamento: "2023-02-17", fase: 5, ordemCronologica: 31, poster: "assets/images/filmes/homem-formiga-e-a-vespa-quantumania.jpg",
    sinopse: "Scott Lang, Hope, Hank e Janet são sugados para o Reino Quântico, onde enfrentam Kang, o Conquistador.",
    observacao: "",
  },
  {
    id: "guardioes-da-galaxia-vol-3", tipo: "filme",
    titulo: "Guardiões da Galáxia Vol. 3", tituloOriginal: "Guardians of the Galaxy Vol. 3",
    dataLancamento: "2023-05-05", fase: 5, ordemCronologica: 32, poster: "assets/images/filmes/guardioes-da-galaxia-vol-3.jpg",
    sinopse: "Os Guardiões se unem em uma missão para proteger Rocket e enfrentam seu criador, o Alto Evolucionário.",
    observacao: "",
  },
  {
    id: "as-marvels", tipo: "filme",
    titulo: "As Marvels", tituloOriginal: "The Marvels",
    dataLancamento: "2023-11-10", fase: 5, ordemCronologica: 33, poster: "assets/images/filmes/as-marvels.jpg",
    sinopse: "Carol Danvers, Monica Rambeau e Kamala Khan descobrem que seus poderes estão conectados e passam a trocar de lugar sempre que os usam.",
    observacao: "",
  },
  {
    id: "deadpool-e-wolverine", tipo: "filme",
    titulo: "Deadpool & Wolverine", tituloOriginal: "Deadpool & Wolverine",
    dataLancamento: "2024-07-26", fase: 5, ordemCronologica: 34, poster: "assets/images/filmes/deadpool-e-wolverine.jpg",
    sinopse: "Deadpool é recrutado pela Autoridade de Variância Temporal e precisa de uma versão de Wolverine para tentar salvar seu universo.",
    observacao: "",
  },
  {
    id: "capitao-america-admiravel-mundo-novo", tipo: "filme",
    titulo: "Capitão América: Admirável Mundo Novo", tituloOriginal: "Captain America: Brave New World",
    dataLancamento: "2025-02-14", fase: 5, ordemCronologica: 35, poster: "assets/images/filmes/capitao-america-admiravel-mundo-novo.jpg",
    sinopse: "Sam Wilson assume o escudo como Capitão América e investiga uma conspiração internacional que ameaça o presidente Ross.",
    observacao: "",
  },
  {
    id: "thunderbolts", tipo: "filme",
    titulo: "Thunderbolts*", tituloOriginal: "Thunderbolts*",
    dataLancamento: "2025-05-02", fase: 5, ordemCronologica: 36, poster: "assets/images/filmes/thunderbolts.jpg",
    sinopse: "Um grupo de anti-heróis cai em uma armadilha e precisa trabalhar em equipe para sobreviver e enfrentar uma ameaça maior.",
    observacao: "",
  },

  /* ===== FASE 6 ===== */
  {
    id: "quarteto-fantastico-primeiros-passos", tipo: "filme",
    titulo: "Quarteto Fantástico: Primeiros Passos", tituloOriginal: "The Fantastic Four: First Steps",
    dataLancamento: "2025-07-25", fase: 6, ordemCronologica: 37, poster: "assets/images/filmes/quarteto-fantastico-primeiros-passos.jpg",
    sinopse: "Em um mundo retrofuturista inspirado nos anos 1960, a Primeira Família da Marvel precisa proteger a Terra de Galactus e da Surfista Prateada.",
    observacao: "A história se passa na Terra-828, um universo alternativo ambientado nos anos 1960. O Disney+ a coloca no fim da lista, por isso esta posição é editorial.",
  },
  {
    id: "homem-aranha-um-novo-dia", tipo: "filme",
    titulo: "Homem-Aranha: Um Novo Dia", tituloOriginal: "Spider-Man: Brand New Day",
    dataLancamento: "2026-07-31", fase: 6, ordemCronologica: 38, poster: "assets/images/filmes/homem-aranha-um-novo-dia.jpg",
    sinopse: "Quatro anos depois de Sem Volta para Casa, Peter Parker vive no anonimato, protege Nova York sozinho e investiga uma série de crimes misteriosos.",
    observacao: "Segundo Kevin Feige, se passa antes de Vingadores: Doomsday, cerca de quatro anos depois de Sem Volta para Casa. Não encontrei uma posição oficial no Disney+, então esta ordem é editorial.",
  },
];

/* ---------- 2. CATÁLOGO (só roda na página filmes.html) ---------- */
(function () {
  "use strict";

  const lista = document.getElementById("catalogo-filmes");
  if (!lista) return; // nas outras páginas, este arquivo só fornece os dados

  // Funções auxiliares compartilhadas, criadas no main.js
  const { normalizarTexto, escaparHtml } = window.MarvelTimeline;

  const campoBusca = document.getElementById("busca-filme");
  const contagem = document.getElementById("contagem");
  const mensagemVazia = document.getElementById("vazio");
  const botaoLimpar = document.getElementById("limpar-filtros");
  const containerFases = document.getElementById("filtro-fases");
  const botoesOrdem = document.querySelectorAll("[data-ordem]");

  // O que o visitante escolheu na tela. A ordem cronológica é a padrão.
  const estado = { busca: "", fase: "todas", ordem: "cronologica" };

  function porCronologia(a, b) {
    return a.ordemCronologica - b.ordemCronologica;
  }
  function porLancamento(a, b) {
    return a.dataLancamento.localeCompare(b.dataLancamento);
  }

  // Posição de cada filme na ordem de lançamento (calculada pelas datas)
  const posicaoLancamento = new Map(
    MOVIES.slice().sort(porLancamento).map(function (filme, indice) {
      return [filme.id, indice + 1];
    })
  );

  // Aplica fase + busca juntas e depois ordena
  function obterFilmesVisiveis() {
    const termo = normalizarTexto(estado.busca);

    return MOVIES
      .filter(function (filme) {
        const faseOk = estado.fase === "todas" || String(filme.fase) === estado.fase;
        const buscaOk =
          termo === "" ||
          normalizarTexto(filme.titulo + " " + filme.tituloOriginal).includes(termo);
        return faseOk && buscaOk;
      })
      .sort(estado.ordem === "cronologica" ? porCronologia : porLancamento);
  }

  function criarPoster(filme) {
    const titulo = escaparHtml(filme.titulo);
    // Se houver imagem, ela cobre o pôster provisório
    const imagem = filme.poster
      ? `<img src="${escaparHtml(filme.poster)}" alt="Pôster de ${titulo}" loading="lazy">`
      : "";

    return `
      <div class="poster">
        <span class="poster__titulo" aria-hidden="true">${titulo}</span>
        <span class="poster__aviso" aria-hidden="true">Pôster em breve</span>
        ${imagem}
      </div>`;
  }

  function criarCartao(filme) {
    const cronologica = estado.ordem === "cronologica";
    const posLancamento = posicaoLancamento.get(filme.id);
    const numero = cronologica ? filme.ordemCronologica : posLancamento;
    const textoNumero = cronologica
      ? "Posição na ordem cronológica: "
      : "Posição na ordem de lançamento: ";
    const ano = filme.dataLancamento.slice(0, 4);

    const observacao = filme.observacao
      ? `<details class="card__obs">
           <summary>Observação</summary>
           <p>${escaparHtml(filme.observacao)}</p>
         </details>`
      : "";

    return `
      <li>
        <article class="card card--filme">
          <span class="card__numero"><span class="sr-only">${textoNumero}</span>${numero}</span>
          ${criarPoster(filme)}
          <div class="card__corpo">
            <h3 class="card__titulo">${escaparHtml(filme.titulo)}</h3>
            <p class="card__meta"><span>${ano}</span><span class="card__fase">Fase ${filme.fase}</span></p>
            <p class="card__sinopse">${escaparHtml(filme.sinopse)}</p>
            ${observacao}
            <p class="card__posicao">
              <span${cronologica ? ' class="is-ativa"' : ""}>Cronologia <strong>nº ${filme.ordemCronologica}</strong></span>
              <span${cronologica ? "" : ' class="is-ativa"'}>Lançamento <strong>nº ${posLancamento}</strong></span>
            </p>
          </div>
        </article>
      </li>`;
  }

  function renderizar() {
    const filmes = obterFilmesVisiveis();

    lista.innerHTML = filmes.map(criarCartao).join("");
    lista.hidden = filmes.length === 0;
    mensagemVazia.hidden = filmes.length > 0;

    contagem.innerHTML =
      "Mostrando <strong>" + filmes.length + "</strong> de " + MOVIES.length + " filmes";
  }

  // Botões de fase: criados a partir dos dados (uma Fase 7 aparece sozinha)
  function criarFiltrosDeFase() {
    const fases = Array.from(new Set(MOVIES.map(function (filme) { return filme.fase; })))
      .sort(function (a, b) { return a - b; });

    const opcoes = [{ valor: "todas", rotulo: "Todas" }].concat(
      fases.map(function (fase) { return { valor: String(fase), rotulo: "Fase " + fase }; })
    );

    containerFases.innerHTML = opcoes
      .map(function (opcao) {
        return `<button type="button" class="chip" data-fase="${opcao.valor}" aria-pressed="false">${opcao.rotulo}</button>`;
      })
      .join("");
  }

  // Deixa os botões com a aparência (e o aria-pressed) do estado atual
  function atualizarBotoes() {
    containerFases.querySelectorAll("[data-fase]").forEach(function (botao) {
      botao.setAttribute("aria-pressed", String(botao.dataset.fase === estado.fase));
    });
    botoesOrdem.forEach(function (botao) {
      botao.setAttribute("aria-pressed", String(botao.dataset.ordem === estado.ordem));
    });
  }

  function limparFiltros() {
    estado.busca = "";
    estado.fase = "todas";
    campoBusca.value = "";
    atualizarBotoes();
    renderizar();
  }

  function iniciar() {
    criarFiltrosDeFase();

    campoBusca.addEventListener("input", function () {
      estado.busca = campoBusca.value;
      renderizar();
    });

    containerFases.addEventListener("click", function (evento) {
      const botao = evento.target.closest("[data-fase]");
      if (!botao) return;
      estado.fase = botao.dataset.fase;
      atualizarBotoes();
      renderizar();
    });

    botoesOrdem.forEach(function (botao) {
      botao.addEventListener("click", function () {
        estado.ordem = botao.dataset.ordem;
        atualizarBotoes();
        renderizar();
      });
    });

    botaoLimpar.addEventListener("click", limparFiltros);

    // Se uma imagem de pôster não carregar, ela some e o pôster provisório reaparece
    lista.addEventListener("error", function (evento) {
      if (evento.target.tagName === "IMG") evento.target.remove();
    }, true);

    atualizarBotoes();
    renderizar();
  }

  iniciar();
})();
