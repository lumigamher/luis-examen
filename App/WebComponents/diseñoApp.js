
export class diseñoApp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = /* html */ `
      <div class="container" id="diseñoApp">
        <div class="title2">
            <span><strong>¿Que diseño desea que tenga la app?</strong></span>
        </div>
        <div class="boxGrid">
            <div class="containerImage1">
                <img class="img" src="Source/answer-3-1.png" alt="imagen">
                <span class="descripttion">Interfaz sencilla</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-3-2.png" alt="imagen">
                <span class="descripttion">Interfaz ersonalizada</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-3-3.png" alt="imagen">
                <span class="descripttion">Interfaz replicada de la web</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-3-4.png" alt="imagen">
                <span class="descripttion">No nesecito diseño</span>
            </div>
            </div>
        </div>
    </div>
      `;
    }}
  
    customElements.define('diseno-app', diseñoApp);