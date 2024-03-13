import "./diseñoApp.js";
export class tipoApp extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.clicker();
    }
    render() {
      this.innerHTML = /* html */ `
      <div class="container" id="tipoApp">
        <div class="title2">
            <span><strong>¿Que tipo de app nesecitas?</strong></span>
        </div>
        <div class="boxGrid">
            <div class="containerImage1">
                <img class="img" src="Source/answer-2-1.png" alt="imagen">
                <span class="descripttion">Aplicacion Android</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-2-2.png" alt="imagen">
                <span class="descripttion">Aplicacion IOS</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-2-3.png" alt="imagen">
                <span class="descripttion">Aplicacion Windows Phone</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-2-4.png" alt="imagen">
                <span class="descripttion">Aplicacion Android + IOS</span>
            </div>
            </div>
        </div>
    </div>
      `;
    }
    clicker() {
        const home = document.querySelector(".boxGrid");
        home.addEventListener("click", () => {
          const contenedorPrincipal = document.querySelector('main');
          contenedorPrincipal.innerHTML = '<diseno-app></diseno-app>';
        });
      }
}
    
    customElements.define('tipo-app', tipoApp);