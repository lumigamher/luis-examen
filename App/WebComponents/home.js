import './nivelDeCalidad.js';
export class homeSite extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.clicker();
  }
  render() {
    this.innerHTML = /* html */ `
    <div class="home" id="home">
        <div class="containerImage">
            <img class="imgHome" src="Source/answer-1-1.png" alt="imagen">
        </div>
        <div class="title">
            <span><strong>¿Cuanto cuesta desarrollar mi </strong></span><span class="tcolor"><strong>app GBP?</strong></span>
        </div>
        <span class="description">Calcula de forma rapida el costo para crear tu app, contestando estas sencillas preguntas</span>
        <div>
            <button class="boton" id="botonHome"><strong>EMPEZAR</strong></button>
        </div>
    </div>
    `;
  }
  clicker() {
    const home = document.querySelector(".boton");
    home.addEventListener("click", () => {
      const contenedorPrincipal = document.querySelector('main');
      contenedorPrincipal.innerHTML = '<nivel-calidad></nivel-calidad>';
    });
  }}
  customElements.define('home-element', homeSite);

