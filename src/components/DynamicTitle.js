class Dynamictitle extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    
    // Component Base <h1>David</h1>
    const componentRoot = document.createElement("h1")
    componentRoot.textContent = this.getAttribute("title")
    
    // Stylize the Component
    const style = document.createElement("style")
    style.textContent = `
        h1{
            color: red;
        }
    `

    // Send to the Shadow
    shadow.appendChild(componentRoot)
    shadow.appendChild(style)
  }
}

customElements.define("dynamic-title", Dynamictitle);
