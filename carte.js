async function displayProducts() {
    try {
        const response = await fetch('http://192.168.5.181:3000/api/products');
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }
        
        const data = await response.json();
        const container = document.querySelector('#containerCarte');
        
        data.forEach(product => {
            const card = createCard(product);
            container.appendChild(card);
        });

    } catch (error) {
        console.error('Erreur:', error);
        const container = document.querySelector('#containerCarte');
        container.innerHTML = `<p>Erreur lors du chargement des produits: ${error.message}</p>`;
    } 
}

function createCard(product) {
    const carteDiv = document.createElement('div');
    carteDiv.className = 'carte';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'mainImage';

    const descDiv = document.createElement('div');
    descDiv.className = 'productdesc';
    descDiv.innerHTML = `
        <h2>${product.product_name}</h2>
        <p>Prix: ${product.price}€</p>
    `;

    const btnElement = document.createElement('button');
    btnElement.className = 'btn addToCart';

    carteDiv.appendChild(imgDiv);
    carteDiv.appendChild(descDiv);
    carteDiv.appendChild(btnElement);

    return carteDiv;
}

// Appel de la fonction
displayProducts();