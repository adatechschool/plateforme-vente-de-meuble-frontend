
// function toggleNavbar(collapseID)
// {
//   document.getElementById(collapseID).classList.toggle("hidden");
//   document.getElementById(collapseID).classList.toggle("flex");
// }


// Fetch de la table "products" 
async function displayDetails() {
    const data = {
        "id": 6,
        "product_name": "Table en chêne",
        "price": 120,
        "type": "table",
        "material": "bois",
        "color": "marron",
        "state": "neuf",
        "description": "Table en bois massif idéale pour la salle à manger.",
        "in_stock": 1,
        "user_id": 1,
        "created_at": "2024-01-15T09:23:00.000Z",
        "updated_at": "2024-02-01T08:10:00.000Z"
      }

    // try {
    //     const response = await fetch('http://192.168.5.181:3000/api/products');
    //     if (!response.ok) {
    //         throw new Error('Erreur réseau');
    //     }
        
    //     const data = await response.json();
    //     const container = document.querySelector('#detailsCarte');
        

    // } catch (error) {
    //     console.error('Erreur:', error);
    //     const container = document.querySelector('#detailsCarte');
    //     container.innerHTML = `<p>Erreur lors du chargement des produits: ${error.message}</p>`;
    // } 
}

// ensuite il faut faire une fonction dans laquelle tu pourras mettre le code dont tu as besoin

// function createCard(id) {
//     for (let i=0; i<length; i++)
//         {
//         if ([i]=="id"){
//           alert("voici les détails")
//         }
// }
// }

let moins = document.getElementById('moins');
let plus = document.getElementById('plus');
let input = document.getElementById('input');

let count = 0; 
let max = 10; 

plus.addEventListener('click', function() {
    count = count + 1;
    input.value = count;

})
moins.addEventListener('click', function() {
    count = count - 1;
    input.value = count;

})