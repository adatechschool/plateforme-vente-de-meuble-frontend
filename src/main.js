import './styles/style.css'
import Nav from './components/nav';
import displayProducts from './components/carte';

document.getElementById('Nav').appendChild(Nav());
document.getElementById('cartes').appendChild(displayProducts());
