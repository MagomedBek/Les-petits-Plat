let tagFilter = [];
const lists = document.querySelectorAll(".filtre .list");
const filtres = document.querySelectorAll(".filtre  .filtresearch input");
/**
 * afiche les listes de fitre 
 * @param {[]} recipes le tableau de recettes filtré 
 */
function displayLists(recipes) {

    lists.forEach(list => {
        let data = getTagData(recipes, list.dataset.type);
        displayTags(list, data);
        list.querySelectorAll("span").forEach(tag => {
            tag.addEventListener("click", function (e) {
                TagFiltering({
                    text: tag.textContent,
                    type: tag.closest(".list").dataset.type

                })

            })
            
            searchTags();
        })
        
    })

}

function showlist(list){
   let button = list.closest(".filtre").querySelector(".filtresearch i");
   let key = list.closest(".filtre").querySelector(".filtresearch input");
   
  
   key.addEventListener("keyup", () => {
    let listLength = list.querySelectorAll("span").length;
     console.log(listLength)
    if(key.value.toLowerCase().length>=3  && listLength > 0){
        list.classList.add("show");
        button.classList.add("clicked");
       }else{
             list.classList.remove("show");
            button.classList.remove("clicked");
       }

   })
   
   button.addEventListener("click",() => {
        console.log("test")
        if(list.classList.contains("show")){
            list.classList.remove("show");
            button.classList.remove("clicked");
        }else{
            lists.forEach(list => {
                list.classList.remove("show");
                let fleche = list.closest(".filtre").querySelector(".filtresearch ");
                fleche.classList.remove("clicked");
            })
            list.classList.add("show")
            button.classList.add("clicked");
        }
   })
}
function searchTags() {
    filtres.forEach(filtre => filtre.addEventListener("keyup", () => {
        tab = [];
        let key = filtre.value.toLowerCase();
        let selector = filtre.closest(".filtre").lastElementChild;
        const list = Array.from(selector.getElementsByTagName("span"));


        list.forEach((elem) => {

            if (elem.textContent.toLowerCase().includes(key)) {
                elem.classList.remove("hide");

            } else {
                elem.classList.add("hide");
            }

        })




    }))
}

function getTagData(recipes, type) {
    let result = [];

    switch (type) {
        case "ingredients":
            recipes.forEach(recipe => {
                result = result.concat(recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase()));
            });
            result = result.filter(ingredient => !tagFilter.some(tag => tag.text == ingredient))
            break;
        case "appareils":
            recipes.forEach(recipe => {
                result.push(recipe.appliance.toLowerCase())
            });
            result = result.filter(appliance => !tagFilter.some(tag => tag.text == appliance));
            break;
        case "ustensils":
            recipes.forEach(recipe => {
                result = result.concat(recipe.ustensils.map(ustensil => ustensil.toLowerCase()))
            });
            result = result.filter(ustensil => !tagFilter.some(tag => tag.text == ustensil));
            break;

    }
    return [...new Set(result)]
}

function displayTags(list, data) {
    let tagHTML = "";
    data.forEach(tag => {
        tagHTML += `<span>${tag}</span>`;
    })
    if(data.length == 0){
        tagHTML = "aucun element"
    }
    list.innerHTML = tagHTML;
}


function TagFiltering(tag) {


    tagFilter.push(tag);
    let filter = document.createElement("span");
    filter.classList.add(tag.type);
    filter.dataset.value = tag.text;
    filter.innerHTML = `${tag.text}<i class="far fa-times-circle close"></i>`;

    document.getElementById("tagzone").appendChild(filter);
    filter.querySelector(".close").addEventListener("click", (e) => {
        deleteTag(e.target.closest("span"));

    })
    search()
}

function deleteTag(filter) {

    tagFilter = tagFilter.filter(tag => tag.type != filter.classList[0] || tag.text != filter.dataset.value);
    filter.remove();
    search();
}