function initSite() {
    load();
}

function load() {
    var cartList = JSON.parse(localStorage.getItem("cart"));
    if (cartList && cartList.length) {
        var imageBasePath = "/assets/";
        var mainContainer = document.createElement("div");
        mainContainer.classList = "mainContainer";
        console.log(cartList);
        var count = document.createElement("h1");
        count.innerText = cartList.length;

        var totalPrice = 0;

        for (var i = 0; i < cartList.length; i++) {
            var product = cartList[i];

            totalPrice += product.price;

            var productContainer = document.createElement("div");
            productContainer.classList = "productContainer";

            var title = document.createElement("h1");
            title.innerText = product.title;

            var description = document.createElement("h4");
            description.innerText = product.description;

            var image = document.createElement("img");
            image.src = imageBasePath + product.image;
            image.classList = "productPic";

            var price = document.createElement("h3");
            price.classList = "priceStyling";
            price.innerText = product.price + "   " + "kr";

            var removeProduct = document.createElement("button");
            removeProduct.classList = "removeButton";
            removeProduct.data = i;
            removeProduct.classList = "button";
            removeProduct.onclick = function () {
                removeItem(this.data);
            };

            var buttonText = document.createElement("p");
            buttonText.innerText = "Ta bort produkt";
            buttonText.classList = "button-text";




            productContainer.appendChild(title);
            productContainer.appendChild(description);
            productContainer.appendChild(image);
            productContainer.appendChild(price);
            productContainer.appendChild(removeProduct);
            removeProduct.appendChild(buttonText);
            mainContainer.appendChild(productContainer);
        }

        var priceText = document.createElement("h2");
        priceText.innerText = totalPrice;
        mainContainer.appendChild(priceText);
        console.log(totalPrice)

        console.log(cartList);
    } else {
        var mainContainer = document.createElement("div");
        mainContainer.classList = "mainContainer";

        var noProducts = document.createElement("h1");
        noProducts.innerText = "Din Vagn är tom";
        noProducts.classList = "noInfo";
        var main = document.getElementsByTagName("main")[0];
        mainContainer.appendChild(noProducts);
    }
    var main = document.getElementsByTagName("main")[0];
    main.appendChild(mainContainer);
    main.appendChild(count);
}

function removeItem(index) {
    var cartList = JSON.parse(localStorage.getItem("cart"));
    cartList.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartList));
    document.getElementsByTagName("main")[0].innerHTML = "";
    load();
}
