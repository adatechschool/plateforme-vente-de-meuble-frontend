import createCard from '../utils/Createcard';

//import products from '../data/sample.json' with { type: 'json'}
import products from '../data_test/sample.json' with { type: 'json'}

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

export default displayProducts;