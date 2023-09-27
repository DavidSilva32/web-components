class Cardnews extends HTMLElement {
  constructor(author, link, title, content, photo, alt) {
    // this.autor = autor
    super();

    const shadow = this.attachShadow({ mode: "open" });
    // Send to the Shadow
    shadow.innerHTML = this.build(author, link, title, content, photo, alt);
    shadow.appendChild(this.style());
  }
  // Component Base
  build(author, link, title, content, photo, alt) {
    const componentRoot = `
    <section class="card">
    <section class="left_card">
        <span>By ${this.getAttribute("author") || author || "Anonymous"}</span>
        <a href=${
          this.getAttribute("link") || link || "https://www.google.com"
        } target="_blank">
            <h1>${this.getAttribute("title") || title || "Anonymous"}</h1>
        </a>
        <p>${this.getAttribute("content") || content || "Anonymous"}</p>
    </section>
    <section class="right_card">
        <img src="${
          this.getAttribute("photo") || photo || "assets/img/default-photo.jpg"
        }"
        alt=${this.getAttribute("alt") || alt || "Default"}>
    </section>
    `;
    return componentRoot;
  }

  // Stylize the Component
  style() {
    const style = document.createElement("style");
    style.textContent = `
    :root {
      --text-color: #777777;
    }

    .card {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      width: 80%;
    }
    .card .left_card {
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
    .card .left_card span {
      font-weight: 400;
    }
    .card .left_card a {
      margin-top: 1rem;
      font-size: 1.5rem;
      color: #000;
    }
    .card .left_card p {
      color: var(--text-color);
    }
    .card .right_card img {
      max-width: 100%;
      width: 425px;
      border-radius: 1rem 1rem 0 0;
    }
    
    @media screen and (min-width: 425px) {
      .card {
        max-width: 768px;
        padding: 0;
        flex-direction: row;
        gap: unset;
        border-radius: 1rem;
        /* Box Shadow */
        box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
      }
    
      .card .left_card {
        justify-content: center;
        width: 80%;
      }
    
      .card .right_card img {
        height: 100%;
        border-radius: 0;
      }
    }
    
    `;

    return style;
  }
}

customElements.define("card-news", Cardnews);

// Adding news Cards into container section in HTML document
const container = document.querySelector(".container");
const list = [
  {
    author: "Anne",
    link: null,
    title: "She's Very Crazy",
  },
  {
    author: "David",
    link: null,
    title: "He's too so much",
  },
];

list.map(({ author, link, title }) => {
  const Card = new Cardnews(author, link, title);
  container.appendChild(Card);
});
