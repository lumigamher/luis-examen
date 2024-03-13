import "./monetizarApp.js";
export class disenoApp extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.clicker();
    }
    render() {
      this.innerHTML = /* html */ `
      <div class="container" id="diseñoApp">
        <div class="title2">
            <span><strong>¿Que diseño Quieres que tenga?</strong></span>
        </div>
        <div class="boxGrid">
            <div class="containerImage1">
                <img class="img" src="Source/answer-3-1.png" alt="imagen">
                <span class="descripttion">Interfaz Sensilla</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-3-2.png" alt="imagen">
                <span class="descripttion">Interfaz Personalizada</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-3-3.png" alt="imagen">
                <span class="descripttion">Interfaz replica de la Web</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-3-4.png" alt="imagen">
                <span class="descripttion">No necesito diseño</span>
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
          contenedorPrincipal.innerHTML = '<monetizar-app></monetizar-app>';
        });
      }}
  
    customElements.define('diseno-app', disenoApp);