function filtres(recipes){

    const filtres = document.querySelectorAll(".filtre input");
    const lists =document.querySelectorAll(".filtre .list")
    let tab;
    const tagFilter=[];
  //  console.log(Object.keys(recipes[0])[3]=="ingredients");


    recipes.forEach((recipe) => {
  //  category = Object.keys(recipe);
    recipe.ingredients.forEach(ingredient => lists[0].innerHTML +=`<p>${ingredient.ingredient.toLowerCase().trim()}</p>`);
    lists[1].innerHTML += `<p >${recipe.appliance.trim()}</p>`;
    recipe.ustensils.forEach(ustensil => lists[2].innerHTML += `<p>${ustensil.toLowerCase().trim()}</p>`); 
    })

    console.log(lists);
    
    lists.forEach( (list) => {
                    tab=[];
                    for (let i = 0;i<list.children.length-1;i++){
                        tab.push(`<p class="${list.classList[1].slice(0, -1)}">${list.children[i].textContent}</p>`);
                    } 
                    list.innerHTML = [...new Set(tab)].map(element =>`${element}`).join("");

                    const tags= Array.from(list.getElementsByTagName("p"));
                    
                 //  console.log(tagFilter);
                     tags.forEach(tag => tag.addEventListener("click",()=>{
                        
                        if(tag.classList.contains ("chosen")){
                            tag.classList.remove("chosen");
                            tagFilter.forEach((element) =>{
                                console.log(tag +" + " + element)
                                if(element.includes(tag.textContent)){
                                   
                                tagFilter.splice(tagFilter.indexOf(element),1)
                                }
                            })
                        }else{
                            tag.classList.add("chosen");
                            tagFilter.push(`<p class= "${tag.className}">${tag.textContent.trim()}</p>`);   
                        }
                        document.getElementById("tagzone").innerHTML =tagFilter.join("");
                     }))
                     
                     
                    })


    filtres.forEach(filtre => filtre.addEventListener("keyup",()=>{
        tab=[];
        let key = filtre.value.toLowerCase();
        let selector = filtre.closest(".filtre").lastElementChild;
        const list= Array.from(selector.getElementsByTagName("span"));
        
       
        list.forEach((elem)=>{
            
            if(elem.textContent.toLowerCase().includes(key)){
                elem.classList.remove("hide");
               
            }else{
                elem.classList.add("hide");
            }
            
        })
       
    
        
        
     }),);

    

    
}