import "./styles/style.css";
import Nav from "./components/Nav.js";
import displayProducts from "./components/Carte.js";
import createCategory from './components/Category';

let productRequest = await fetch('http://192.168.5.181:3000/home');
let productData = await productRequest.json();

document.getElementById("nav").appendChild(Nav());
document.querySelector(".category-container").append(createCategory());
document.getElementById("cartes").appendChild(displayProducts(productData));

export default productData