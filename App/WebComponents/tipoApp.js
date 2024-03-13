
export class tipoApp extends HTMLElement {
    constructor() {
      super();
      this.render();
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
    }}
  
    customElements.define('tipo-app', tipoApp);