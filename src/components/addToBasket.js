// ensuite il faut faire une fonction dans laquelle tu pourras mettre le code donc tu as besoin
const cart = [];

function addToBasket(product) {
  let panier = document
    .getElementById("panier")
    .addEventListener("click", function ajoutPanier() {
      if (!isIdInArray(cart, product.id)) {
        panier.push(product.id);
      }
    });
  console.log("PANIER", panier);
  return panier;
}

function isIdInArray(tableau, number) {
  return tableau.includes(number);
}
