function handleClick(){}

// function createCategory() { 
//     const categoryChildContainer = document.createElement("div")
//     categoryChildContainer.className = "category-child-container"
//     let nameCategory = ["Armoire", "Chaise", "Lampe", "Table", "Canapé", "Lit", "Tapis", "Fauteuil"]
//     nameCategory.forEach(name => {
//         let newCategory = document.createElement ("button")
//         newCategory.setAttribute("id", name.toLowerCase());
//         newCategory.setAttribute("name", "button-category");
//         newCategory.setAttribute("onclick", "handleClick()");
//         newCategory.innerText = (name);
//         categoryChildContainer.appendChild(newCategory);   
//     });
   
//     return categoryChildContainer
// }

// export default createCategory;

function createCategory() { 
    const categoryChildContainer = document.createElement("div");

    categoryChildContainer.className = "w-full bg-zinc-0";
    
    const innerContainer = document.createElement("div");
    innerContainer.className = "max-w-7xl mx-auto px-4";
    
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex flex-wrap justify-center md:justify-between items-center py-4 gap-4";
    
    let nameCategory = ["Armoire", "Chaise", "Lampe", "Table", "Canapé", "Lit", "Tapis", "Fauteuil"];
    
    nameCategory.forEach((name, index) => {
        let newCategory = document.createElement("a");
        newCategory.setAttribute("id", name.toUpperCase());
        newCategory.setAttribute("name", "button-category");
        newCategory.setAttribute("onclick", "handleClick()");
        newCategory.setAttribute("href", "");
       
        newCategory.className = "px-4 py-2 bg-white hover:bg-gray-50 text-gray-800 rounded-sm transition-colors duration-200 hover:border-zinc-400 hover:rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50";
        newCategory.innerText = name;
        buttonContainer.appendChild(newCategory);

        if (index < nameCategory.length - 1) {
            const separator = document.createElement("span");
            separator.className = "text-zinc-500"; // Style du séparateur
            separator.innerText = " | ";
            buttonContainer.appendChild(separator);
        }
    });
    
    innerContainer.appendChild(buttonContainer);
    categoryChildContainer.appendChild(innerContainer);
    return categoryChildContainer;
}

export default createCategory;


