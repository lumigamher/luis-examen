export class userAutenticacion extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.clicker();
    }
    render() {
      this.innerHTML = /* html */ `
      <div class="container" id="userAutenticacion">
        <div class="title2">
            <span><strong>¿Que diseño desea que tenga la app?</strong></span>
        </div>
        <div class="boxGrid">
            <div class="containerImage1">
                <img class="img" src="Source/answer-5-1.png" alt="imagen">
                <span class="descripttion">Interfaz sencilla</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-5-2.png" alt="imagen">
                <span class="descripttion">Interfaz ersonalizada</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-5-3.png" alt="imagen">
                <span class="descripttion">Interfaz replicada de la web</span>
            </div>
            <div class="containerImage1">
                <img class="img" src="Source/answer-5-4.png" alt="imagen">
                <span class="descripttion">No nesecito diseño</span>
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
          contenedorPrincipal.innerHTML = '<cotizar-site></cotizar-site>';
        });
      }
    }
  
    customElements.define('user-autenticacion', userAutenticacion);