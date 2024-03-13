
export class cotizacion extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = /* html */ `
      <div class="container" id="cotizacion">
      <h4>¡Bien!¡Hemos Terminado!</h4>
      <h3><Strong>Compártenos si te ha gustado</Strong></h3>
      <div class="botones">
          <button class="faceboton">
              <i class='bx bxl-facebook' style='color:#ffffff'  ></i>
              <p>Share</p>
          </button>
          <button class="inboton">
              <i class='bx bxl-linkedin' style='color:#ffffff' ></i>   
              <p>Share</p>
          </button>
          <button class="gboton">
              <i class='bx bxl-google' style='color:#ffffff' ></i>
              <p>Google + </p>
          </button>
          <button class="tboton">
              <i class='bx bxl-twitter' style='color:#ffffff'></i>
              <p>Twitt</p>
          </button>
      </div>
      <h2>El costo Estimado de tu app es</h2>
      <h1 class="tcolor1">5.000.000
          <span>COP</span>
      </h1>
      <a href="" style='color:#ffffff'>Editar respuestas</a>
      <p> En GBP contamos con los mejores <strong>desarroladores de apps y webs</strong> para tu proyecto. publica tu Proyecto en GBP.</p>
      <div>
          <button class="boton"><strong>Terminar</strong></button>
      </div>
  </div>
      `;
    }}
  
    customElements.define('cotizar-site', cotizacion);