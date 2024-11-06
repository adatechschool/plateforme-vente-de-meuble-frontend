function handleClick(){}

function createCategory() { 
    const categoryChildContainer = document.createElement("div")
    categoryChildContainer.className = "category-child-container"
    let nameCategory = ["Armoire", "Chaise", "Lampe", "Table", "Canapé", "Lit", "Tapis", "Fauteuil"]
    nameCategory.forEach(name => {
        let newCategory = document.createElement ("button")
        newCategory.setAttribute("id", name.toLowerCase());
        newCategory.setAttribute("name", "button-category");
        newCategory.setAttribute("onclick", "handleClick()");
        newCategory.innerText = (name);
        categoryChildContainer.appendChild(newCategory);   
    });
   
    return categoryChildContainer
}

export default createCategory;


