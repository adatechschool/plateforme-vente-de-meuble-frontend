export function displayProduct(data) {
  const container = document.createElement("div");
  container.className = "infosProduct";

  const imgDiv = document.createElement("div");
  imgDiv.className = "images";

  const mainImg = document.createElement("img");
  mainImg.className = "main-images";
  mainImg.src = data.image_links
    ? data.image_links[0]
    : "https://i0.wp.com/www.oicfurniture.com/wp-content/uploads/visual-portfolio/placeholder.png";

  const infosDiv = document.createElement("div");
  infosDiv.className = "infoprod";

  const productTitle = document.createElement("h2");
  productTitle.innerText = data.product_name;

  const productPrice = document.createElement("p");
  productPrice.innerText = data.price;

  const detailsDiv = document.createElement("div");
  detailsDiv.className = "product-details";
  detailsDiv.innerHTML = `
    <h2>Infos produit :</h2>
    ${data.description} 
    ${data.material} 
    ${data.color}`;

  imgDiv.appendChild(mainImg);
  infosDiv.appendChild(productTitle);
  infosDiv.appendChild(productPrice);
  infosDiv.appendChild(detailsDiv);
  container.appendChild(imgDiv);
  container.appendChild(infosDiv);

  return container;
}

// function displayInfos(product) {

//     const carteDiv = document.createElement('div');
//     carteDiv.className = 'carte';

//     const clickCarte = document.createElement('a');
//     clickCarte.href = `/product/?id=${product.id}`;
//     clickCarte.className = 'linkcarte';

//     const topDiv = document.createElement('div')
//     topDiv.className = 'topDiv'

//     const imgDiv = document.createElement('img');
//     imgDiv.className = 'mainImage';
//     imgDiv.src = product.image_links ? product.image_links[0] : 'https://i0.wp.com/www.oicfurniture.com/wp-content/uploads/visual-portfolio/placeholder.png';

//     const descDiv = document.createElement('div');
//     descDiv.className = 'productdesc';
//     descDiv.innerHTML = `
//         <h1 class="text-lg"><b>${product.product_name}</b></h1>
//         <p><b>Prix :</b> ${product.price}€</p>
//     `;

//     const btnElement = document.createElement('button');
//     btnElement.className = 'btn addToCart';
//     btnElement.innerText = 'Ajouter au panier'
//     btnElement.addEventListener('click', () => {
//         panier.push(product.id);
//         console.log(panier);
//     })

//     clickCarte.appendChild(topDiv)
//     topDiv.appendChild(imgDiv);
//     carteDiv.appendChild(clickCarte);
//     carteDiv.appendChild(descDiv);
//     carteDiv.appendChild(btnElement);

//     return carteDiv
// }
