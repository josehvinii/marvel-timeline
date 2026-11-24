/* ==========================================================
   MARVEL TIMELINE - timeline.js
   Reúne os dados já cadastrados em movies.js e series.js.
   Não altera nem renumera os registros de origem.
   ========================================================== */
(function () {
  "use strict";
  const util = window.MarvelTimeline;
  const lista = document.getElementById("lista-cronologia");
  if (!lista || !util || typeof MOVIES === "undefined" || typeof SERIES === "undefined") return;

  const campoBusca = document.getElementById("busca-cronologia");
  const contagem = document.getElementById("contagem-cronologia");
  const vazio = document.getElementById("vazio-cronologia");
  const botaoLimpar = document.getElementById("limpar-cronologia");
  const botoesOrdem = Array.from(document.querySelectorAll("[data-ordem]"));
  const filtros = {
    tipo: { elemento: document.getElementById("filtro-tipos"), valor: "todos", opcoes: [
      { id: "todos", nome: "Tudo" }, { id: "filme", nome: "Filmes" }, { id: "Temporada", nome: "Temporadas" }, { id: "Especial", nome: "Especiais" }
    ] },
    confianca: { elemento: document.getElementById("filtro-confianca"), valor: "todas", opcoes: [
      { id: "todas", nome: "Todas" }, { id: "oficial", nome: "Oficial" }, { id: "editorial", nome: "Editorial" }, { id: "incerta", nome: "Incerta" }
    ] }
  };
  const estado = { busca: "", ordem: "cronologica" };

  // Os inteiros são a ordem dos filmes já aprovada; os decimais são
  // as posições individuais de temporadas e especiais em series.js.
  const registros = MOVIES.map(function (item) {
    return {
      id: item.id, tipo: "filme", formato: "Filme", titulo: item.titulo,
      original: item.tituloOriginal, data: item.dataLancamento,
      posicao: item.ordemCronologica, poster: item.poster, sinopse: item.sinopse,
      observacao: item.observacao || "", confianca: "oficial", fase: item.fase,
      categoria: "principal", origem: "Cinema"
    };
  }).concat(SERIES.map(function (item) {
    return {
      id: item.id, tipo: item.formato, formato: item.formato, titulo: item.titulo,
      original: item.original, data: item.estreia, posicao: item.posicao,
      poster: item.poster, sinopse: item.sinopse, observacao: item.observacao || "",
      confianca: item.confianca || "incerta", categoria: item.categoria,
      origem: item.origem, temporada: item.temporada, episodios: item.episodios
    };
  }));

  function criarFiltros() {
    Object.keys(filtros).forEach(function (chave) {
      const filtro = filtros[chave];
      filtro.elemento.innerHTML = filtro.opcoes.map(function (opcao) {
        return '<button type="button" class="chip" data-filtro="' + chave + '" data-valor="' + util.escaparHtml(opcao.id) + '" aria-pressed="' + String(filtro.valor === opcao.id) + '">' + util.escaparHtml(opcao.nome) + '</button>';
      }).join("");
    });
  }

  function obterRegistros() {
    const termo = util.normalizarTexto(estado.busca);
    return registros.filter(function (item) {
      const texto = util.normalizarTexto([item.titulo, item.original, item.sinopse, item.temporada, item.origem, item.formato].join(" "));
      const tipoOk = filtros.tipo.valor === "todos" || item.tipo === filtros.tipo.valor;
      const confiancaOk = filtros.confianca.valor === "todas" || item.confianca === filtros.confianca.valor;
      return (!termo || texto.includes(termo)) && tipoOk && confiancaOk;
    }).sort(function (a, b) {
      if (estado.ordem === "lancamento") return a.data.localeCompare(b.data) || a.titulo.localeCompare(b.titulo, "pt-BR");
      return a.posicao - b.posicao || a.data.localeCompare(b.data) || a.titulo.localeCompare(b.titulo, "pt-BR");
    });
  }

  function rotuloConfianca(valor) {
    if (valor === "oficial") return "Ordem dos filmes";
    if (valor === "editorial") return "Posição editorial";
    return "Posição incerta";
  }

  function formatarPosicao(valor) {
    return Number.isInteger(valor) ? String(valor) : valor.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
  }

  function renderizar() {
    const itens = obterRegistros();
    lista.innerHTML = itens.map(function (item) {
      const tipoLabel = item.tipo === "filme" ? "Filme" : item.tipo;
      const detalhe = item.tipo === "filme"
        ? "Fase " + item.fase + " · " + item.data.slice(0, 4)
        : (item.temporada || "Especial") + " · " + (item.episodios === null ? "episódios a confirmar" : item.episodios + (item.episodios === 1 ? " episódio" : " episódios")) + " · " + item.data.slice(0, 4);
      const poster = item.poster ? '<img src="' + util.escaparHtml(item.poster) + '" alt="Pôster de ' + util.escaparHtml(item.titulo) + '" loading="lazy">' : '';
      const observacao = item.observacao ? '<p class="timeline-item__observacao">' + util.escaparHtml(item.observacao) + '</p>' : '';
      const original = item.original && item.original !== item.titulo ? '<p class="timeline-item__original">' + util.escaparHtml(item.original) + '</p>' : '';
      return '<li class="timeline-item"><span class="timeline-item__marcador" aria-hidden="true"></span>' +
        '<article class="timeline-item__cartao"><div class="timeline-item__poster">' + poster + '<span>' + util.escaparHtml(tipoLabel) + '</span></div>' +
        '<div class="timeline-item__conteudo"><div class="timeline-item__topo"><span class="timeline-item__posicao">' + formatarPosicao(item.posicao) + '</span><span class="timeline-item__confianca timeline-item__confianca--' + item.confianca + '">' + rotuloConfianca(item.confianca) + '</span></div>' +
        '<h3>' + util.escaparHtml(item.titulo) + '</h3>' + original +
        '<p class="timeline-item__detalhe">' + util.escaparHtml(detalhe) + ' · ' + util.escaparHtml(item.origem) + '</p>' +
        '<p class="timeline-item__sinopse">' + util.escaparHtml(item.sinopse || "Sinopse ainda não cadastrada.") + '</p>' + observacao +
        (item.categoria === "debatida" ? '<span class="timeline-item__alerta">Realidades alternativas — fora da sequência linear principal</span>' : '') +
        '</div></article></li>';
    }).join("");
    contagem.textContent = itens.length + (itens.length === 1 ? " produção encontrada" : " produções encontradas");
    vazio.hidden = itens.length !== 0;
    lista.hidden = itens.length === 0;
  }

  function atualizarBotoes() {
    Object.keys(filtros).forEach(function (chave) {
      filtros[chave].elemento.querySelectorAll("[data-filtro]").forEach(function (botao) {
        botao.setAttribute("aria-pressed", String(botao.dataset.valor === filtros[chave].valor));
      });
    });
    botoesOrdem.forEach(function (botao) {
      const ativo = botao.dataset.ordem === estado.ordem;
      botao.classList.toggle("is-active", ativo);
      botao.setAttribute("aria-pressed", String(ativo));
    });
  }

  function limparFiltros() {
    estado.busca = "";
    campoBusca.value = "";
    Object.keys(filtros).forEach(function (chave) { filtros[chave].valor = chave === "tipo" ? "todos" : "todas"; });
    estado.ordem = "cronologica";
    atualizarBotoes();
    renderizar();
  }

  criarFiltros();
  Object.keys(filtros).forEach(function (chave) {
    filtros[chave].elemento.addEventListener("click", function (evento) {
      const botao = evento.target.closest("[data-filtro]");
      if (!botao) return;
      filtros[chave].valor = botao.dataset.valor;
      atualizarBotoes();
      renderizar();
    });
  });
  campoBusca.addEventListener("input", function () { estado.busca = campoBusca.value; renderizar(); });
  botoesOrdem.forEach(function (botao) { botao.addEventListener("click", function () { estado.ordem = botao.dataset.ordem; atualizarBotoes(); renderizar(); }); });
  botaoLimpar.addEventListener("click", limparFiltros);
  lista.addEventListener("error", function (evento) { if (evento.target.tagName === "IMG") evento.target.remove(); }, true);
  atualizarBotoes();
  renderizar();
})();
