/* ==========================================================
   MARVEL TIMELINE - series.js
   Cada registro representa uma temporada ou um especial.
   A posição cronológica é editorial e independente dos
   números dos filmes; será usada na futura cronologia geral.
   ========================================================== */

const SERIES = [
  // Marvel Studios - live-action
  { id:"wandavision-t1", titulo:"WandaVision", original:"WandaVision", temporada:"Temporada 1", formato:"Temporada", ano:2021, estreia:"2021-01-15", categoria:"principal", origem:"Disney+", episodios:9, posicao:23.02, confianca:"editorial", poster:"assets/images/series/wandavision-t1.jpg", sinopse:"Wanda Maximoff e Visão vivem uma realidade suburbana aparentemente perfeita, cuja natureza começa a revelar mistérios.", observacao:"A história se passa após Vingadores: Ultimato. A posição exata em relação a outras produções do período é uma organização editorial." },
  { id:"falcao-soldado-invernal-t1", titulo:"Falcão e o Soldado Invernal", original:"The Falcon and the Winter Soldier", temporada:"Temporada 1", formato:"Temporada", ano:2021, estreia:"2021-03-19", categoria:"principal", origem:"Disney+", episodios:6, posicao:23.03, confianca:"editorial", poster:"assets/images/series/falcao-soldado-invernal-t1.jpg", sinopse:"Sam Wilson e Bucky Barnes enfrentam as consequências de um mundo transformado após o retorno de metade da população.", observacao:"Acontece depois de Ultimato. A colocação precisa em relação a WandaVision é editorial." },
  { id:"loki-t1", titulo:"Loki", original:"Loki", temporada:"Temporada 1", formato:"Temporada", ano:2021, estreia:"2021-06-09", categoria:"principal", origem:"Disney+", episodios:6, posicao:23.01, confianca:"editorial", poster:"assets/images/series/loki-t1.jpg", sinopse:"Uma versão de Loki escapa durante os eventos de Ultimato e é capturada pela Autoridade de Variância Temporal.", observacao:"A narrativa envolve ramificações temporais e não se encaixa como uma sequência linear convencional." },
  { id:"loki-t2", titulo:"Loki", original:"Loki", temporada:"Temporada 2", formato:"Temporada", ano:2023, estreia:"2023-10-05", categoria:"principal", origem:"Disney+", episodios:6, posicao:28.04, confianca:"editorial", poster:"assets/images/series/loki-t2.jpg", sinopse:"Loki e seus aliados tentam compreender as consequências de uma crise que ameaça a própria existência da Linha do Tempo." , observacao:"A segunda temporada continua diretamente a primeira e envolve múltiplas linhas temporais." },
  { id:"gavia-arqueiro-t1", titulo:"Gavião Arqueiro", original:"Hawkeye", temporada:"Temporada 1", formato:"Temporada", ano:2021, estreia:"2021-11-24", categoria:"principal", origem:"Disney+", episodios:6, posicao:24.01, confianca:"editorial", poster:"assets/images/series/gavia-arqueiro-t1.jpg", sinopse:"Durante as festas de fim de ano em Nova York, Clint Barton se alia à jovem arqueira Kate Bishop e encara consequências de seu passado.", observacao:"Ambientada no período natalino posterior a Ultimato." },
  { id:"cavaleiro-lua-t1", titulo:"Cavaleiro da Lua", original:"Moon Knight", temporada:"Temporada 1", formato:"Temporada", ano:2022, estreia:"2022-03-30", categoria:"principal", origem:"Disney+", episodios:6, posicao:25.01, confianca:"incerta", poster:"assets/images/series/cavaleiro-lua-t1.jpg", sinopse:"Marc Spector, um homem com identidades distintas, é envolvido em um conflito ligado a deuses egípcios.", observacao:"A posição exata na cronologia não é estabelecida de forma inequívoca; colocação editorial." },
  { id:"ms-marvel-t1", titulo:"Ms. Marvel", original:"Ms. Marvel", temporada:"Temporada 1", formato:"Temporada", ano:2022, estreia:"2022-06-08", categoria:"principal", origem:"Disney+", episodios:6, posicao:26.01, confianca:"editorial", poster:"assets/images/series/ms-marvel-t1.jpg", sinopse:"Kamala Khan, uma adolescente fã de super-heróis, descobre poderes extraordinários e passa a trilhar seu próprio caminho.", observacao:"A temporada prepara elementos retomados em As Marvels." },
  { id:"mulher-hulk-t1", titulo:"Mulher-Hulk: Defensora de Heróis", original:"She-Hulk: Attorney at Law", temporada:"Temporada 1", formato:"Temporada", ano:2022, estreia:"2022-08-18", categoria:"principal", origem:"Disney+", episodios:9, posicao:26.02, confianca:"editorial", poster:"assets/images/series/mulher-hulk-t1.jpg", sinopse:"A advogada Jennifer Walters precisa equilibrar sua carreira jurídica com a vida como uma super-heroína de grande porte.", observacao:"A posição relativa a outras produções do mesmo período é editorial." },
  { id:"invasao-secreta-t1", titulo:"Invasão Secreta", original:"Secret Invasion", temporada:"Temporada 1", formato:"Temporada", ano:2023, estreia:"2023-06-21", categoria:"principal", origem:"Disney+", episodios:6, posicao:28.01, confianca:"editorial", poster:"assets/images/series/invasao-secreta-t1.jpg", sinopse:"Nick Fury retorna à Terra para enfrentar uma conspiração skrull que ameaça a segurança global.", observacao:"A série se situa após os eventos de Vingadores: Ultimato; a posição exata é editorial." },
  { id:"eco-t1", titulo:"Eco", original:"Echo", temporada:"Temporada 1", formato:"Temporada", ano:2024, estreia:"2024-01-09", categoria:"principal", origem:"Disney+", episodios:5, posicao:28.02, confianca:"editorial", poster:"assets/images/series/eco-t1.jpg", sinopse:"Maya Lopez retorna à sua cidade natal e confronta o passado, os laços familiares e o legado de Wilson Fisk.", observacao:"Continua elementos apresentados em Gavião Arqueiro." },
  { id:"agatha-t1", titulo:"Agatha Desde Sempre", original:"Agatha All Along", temporada:"Temporada 1", formato:"Temporada", ano:2024, estreia:"2024-09-18", categoria:"principal", origem:"Disney+", episodios:9, posicao:29.01, confianca:"editorial", poster:"assets/images/series/agatha-t1.jpg", sinopse:"Após perder seus poderes, Agatha Harkness reúne um coven e percorre a misteriosa Estrada das Bruxas.", observacao:"Continuação de acontecimentos de WandaVision." },
  { id:"coracao-ferro-t1", titulo:"Coração de Ferro", original:"Ironheart", temporada:"Temporada 1", formato:"Temporada", ano:2025, estreia:"2025-06-24", categoria:"principal", origem:"Disney+", episodios:6, posicao:31.01, confianca:"editorial", poster:"assets/images/series/coracao-ferro-t1.jpg", sinopse:"A jovem inventora Riri Williams retorna a Chicago e busca construir seu próprio legado tecnológico.", observacao:"A história parte de acontecimentos apresentados em Pantera Negra: Wakanda Para Sempre." },
  { id:"wonder-man-t1", titulo:"Wonder Man", original:"Wonder Man", temporada:"Temporada 1", formato:"Temporada", ano:2026, estreia:"2026-01-27", categoria:"principal", origem:"Disney+", episodios:8, posicao:34.01, confianca:"incerta", poster:"assets/images/series/wonder-man-t1.jpg", sinopse:"O aspirante a ator Simon Williams tenta conquistar um papel em Hollywood enquanto sua vida cruza o caminho de Trevor Slattery.", observacao:"A posição exata na cronologia ainda deve ser tratada como editorial." },
  { id:"demolidor-renascido-t1", titulo:"Demolidor: Renascido", original:"Daredevil: Born Again", temporada:"Temporada 1", formato:"Temporada", ano:2025, estreia:"2025-03-04", categoria:"principal", origem:"Disney+", episodios:9, posicao:32.01, confianca:"editorial", poster:"assets/images/series/demolidor-renascido-t1.jpg", sinopse:"Matt Murdock tenta reconstruir sua vida como advogado, enquanto Wilson Fisk avança em sua própria trajetória política.", observacao:"Continua a história dos personagens da série Demolidor. Sua integração é reconhecida pelo projeto, mas a posição detalhada é editorial." },
  { id:"demolidor-renascido-t2", titulo:"Demolidor: Renascido", original:"Daredevil: Born Again", temporada:"Temporada 2", formato:"Temporada", ano:2026, estreia:"2026-03-24", categoria:"principal", origem:"Disney+", episodios:null, posicao:35.01, confianca:"incerta", poster:"assets/images/series/demolidor-renascido-t2.jpg", sinopse:"A segunda temporada continua o confronto entre Matt Murdock e Wilson Fisk em Nova York.", observacao:"Quantidade de episódios e posição cronológica devem ser confirmadas em fonte oficial antes da publicação definitiva." },
  { id:"visionquest-t1", titulo:"VisionQuest", original:"VisionQuest", temporada:"Temporada 1", formato:"Temporada", ano:2026, estreia:"2026-10-14", categoria:"principal", origem:"Disney+", episodios:8, posicao:36.01, confianca:"incerta", poster:"assets/images/series/visionquest-t1.jpg", sinopse:"A história acompanha Visão em uma nova jornada ligada à sua identidade e às memórias que carrega.", observacao:"Temporada concluída em novembro de 2026. A posição exata na cronologia ainda precisa de confirmação." },

  // Marvel Television / Defenders Saga - temporadas separadas
  { id:"demolidor-t1", titulo:"Demolidor", original:"Daredevil", temporada:"Temporada 1", formato:"Temporada", ano:2015, estreia:"2015-04-10", categoria:"integrada", origem:"Netflix", episodios:13, posicao:17.01, confianca:"editorial", poster:"assets/images/series/demolidor-t1.jpg", sinopse:"Matt Murdock atua como advogado durante o dia e vigilante à noite, enfrentando o crime organizado de Hell's Kitchen.", observacao:"A temporada é apresentada separadamente para permitir a integração da Saga Defensores à cronologia." },
  { id:"demolidor-t2", titulo:"Demolidor", original:"Daredevil", temporada:"Temporada 2", formato:"Temporada", ano:2016, estreia:"2016-03-18", categoria:"integrada", origem:"Netflix", episodios:13, posicao:19.01, confianca:"editorial", poster:"assets/images/series/demolidor-t2.jpg", sinopse:"Matt enfrenta novas ameaças, incluindo o Justiceiro e o retorno de Elektra.", observacao:"Posição editorial baseada na sequência narrativa e de lançamento da Saga Defensores." },
  { id:"demolidor-t3", titulo:"Demolidor", original:"Daredevil", temporada:"Temporada 3", formato:"Temporada", ano:2018, estreia:"2018-10-19", categoria:"integrada", origem:"Netflix", episodios:13, posicao:23.04, confianca:"editorial", poster:"assets/images/series/demolidor-t3.jpg", sinopse:"Após uma crise pessoal, Matt Murdock retorna ao conflito com Wilson Fisk.", observacao:"A colocação em relação a outras séries da Saga Defensores é editorial." },
  { id:"jessica-jones-t1", titulo:"Jessica Jones", original:"Jessica Jones", temporada:"Temporada 1", formato:"Temporada", ano:2015, estreia:"2015-11-20", categoria:"integrada", origem:"Netflix", episodios:13, posicao:18.01, confianca:"editorial", poster:"assets/images/series/jessica-jones-t1.jpg", sinopse:"A investigadora particular Jessica Jones tenta reconstruir sua vida enquanto encara um trauma do passado." },
  { id:"jessica-jones-t2", titulo:"Jessica Jones", original:"Jessica Jones", temporada:"Temporada 2", formato:"Temporada", ano:2018, estreia:"2018-03-08", categoria:"integrada", origem:"Netflix", episodios:13, posicao:22.01, confianca:"editorial", poster:"assets/images/series/jessica-jones-t2.jpg", sinopse:"Jessica investiga a origem de seus poderes e os segredos de sua família." },
  { id:"jessica-jones-t3", titulo:"Jessica Jones", original:"Jessica Jones", temporada:"Temporada 3", formato:"Temporada", ano:2019, estreia:"2019-06-14", categoria:"integrada", origem:"Netflix", episodios:13, posicao:24.02, confianca:"editorial", poster:"assets/images/series/jessica-jones-t3.jpg", sinopse:"Jessica enfrenta um novo adversário enquanto tenta proteger pessoas próximas." },
  { id:"luke-cage-t1", titulo:"Luke Cage", original:"Luke Cage", temporada:"Temporada 1", formato:"Temporada", ano:2016, estreia:"2016-09-30", categoria:"integrada", origem:"Netflix", episodios:13, posicao:20.01, confianca:"editorial", poster:"assets/images/series/luke-cage-t1.jpg", sinopse:"Com pele indestrutível, Luke Cage tenta proteger o Harlem e lidar com o próprio passado." },
  { id:"luke-cage-t2", titulo:"Luke Cage", original:"Luke Cage", temporada:"Temporada 2", formato:"Temporada", ano:2018, estreia:"2018-06-22", categoria:"integrada", origem:"Netflix", episodios:13, posicao:22.02, confianca:"editorial", poster:"assets/images/series/luke-cage-t2.jpg", sinopse:"Luke enfrenta novos desafios ao se tornar uma figura central no Harlem." },
  { id:"punho-de-ferro-t1", titulo:"Punho de Ferro", original:"Iron Fist", temporada:"Temporada 1", formato:"Temporada", ano:2017, estreia:"2017-03-17", categoria:"integrada", origem:"Netflix", episodios:13, posicao:21.01, confianca:"editorial", poster:"assets/images/series/punho-de-ferro-t1.jpg", sinopse:"Danny Rand retorna a Nova York após anos desaparecido, dominando uma força mística conhecida como Punho de Ferro." },
  { id:"punho-de-ferro-t2", titulo:"Punho de Ferro", original:"Iron Fist", temporada:"Temporada 2", formato:"Temporada", ano:2018, estreia:"2018-09-07", categoria:"integrada", origem:"Netflix", episodios:10, posicao:23.05, confianca:"editorial", poster:"assets/images/series/punho-de-ferro-t2.jpg", sinopse:"Danny continua sua missão de proteger Nova York e enfrenta disputas ligadas ao legado do Punho de Ferro." },
  { id:"defensores-t1", titulo:"Os Defensores", original:"The Defenders", temporada:"Minissérie", formato:"Temporada", ano:2017, estreia:"2017-08-18", categoria:"integrada", origem:"Netflix", episodios:8, posicao:21.02, confianca:"editorial", poster:"assets/images/series/defensores-t1.jpg", sinopse:"Demolidor, Jessica Jones, Luke Cage e Punho de Ferro precisam unir forças contra uma ameaça comum." },
  { id:"justiceiro-t1", titulo:"O Justiceiro", original:"The Punisher", temporada:"Temporada 1", formato:"Temporada", ano:2017, estreia:"2017-11-17", categoria:"integrada", origem:"Netflix", episodios:13, posicao:21.03, confianca:"editorial", poster:"assets/images/series/justiceiro-t1.jpg", sinopse:"Frank Castle busca justiça por sua família e acaba envolvido em uma conspiração maior." },
  { id:"justiceiro-t2", titulo:"O Justiceiro", original:"The Punisher", temporada:"Temporada 2", formato:"Temporada", ano:2019, estreia:"2019-01-18", categoria:"integrada", origem:"Netflix", episodios:13, posicao:23.06, confianca:"editorial", poster:"assets/images/series/justiceiro-t2.jpg", sinopse:"Frank tenta seguir em frente, mas é atraído novamente para a violência ao proteger uma jovem em perigo." },

  // Animações e multiverso
  { id:"olhos-wakanda-t1", titulo:"Olhos de Wakanda", original:"Eyes of Wakanda", temporada:"Temporada 1", formato:"Temporada", ano:2025, estreia:"2025-08-01", categoria:"principal", origem:"Disney+", episodios:4, posicao:1.01, confianca:"editorial", poster:"assets/images/series/olhos-wakanda-t1.jpg", sinopse:"Ao longo da história de Wakanda, guerreiros Hatut Zaraze viajam pelo mundo para recuperar artefatos de vibranium.", observacao:"A série percorre diferentes períodos históricos; uma única posição na cronologia é uma simplificação editorial." },
  { id:"i-am-groot-t1", titulo:"Eu Sou Groot", original:"I Am Groot", temporada:"Temporada 1", formato:"Temporada", ano:2022, estreia:"2022-08-10", categoria:"principal", origem:"Disney+", episodios:5, posicao:11.01, confianca:"editorial", poster:"assets/images/series/i-am-groot-t1.jpg", sinopse:"Curtas animados acompanham as pequenas aventuras de Groot em diferentes momentos de sua infância." },
  { id:"i-am-groot-t2", titulo:"Eu Sou Groot", original:"I Am Groot", temporada:"Temporada 2", formato:"Temporada", ano:2023, estreia:"2023-09-06", categoria:"principal", origem:"Disney+", episodios:5, posicao:12.01, confianca:"editorial", poster:"assets/images/series/i-am-groot-t2.jpg", sinopse:"Groot continua suas aventuras em uma nova coleção de curtas animados." },
  { id:"what-if-t1", titulo:"What If...?", original:"What If...?", temporada:"Temporada 1", formato:"Temporada", ano:2021, estreia:"2021-08-11", categoria:"debatida", origem:"Disney+", episodios:9, posicao:23.07, confianca:"incerta", poster:"assets/images/series/what-if-t1.jpg", sinopse:"O Vigia apresenta histórias que imaginam realidades alternativas a partir de decisões diferentes no multiverso.", observacao:"Categoria debatida: a série explora universos alternativos e não integra a sequência linear da Linha do Tempo Sagrada." },
  { id:"what-if-t2", titulo:"What If...?", original:"What If...?", temporada:"Temporada 2", formato:"Temporada", ano:2023, estreia:"2023-12-22", categoria:"debatida", origem:"Disney+", episodios:9, posicao:28.03, confianca:"incerta", poster:"assets/images/series/what-if-t2.jpg", sinopse:"Novas possibilidades do multiverso são exploradas em histórias alternativas do MCU.", observacao:"Categoria debatida: realidades alternativas." },
  { id:"what-if-t3", titulo:"What If...?", original:"What If...?", temporada:"Temporada 3", formato:"Temporada", ano:2024, estreia:"2024-12-22", categoria:"debatida", origem:"Disney+", episodios:8, posicao:30.01, confianca:"incerta", poster:"assets/images/series/what-if-t3.jpg", sinopse:"A terceira temporada encerra a antologia com novas histórias do multiverso.", observacao:"Categoria debatida: realidades alternativas." },

  // Especiais
  { id:"lobisomem-noite", titulo:"Lobisomem na Noite", original:"Werewolf by Night", temporada:"Especial", formato:"Especial", ano:2022, estreia:"2022-10-07", categoria:"principal", origem:"Disney+", episodios:1, posicao:26.03, confianca:"incerta", poster:"assets/images/series/lobisomem-noite.jpg", sinopse:"Um grupo de caçadores de monstros participa de uma competição mortal após a morte de seu líder.", observacao:"Especial de apresentação independente; sua posição exata é pouco definida." },
  { id:"especial-guardioes", titulo:"Especial de Fim de Ano dos Guardiões", original:"The Guardians of the Galaxy Holiday Special", temporada:"Especial", formato:"Especial", ano:2022, estreia:"2022-11-25", categoria:"principal", origem:"Disney+", episodios:1, posicao:27.01, confianca:"editorial", poster:"assets/images/series/especial-guardioes.jpg", sinopse:"Mantis e Drax viajam à Terra para preparar uma surpresa de Natal para Peter Quill.", observacao:"Acontece após Thor: Amor e Trovão e antes de Guardiões da Galáxia Vol. 3." },
  { id:"punisher-one-last-kill", titulo:"The Punisher: One Last Kill", original:"The Punisher: One Last Kill", temporada:"Especial", formato:"Especial", ano:2026, estreia:"2026-05-12", categoria:"integrada", origem:"Disney+", episodios:1, posicao:35.02, confianca:"incerta", poster:"assets/images/series/punisher-one-last-kill.jpg", sinopse:"Especial centrado em Frank Castle, expandindo a trajetória do personagem no universo Marvel.", observacao:"A posição cronológica detalhada ainda precisa de confirmação." }
];

(function () {
  "use strict";
  const util = window.MarvelTimeline;
  const lista = document.getElementById("catalogo-series");
  if (!lista || !util) return;

  const campoBusca = document.getElementById("busca-serie");
  const contagem = document.getElementById("contagem-series");
  const vazio = document.getElementById("vazio-series");
  const botaoLimpar = document.getElementById("limpar-filtros-series");
  const botoesOrdem = Array.from(document.querySelectorAll("[data-ordem]"));
  const filtros = {
    categoria: { elemento: document.getElementById("filtro-categorias"), valor: "todas", opcoes: [{id:"todas", nome:"Todas"},{id:"principal", nome:"Continuidade principal"},{id:"integrada", nome:"Integrada ao MCU"},{id:"debatida", nome:"Debatida"}] },
    formato: { elemento: document.getElementById("filtro-formatos"), valor: "todos", opcoes: [{id:"todos", nome:"Todos"},{id:"Temporada", nome:"Temporadas"},{id:"Especial", nome:"Especiais"}] },
    origem: { elemento: document.getElementById("filtro-plataformas"), valor: "todas", opcoes: [{id:"todas", nome:"Todas"},{id:"Disney+", nome:"Disney+"},{id:"Netflix", nome:"Netflix"}] }
  };
  const estado = { busca: "", ordem: "cronologica" };

  function criarBotoes() {
    Object.keys(filtros).forEach(function (chave) {
      const filtro = filtros[chave];
      filtro.elemento.innerHTML = filtro.opcoes.map(function (opcao) {
        return '<button type="button" class="chip" data-filtro="' + chave + '" data-valor="' + util.escaparHtml(opcao.id) + '" aria-pressed="' + String(filtro.valor === opcao.id) + '">' + util.escaparHtml(opcao.nome) + '</button>';
      }).join("");
    });
  }

  function obterRegistros() {
    const termo = util.normalizarTexto(estado.busca);
    return SERIES.filter(function (item) {
      const texto = util.normalizarTexto([item.titulo, item.original, item.temporada, item.sinopse, item.origem].join(" "));
      return (!termo || texto.includes(termo)) &&
        (filtros.categoria.valor === "todas" || item.categoria === filtros.categoria.valor) &&
        (filtros.formato.valor === "todos" || item.formato === filtros.formato.valor) &&
        (filtros.origem.valor === "todas" || item.origem === filtros.origem.valor);
    }).sort(function (a, b) {
      if (estado.ordem === "lancamento") return a.estreia.localeCompare(b.estreia) || a.titulo.localeCompare(b.titulo, "pt-BR");
      return a.posicao - b.posicao || a.estreia.localeCompare(b.estreia);
    });
  }

  function rotuloCategoria(categoria) {
    return categoria === "principal" ? "Continuidade principal" : categoria === "integrada" ? "Integrada ao MCU" : "Debatida";
  }

  function renderizar() {
    const itens = obterRegistros();
    lista.innerHTML = itens.map(function (item) {
      const confianca = item.confianca === "editorial" ? "Posição editorial" : item.confianca === "incerta" ? "Posição incerta" : "Posição oficial";
      const episodios = item.episodios === null ? "Episódios: a confirmar" : item.episodios === 1 && item.formato === "Especial" ? "1 especial" : item.episodios + " episódios";
      const posicao = Number.isInteger(item.posicao) ? item.posicao : item.posicao.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
      return '<li><article class="card card--filme card--serie">' +
        '<div class="poster poster--serie' + (item.poster ? ' poster--serie-com-imagem' : '') + '">' + (item.poster ? '<img src="' + util.escaparHtml(item.poster) + '" alt="Pôster de ' + util.escaparHtml(item.titulo) + '" loading="lazy">' : '') +
        '<span class="card__numero">' + posicao + '</span><span class="poster__titulo">' + util.escaparHtml(item.titulo) + '</span><span class="poster__aviso">Pôster em breve</span></div>' +
        '<div class="card__corpo"><div class="serie__selos"><span class="serie__selo">' + util.escaparHtml(rotuloCategoria(item.categoria)) + '</span><span class="serie__selo serie__selo--formato">' + util.escaparHtml(item.formato) + '</span></div>' +
        '<h2 class="card__titulo">' + util.escaparHtml(item.titulo) + '</h2>' +
        '<p class="serie__original">' + util.escaparHtml(item.original) + ' · ' + util.escaparHtml(item.temporada) + '</p>' +
        '<p class="card__meta"><span>' + item.ano + '</span><span>' + util.escaparHtml(item.origem) + '</span></p>' +
        '<p class="serie__episodios">' + episodios + '</p>' +
        '<p class="card__sinopse">' + util.escaparHtml(item.sinopse) + '</p>' +
        '<p class="serie__confianca">' + confianca + '</p>' +
        (item.observacao ? '<details class="card__obs"><summary>Observação</summary><p>' + util.escaparHtml(item.observacao) + '</p></details>' : '') +
        '</div></article></li>';
    }).join("");
    contagem.innerHTML = '<strong>' + itens.length + '</strong> ' + (itens.length === 1 ? 'registro encontrado' : 'registros encontrados');
    vazio.hidden = itens.length !== 0;
    lista.hidden = itens.length === 0;
  }

  function atualizarBotoes() {
    Object.keys(filtros).forEach(function (chave) {
      const filtro = filtros[chave];
      filtro.elemento.querySelectorAll("[data-filtro]").forEach(function (botao) {
        botao.setAttribute("aria-pressed", String(botao.dataset.valor === filtro.valor));
      });
    });
    botoesOrdem.forEach(function (botao) { botao.setAttribute("aria-pressed", String(botao.dataset.ordem === estado.ordem)); });
  }

  function limparFiltros() {
    estado.busca = "";
    campoBusca.value = "";
    Object.keys(filtros).forEach(function (chave) { filtros[chave].valor = chave === "formato" ? "todos" : "todas"; });
    estado.ordem = "cronologica";
    atualizarBotoes();
    renderizar();
  }

  criarBotoes();
  campoBusca.addEventListener("input", function () { estado.busca = campoBusca.value; renderizar(); });
  Object.keys(filtros).forEach(function (chave) {
    filtros[chave].elemento.addEventListener("click", function (evento) {
      const botao = evento.target.closest("[data-filtro]");
      if (!botao) return;
      filtros[chave].valor = botao.dataset.valor;
      atualizarBotoes();
      renderizar();
    });
  });
  botoesOrdem.forEach(function (botao) { botao.addEventListener("click", function () { estado.ordem = botao.dataset.ordem; atualizarBotoes(); renderizar(); }); });
  botaoLimpar.addEventListener("click", limparFiltros);
  lista.addEventListener("error", function (evento) {
    if (evento.target.tagName !== "IMG") return;
    const poster = evento.target.closest(".poster--serie");
    evento.target.remove();
    if (poster) poster.classList.remove("poster--serie-com-imagem");
  }, true);
  atualizarBotoes();
  renderizar();
})();
