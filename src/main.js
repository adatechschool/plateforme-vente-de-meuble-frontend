import "./styles/style.css";
import Nav from "./components/Nav.js";
import displayProducts from "./components/Carte.js";
import createCategory from './components/Category';
// import filter from './utils/Filter.js';
import { displayProduct } from './components/Detailspage.js'
import createFilterBtn from "./components/FilterBar.js";

document.getElementById("nav").appendChild(Nav());
document.querySelector(".category-container").append(createCategory());
document.querySelector(".filter-container").appendChild(createFilterBtn());
document.getElementById("cartes").appendChild(displayProducts());

import { createBrowserHistory } from "history";
let history = createBrowserHistory();

let homeRequest = await fetch('http://192.168.5.181:3000/home');
let homeData = await homeRequest.json();

document.getElementById("nav").appendChild(Nav());
document.querySelector(".category-container").append(createCategory());

if (history.location.pathname == '/') {
    document.getElementById("cartes").appendChild(displayProducts(homeData));
} else if (history.location.pathname == '/product/') {
    const searchParams = new URLSearchParams(history.location.search);
    const idDuProduit = searchParams.get('id')

    let productRequest = await fetch(`http://192.168.5.181:3000/product/${idDuProduit}`);
    let productData = await productRequest.json();


    document.getElementById("cartes").appendChild(displayProduct(productData[0]));


    // document.getElementById('cartes').appendChild()
}

document.querySelector(".category-container").append(createCategory());
document.querySelector(".filter-container").appendChild(createFilterBtn());
document.getElementById("cartes").appendChild(displayProducts());