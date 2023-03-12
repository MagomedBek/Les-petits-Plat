function search() {
    let key = document.querySelector("#seaurch").value.toLowerCase();
     dishSection.innerHTML = "";
     let result = [];
     for(let recipe of recipe) {
          const name = recipe.name.toLowerCase();
          const description = recipe.description.toLowerCase();
          const ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
          /// console.log(ingredients) ;
          
              if (  name.includes(key) || description.includes(key) || ingredients.includes(key)) {
                  result.push(recipe);
                  console.log("clé:"+key +"length:"+ key.length);
              }
     }
     tagFilter.forEach(tag =>{
         switch(tag.type){
             case "ingredients":
              result = result.filter(recipe => recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase() == tag.text));
             break;
         case "appareils":
             result = result.filter(recipe => recipe.appliance.toLowerCase() == tag.text);
             break;
         case "ustensils":
             result = result.filter(recipe => recipe.ustensils.some(ustensil => ustensil.toLowerCase() == tag.text));
             break;
 
       }
         
     })
     if(result.length>0){
         result.forEach(recipe => {
             const dishModel = dishFactory(recipe);
             const dishCardDOM = dishModel.getDishCard();
             dishSection.innerHTML += dishCardDOM;
             console.log(dishModel.ustensils);
             
         })
         displayLists(result);
     }else  {
         dishSection.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson » ";
     }
 }
 
 function launchSearch() {
     
     let button = document.querySelector("#seaurch");
     button.addEventListener("keyup", () => {
         let key = document.querySelector("#seaurch").value.toLowerCase();
 
         if (key.length >=3) {
             search();
         } else if(key.length < 3 ) {
             dishSection.innerHTML = "";
             displayData(recipes);
             displayLists(recipes);
         }
     });
 }