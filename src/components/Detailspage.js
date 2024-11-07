// Fetch de la table "products" 
import Nav from "./Nav";


document.getElementById("nav").appendChild(Nav());

async function displayDetailsProd() {
    try {
            const response = await fetch('http://192.168.5.181:3000/product/6');
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }
        
        const data = await response.json();
        console.log(data);
        
        data.forEach(product => {
            const card = createCard(product);
            container.appendChild(card);
        });

    } catch (error) {
        console.error('Erreur:', error);
        container.innerHTML = `<p>Erreur lors du chargement des produits: ${error.message}</p>`;
    } 
}
displayDetailsProd();

// ensuite il faut faire une fonction dans laquelle tu pourras mettre le code donc tu as besoin

function createCard(product) {
}

let count = 0;

let panier = document.getElementById('panier').addEventListener('click', function ajoutPanier(){
    if(count > 0){
        count = count +1; 
        
    }
    console.log(count);
})










