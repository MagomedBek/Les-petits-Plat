async function getDish(){
    let data = await  fetch ("../../data/recipes.json") ;
    let database = await  data.json();

    return database.recipes;
}

async function displayData(recipes) {
    const dishSection = document.querySelector("#dishSection");

    recipes.forEach((recipe) => {
        const dishModel = dishFactory(recipe);
        const dishCardDOM = dishModel.getDishCard();
        dishSection.innerHTML+=dishCardDOM;
        dishModel. correction();
    });
};


 
let recipes = [];
async function init() {
    // Récupère les datas des recipes
      recipes  = await getDish();
    displayData(recipes);
   
    //filtres(recipes)
    displayLists(recipes);
    const lists = document.querySelectorAll(".filtre .list");
    lists.forEach(list => {
        showlist(list);
    })
    launchSearch();
    
};

init();
