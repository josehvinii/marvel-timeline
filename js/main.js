/* ==========================================================
   MARVEL TIMELINE - main.js
   Funcionalidades gerais: cabeçalho, rodapé, menu e navegação
   ========================================================== */

(function () {
  "use strict";

  // Lista única de páginas: para adicionar uma página ao menu,
  // basta incluir uma linha aqui.
  const PAGINAS = [
    { arquivo: "index.html", rotulo: "Início" },
    { arquivo: "filmes.html", rotulo: "Filmes" },
    { arquivo: "series.html", rotulo: "Séries" },
    { arquivo: "cronologia.html", rotulo: "Cronologia" },
    { arquivo: "iniciante.html", rotulo: "Iniciante" },
    { arquivo: "creditos.html", rotulo: "Créditos" },
  ];

  const LOGO = `
    <a class="logo" href="index.html" aria-label="Marvel Timeline, página inicial">
      <span class="logo__marca" aria-hidden="true"></span>
      <span class="logo__texto">Marvel <strong>Timeline</strong></span>
    </a>`;

  // Descobre qual página está aberta (ex.: "filmes.html")
  function obterPaginaAtual() {
    const ultimoTrecho = window.location.pathname.split("/").pop();
    if (!ultimoTrecho) return "index.html";
    return ultimoTrecho.includes(".") ? ultimoTrecho : ultimoTrecho + ".html";
  }

  // Gera os <li><a> do menu, marcando a página atual
  function montarLinks(paginaAtual) {
    return PAGINAS.map(function (pagina) {
      const atual = pagina.arquivo === paginaAtual ? ' aria-current="page"' : "";
      return '<li><a href="' + pagina.arquivo + '"' + atual + ">" + pagina.rotulo + "</a></li>";
    }).join("");
  }

  function inserirCabecalho(paginaAtual) {
    const alvo = document.getElementById("site-header");
    if (!alvo) return;

    alvo.innerHTML = `
      <header class="site-header">
        <div class="container site-header__interno">
          ${LOGO}
          <button class="menu-toggle" type="button"
                  aria-expanded="false" aria-controls="menu-principal" aria-label="Abrir menu">
            <span></span><span></span><span></span>
          </button>
          <nav class="menu" id="menu-principal" aria-label="Navegação principal">
            <ul>${montarLinks(paginaAtual)}</ul>
          </nav>
        </div>
      </header>`;
  }

  function inserirRodape(paginaAtual) {
    const alvo = document.getElementById("site-footer");
    if (!alvo) return;

    const ano = new Date().getFullYear();

    alvo.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="site-footer__topo">
            <div class="site-footer__marca">
              ${LOGO}
              <p>Guia independente para quem quer começar a acompanhar o Universo
                 Cinematográfico Marvel, com filmes e séries organizados em ordem
                 cronológica e de lançamento.</p>
            </div>
            <nav aria-label="Navegação do rodapé">
              <h2 class="site-footer__titulo">Navegar</h2>
              <ul>${montarLinks(paginaAtual)}</ul>
            </nav>
          </div>
          <div class="site-footer__base">
            <p>© ${ano} Marvel Timeline. Projeto independente e informativo.</p>
            <p>Marvel, Marvel Studios e os personagens citados são marcas de seus
               respectivos titulares. Este site não possui vínculo com a Marvel ou a Disney.</p>
          </div>
        </div>
      </footer>`;
  }

  // Menu compacto (celular): abrir, fechar e acessibilidade
  function iniciarMenuMobile() {
    const botao = document.querySelector(".menu-toggle");
    const menu = document.getElementById("menu-principal");
    if (!botao || !menu) return;

    function definirEstado(aberto) {
      menu.classList.toggle("is-open", aberto);
      botao.setAttribute("aria-expanded", String(aberto));
      botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    }

    botao.addEventListener("click", function () {
      definirEstado(!menu.classList.contains("is-open"));
    });

    // Fecha ao clicar em um link
    menu.addEventListener("click", function (evento) {
      if (evento.target.closest("a")) definirEstado(false);
    });

    // Fecha com a tecla Esc
    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape") definirEstado(false);
    });

    // Fecha se a tela voltar a ser larga (desktop)
    window.matchMedia("(min-width: 861px)").addEventListener("change", function () {
      definirEstado(false);
    });
  }

  // Funções auxiliares usadas por movies.js, series.js e timeline.js.
  // Ficam aqui para não repetir o mesmo código em cada arquivo.

  // Deixa o texto em minúsculas, sem acentos e sem pontuação.
  // Assim "homem aranha" encontra "Homem-Aranha" e "capita" encontra "Capitã".
  function normalizarTexto(texto) {
    return String(texto)
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  // Impede que caracteres como < e " quebrem o HTML gerado por JavaScript
  function escaparHtml(texto) {
    const trocas = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return String(texto).replace(/[&<>"']/g, function (caractere) {
      return trocas[caractere];
    });
  }

  window.MarvelTimeline = { normalizarTexto: normalizarTexto, escaparHtml: escaparHtml };

  // Inicialização (o atributo "defer" garante que o HTML já foi carregado)
  const paginaAtual = obterPaginaAtual();
  inserirCabecalho(paginaAtual);
  inserirRodape(paginaAtual);
  iniciarMenuMobile();
})();
