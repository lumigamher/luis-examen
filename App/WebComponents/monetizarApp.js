import "./userAutenticacion.js";
export class monetizarApp extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.clicker();
    }
    render() {
      this.innerHTML = /* html */ `
      <div class="container" id="monetizarApp">
        <div class="title2">
            <span><strong>¿Como monetizar tu app?</strong></span>
        </div>
        <div class="boxGrid">
            <div class="containerImage1">
                <img class="img" src="Source/answer-4-1.png" alt="imagen">
                <span class="descripttion">Aplicacion gratuita con puclicidad</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-4-2.png" alt="imagen">
                <span class="descripttion">Aplicacion de pago</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-4-3.png" alt="imagen">
                <span class="descripttion">Compras dentro de la app</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-4-4.png" alt="imagen">
                <span class="descripttion">Otros/ No lo se todavia</span>
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
          contenedorPrincipal.innerHTML = '<user-autenticacion></user-autenticacion>';
        });
      }}
    customElements.define('monetizar-app', monetizarApp);