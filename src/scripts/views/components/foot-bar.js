class FootBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
        <p>Copyright © 2022 - Resto Book</p>
      `;
    }
  }

customElements.define('foot-bar', FootBar);
