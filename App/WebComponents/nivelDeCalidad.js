
export class nivelDeCalidad extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = /* html */ `
      <div class="nivelDeCalidad" id="nivelDeCalidad">
        <div class="title2">
            <span><strong>¿Que nivel de calidad estas buscando?</strong></span>
        </div>
        <div class="boxGrid">
            <div class="containerImage1">
                <img class="img" src="Source/answer-1-1.png" alt="imagen">
                <span class="descripttion">Calidad Optima</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-1-1.png" alt="imagen">
                <span class="descripttion">Buena  relacion calidad/precio</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-1-1.png" alt="imagen">
                <span class="descripttion">No me importa tanto la calidad</span>
            </div>
            </div>
        </div>
    </div>
      `;
    }}
  
    customElements.define('nivel-calidad', nivelDeCalidad);