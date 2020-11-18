window.customElements.define(
  "light-dom-header",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
      <style>
          :host {
              color: red;
          }
      </style>
      <slot></slot>
    `;
    }
  }
);

window.customElements.define(
  "slot-header",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
      <style>
          :host {
              color: red;
          }
      </style>
      <h1><slot></slot></h1>
    `;
    }
  }
);

window.customElements.define(
  "custom-header",
  class extends HTMLElement {
    static get observedAttributes() {
      return ["text"];
    }

    constructor() {
      super();

      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
      <style>
        :host {
          color: red;
        }
      </style>
      <h1></h1>
    `;
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      this.shadowRoot.querySelector("h1").textContent = newValue;
    }
  }
);
