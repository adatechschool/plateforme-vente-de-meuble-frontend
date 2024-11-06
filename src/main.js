import "./styles/style.css";
import Nav from "./components/Nav.js";
import displayProducts from "./components/Carte.js";
import createCategory from './components/Category';

document.getElementById("nav").appendChild(Nav());
document.querySelector(".category-container").append(createCategory());  
document.getElementById("cartes").appendChild(displayProducts());