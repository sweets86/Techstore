var listOfProducts;

function loadProducts() {
    fetch("./products.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(products) {
            listOfProducts = products;
            addProductsToWebpage();
        });
}

function initSite() {
    loadProducts();
}

function addToCart(product) {
    var cartList = JSON.parse(localStorage.getItem("cart"));
    if (cartList) {
        cartList.push(product);
        count(cartList.length);
    } else {
        cartList = [];
        cartList.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cartList));
}

function count(length) {
    document.getElementById("counter").innerText = length;
}

function addProductsToWebpage() {
    var cartList = JSON.parse(localStorage.getItem("cart"));

    if (cartList) {
        count(cartList.length);
    }

    var imageBasePath = "./assets/";

    var mainContainer = document.createElement("div");

    for (var i = 0; i < listOfProducts.length; i++) {
        var product = listOfProducts[i];

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

        var addToCartButton = document.createElement("button");
        addToCartButton.classList = "button";
        addToCartButton.data = product;
        addToCartButton.onclick = function() {
            addToCart(this.data);
        };

        var cartText = document.createElement("p");
        cartText.classList = "button-text";
        cartText.innerText = "Lägg till i kundvagnen";

        var cartIcon = document.createElement("i");
        cartIcon.id = "cart-icon";
        cartIcon.classList = "fas fa-cart-arrow-down";

        productContainer.appendChild(title);
        productContainer.appendChild(description);
        productContainer.appendChild(image);
        productContainer.appendChild(price);
        productContainer.appendChild(addToCartButton);
        mainContainer.appendChild(productContainer);
        addToCartButton.appendChild(cartIcon);
        addToCartButton.appendChild(cartText);
    }

    var main = document.getElementsByTagName("main")[0];
    main.appendChild(mainContainer);
}