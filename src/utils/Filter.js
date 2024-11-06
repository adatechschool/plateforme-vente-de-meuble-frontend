//import products from '../data/sample.json' with { type: 'json'}
import products from '../data_test/sample.json' with { type: 'json'}

import createCard from './Createcard';


function sortListByType(word) {
  // const response = await fetch('http://192.168.5.181:3000/home');
  // if (!response.ok) {
  //     throw new Error('Erreur réseau');
  // }
  
  // const data = await response.json();
  const data = products;
  console.log(word)
  const container = document.createElement('div');

  const cartesContainer  = document.getElementById('cartes');
  cartesContainer.innerHTML = "";
  let regex = new RegExp(word.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), "i");
  data.forEach(meuble => {
    if (regex.test(meuble.type.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
      container.appendChild(createCard(meuble));
    }
  });
  cartesContainer.appendChild(container);
}

//sortListByType(listMeuble, "")


export default sortListByType;