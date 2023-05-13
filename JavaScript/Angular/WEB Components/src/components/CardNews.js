class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())

    }
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft =  document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || " Anonymous")

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("url")

        const newsContent =   document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)

        const cardRight =  document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo")
        newsImage.alt = "Foto da noticia"
        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style")
        style.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .card {
            width: 720px;
            border: 1px solid gray;
            box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        
        }
        .card__left > span {
           font-weight: 500;
        }
        .card__left > h1 {
            margin-top: 15px;
            font-size: 25px;
        }
        .card__left > p{
            color: gray;
        }
        .card__left > a{
            color: black;
            outline: none;
            text-decoration: none;
        }
        .card__right{
            
        }
        
        img{
            width: 300px;
        }`

        return style;
    }
}

customElements.define("card-news", CardNews)