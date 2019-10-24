var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            listOfProducts = products;
            addProductsToWebpage();
        });
}

function initSite() {
    loadProducts();
    // This would also be a good place to initialize other parts of the UI
}

function addToCart(product) {
    // Hämta ut cart ifrån localstorage.
    // Kolla om cart du hämtat är tom eller innehåller produkter.
    // Om cart är tom/ej existerar vill du skapa en array och lägga in produkten.
    // Om cart finns skall du pusha in produkten i den hämtade cart-variabeln.
    // Spara upp cart till localstorage

    // var Json_str = JSON.stringify(product);
    // localStorage.cart = Json_str;
    // localStorage.setItem("cart", cartList);
    //localStorage.setItem("storageCart",Json.stringify())

    var cartList = JSON.parse(localStorage.getItem("cart"));
    if (cartList) {
        cartList.push(product);
        count(cartList.length);
    } else {
        cartList = [];
        cartList.push(product);
        console.log(cartList.length);
    }
    localStorage.setItem("cart", JSON.stringify(cartList));
}

function count(length) {
    document.getElementById("counter").innerText = length;
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    var cartList = JSON.parse(localStorage.getItem("cart"));

    if (cartList) {
        count(cartList.length);
    }

    var imageBasePath = "/assets/";

    var mainContainer = document.createElement("div");
    mainContainer.classList = "mainContainer";

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
        addToCartButton.onclick = function () {
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

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.

    // TODO: Remove the console.log and these comments when you've read them.
}
