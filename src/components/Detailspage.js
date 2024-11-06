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

}
async function displayDetails() {
    try {
        const response = await fetch('http://192.168.5.181:3000/api/pathpourdetails');
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }
        
        const data = await response.json();
        
        
        data.forEach(product => {
            const card = createCard(product);
            container.appendChild(card);
        });

    } catch (error) {
        console.error('Erreur:', error);
        container.innerHTML = `<p>Erreur lors du chargement des produits: ${error.message}</p>`;
    } 
}

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










