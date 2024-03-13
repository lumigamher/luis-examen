import "./tipoApp.js";
export class nivelDeCalidad extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.clicker();
    }
    render() {
      this.innerHTML = /* html */ `
      <div class="container" id="nivelDeCalidad">
        <div class="title2">
            <span><strong>¿Que nivel de calidad estas buscando?</strong></span>
        </div>
        <div class="boxGrid">
            <div class="containerImage1">
                <img class="img" src="Source/answer-1-1.png" alt="imagen">
                <span class="descripttion">Calidad Optima</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-1-2.png" alt="imagen">
                <span class="descripttion">Buena  relacion calidad/precio</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-1-3.png" alt="imagen">
                <span class="descripttion">No me importa tanto la calidad</span>
            </div>
            </div>
        </div>
    </div>
      `;
    }
    clicker() {
        const home = document.querySelector(".containerImage1");
        home.addEventListener("click", () => {
            console.log("|uyhnjkm");
          const contenedorPrincipal = document.querySelector('main');
          contenedorPrincipal.innerHTML = '<tipo-app></tipo-app>';
        });
      }}
  
    customElements.define('nivel-calidad', nivelDeCalidad);