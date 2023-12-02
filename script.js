class Product{
    imgLink;
    productName;
    productPrice;
    constructor(link,name,price){
        this.imgLink = link;
        this.productName = name;
        this.productPrice = price;
        const container = document.createElement("div");
        container.innerHTML = 
        `
            <img src="${this.imgLink}">
            <h4>${this.productName}</h4>
            <h5>${this.productPrice}$</h5>
            <button>Купить</button>
        `
        document.body.append(container);
    }
}






new Product("https://conteshop.by/ru/media/catalog/product/cache/11/image/1405x1879/602f0fa2c1f0d1ba5e241f914e856ff9/9/a/9a45aea582015d098ca2cf341bae9657_1.jpg?v=11", "носки", 20);