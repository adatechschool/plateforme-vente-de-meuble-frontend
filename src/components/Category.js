function handleClick(){}

function createCategory() { 
    const categoryContainer = document.querySelector("category-container")
    let nameCategory = ["Armoire", "Chaise", "Lampe", "Table", "Canape", "Lit", "Tapris", "Fauteil"]
    nameCategory.forEach(name => {
        let newCategory = document.createElement ("button")
        newCategory.setAttribute("id", name.toLowerCase());
        newCategory.setAttribute("name", "button-category");
        newCategory.setAttribute("onclick", "handleClick()");
        newCategory.innerText = (name);
        categoryContainer.appendChild(newCategory);
    });
   
    return categoryContainer
}

export default createCategory;


