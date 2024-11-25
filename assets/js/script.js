function abrirProjeto(elemento) {
    const url = elemento.getAttribute("data-url");
    window.location.href = url;
}
