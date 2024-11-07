import "./styles/style.css";
import Nav from "./components/Nav.js";
import displayProducts from "./components/Carte.js";
import createCategory from './components/Category';


import { createBrowserHistory } from "history";
let history = createBrowserHistory();
let productData = null;

document.getElementById("nav").appendChild(Nav());
document.querySelector(".category-container").append(createCategory());
    
if (history.location.pathname == '/') {
    let productRequest = await fetch('http://192.168.5.181:3000/home');
    productData = await productRequest.json();
    document.getElementById("cartes").appendChild(displayProducts(productData));
} else if (history.location.pathname == '/product') {
    const searchParams = new URLSearchParams(history.location.search);
    const idDuProduit = searchParams.get('id')




    const e = document.createElement('h1')
    e.innerText = 'Page du produit ' + idDuProduit
    document.getElementById('cartes').appendChild(e)
}

export default productData;