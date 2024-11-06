import "./styles/style.css";
import Nav from "./components/Nav.js";
import displayProducts from "./components/Carte.js";

document.getElementById("nav").appendChild(Nav());
document.getElementById("cartes").appendChild(displayProducts());
