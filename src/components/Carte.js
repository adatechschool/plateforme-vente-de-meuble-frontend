import products from '../data/sample.json' with { type: 'json'}

function displayProducts() {
    try {
        // const response = await fetch('http://192.168.5.181:3000/home');
        // if (!response.ok) {
        //     throw new Error('Erreur réseau');
        // }
        
        // const data = await response.json();
        const data = products
        const container = document.createElement('div');;
        data.forEach(product => {
            const card = createCard(product);
            console.log(card);
            container.appendChild(card);
        });
        return container;

    } catch (error) {
        console.error('Erreur:', error);
        const container = document.querySelector('#containerCarte');
        container.innerHTML = `<p>Erreur lors du chargement des produits: ${error.message}</p>`;
        return container;
    } 
}

const panier = []

function createCard(product) {

    const carteDiv = document.createElement('div');
    carteDiv.className = 'carte';

    const imgDiv = document.createElement('img');
    imgDiv.className = 'mainImage';
    imgDiv.src = product.image_links[0];

    const descDiv = document.createElement('div');
    descDiv.className = 'productdesc';
    descDiv.innerHTML = `
        <h2>${product.product_name}</h2>
        <p>Prix: ${product.price}€</p>
    `;

    const btnElement = document.createElement('button');
    btnElement.className = 'btn addToCart';
    btnElement.innerText = 'Ajouter au panier'
    btnElement.addEventListener('click', () => {
        panier.push(product.id);
        console.log(panier);
    })

    carteDiv.appendChild(imgDiv);
    carteDiv.appendChild(descDiv);
    carteDiv.appendChild(btnElement);

    return carteDiv;
}

export default displayProducts;