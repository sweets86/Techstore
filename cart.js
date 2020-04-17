function initSite() {
    load();
}

function load() {
    var cartList = JSON.parse(localStorage.getItem("cart"));
    if (cartList && cartList.length) {
        var imageBasePath = "./assets/";
        var mainContainer = document.createElement("div");
        mainContainer.classList = "mainContainer";
        var count = document.createElement("h1");
        count.innerText = cartList.length;
        count.id = "counter";

        var textContainer = document.createElement("div");
        textContainer.classList = "textContainer";
        mainContainer.appendChild(textContainer);

        var cartIcon = document.createElement("i");
        cartIcon.id = "icon";
        cartIcon.classList = "fas fa-shopping-cart";
        textContainer.appendChild(cartIcon);

        var text = document.createElement("h1");
        text.innerText = "Kundvagn";
        text.classList = "text";
        textContainer.appendChild(text);

        var totalPrice = 0;

        var container = document.createElement("div");
        container.classList = "container";

        for (var i = 0; i < cartList.length; i++) {
            var product = cartList[i];

            totalPrice += product.price;

            var productContainer = document.createElement("div");
            productContainer.classList = "productContainerCart";

            var image = document.createElement("img");
            image.src = imageBasePath + product.image;
            image.classList = "productPic1";

            var title = document.createElement("h1");
            title.classList = "title";
            title.innerText = product.title;

            var price = document.createElement("h3");
            price.classList = "priceStylingCart";
            price.innerText = product.price + "   " + "kr";

            var removeProduct = document.createElement("button");
            removeProduct.classList = "removeButton";
            removeProduct.data = i;
            removeProduct.classList = "removeButton";
            removeProduct.onclick = function() {
                removeItem(this.data);
            };

            var buttonText = document.createElement("p");
            buttonText.innerText = "Ta bort";
            buttonText.classList = "removebutton-text";

            var trashIcon = document.createElement("i");
            trashIcon.id = "trash-icon";
            trashIcon.classList = "far fa-trash-alt";

            productContainer.appendChild(image);
            productContainer.appendChild(title);
            productContainer.appendChild(price);
            productContainer.appendChild(removeProduct);
            removeProduct.appendChild(trashIcon);
            removeProduct.appendChild(buttonText);
            container.appendChild(productContainer);
        }

        mainContainer.appendChild(container);

        var priceText = document.createElement("h2");
        priceText.innerText =
            "Totalt" + " " + "pris:" + " " + totalPrice + " " + "kr";
        priceText.classList = "totalText";
        mainContainer.appendChild(priceText);

        var buttonContainer = document.createElement("div");
        buttonContainer.classList = "buttonContainer";
        mainContainer.appendChild(buttonContainer);

        var finishProduct = document.createElement("button");
        finishProduct.classList = "finishButton";
        finishProduct.onclick = function() {
            alert("Tack för ditt köp och välkommen åter!");
            cartList = [];
            localStorage.setItem("cart", JSON.stringify(cartList));
            document.getElementsByTagName("main")[0].innerHTML = "";
            load();
        };

        buttonContainer.appendChild(finishProduct);

        var checkIcon = document.createElement("i");
        checkIcon.id = "check-icon";
        checkIcon.classList = "fas fa-check";
        finishProduct.appendChild(checkIcon);

        var buttonText = document.createElement("p");
        buttonText.innerText = "Slutför ditt köp";
        buttonText.classList = "finishText";
        finishProduct.appendChild(buttonText);
    } else {
        var mainContainer = document.createElement("div");
        mainContainer.classList = "mainContainer";

        var noProducts = document.createElement("h1");
        noProducts.innerText = "Din Vagn är tom";
        noProducts.classList = "noInfo";
        var main = document.getElementsByTagName("main")[0];
        mainContainer.appendChild(noProducts);

        var linkText = document.createElement("h4");
        linkText.innerText = "Gå tillbaka till produktsidan";
        linkText.classList = "linkText"
        mainContainer.appendChild(linkText);

        var link = document.createElement("a");
        link.innerText = "Tryck Här!"
        link.classList = "link"
        link.href = "./index.html"
        linkText.appendChild(link)
    }
    var main = document.getElementsByTagName("main")[0];
    main.appendChild(mainContainer);
    
    if(count) {
        main.appendChild(count);
    }
}

function removeItem(index) {
    var cartList = JSON.parse(localStorage.getItem("cart"));
    cartList.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartList));
    document.getElementsByTagName("main")[0].innerHTML = "";
    load();
}
