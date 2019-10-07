var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
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
  // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
  // Check your console to see that the products are stored in the listOfProducts varible.
  console.log(listOfProducts);
  // Check your console to see that the products are stored in the listOfProducts varible.

  var imageBasePath = "/assets/";

  var mainContainer = document.createElement("div");
  mainContainer.classList = "mainContainer";

  for (var i = 0; i < listOfProducts.length; i++) {
    var product = listOfProducts[i];

    var productContainer = document.createElement("div");

    var title = document.createElement("h1");
    title.innerText = product.title;

    var description = document.createElement("h4");
    description.innerText = product.description;

    var image = document.createElement("img");
    image.src = imageBasePath + product.image;

    var price = document.createElement("h3");
    price.innerText = product.price;

    productContainer.appendChild(title);
    productContainer.appendChild(description);
    productContainer.appendChild(image);
    productContainer.appendChild(price);
    mainContainer.appendChild(productContainer);
  }

  var main = document.getElementsByTagName("main")[0];
  main.appendChild(mainContainer);

  // Add your code here, remember to brake your code in to smaller function blocks
  // to reduce complexity and increase readability. Each function should have
  // an explainetory comment like the one for this function, see row 22.

  // TODO: Remove the console.log and these comments when you've read them.
}
