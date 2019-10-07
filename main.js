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
<<<<<<< Updated upstream
    loadProducts();
    // This would also be a good place to initialize other parts of the UI
=======
  loadProducts();
>>>>>>> Stashed changes
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
<<<<<<< Updated upstream
    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);
=======
  // Check your console to see that the products are stored in the listOfProducts varible.
  var firstItem = listOfProducts[0];

  console.log(firstItem.title);
  var div = document.createElement("div");
  div.style.height = "10rem";
  div.style.width = "10rem";
  div.style.background = "red";

  document.body.appendChild(div);
>>>>>>> Stashed changes

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
}