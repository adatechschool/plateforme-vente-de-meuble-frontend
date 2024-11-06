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

export default createCard;