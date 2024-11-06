import './styles/style.css'
import Nav from './components/Nav';
import displayProducts from './components/Carte';

document.getElementById('nav').appendChild(Nav());
document.getElementById('cartes').appendChild(displayProducts());
