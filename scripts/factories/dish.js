function dishFactory(data){
    const {id,name,servings,ingredients,time,description,appliance,ustensils} = data;


    function getDishCard(){
        
        return `<article class="dishCard">
                    <div class="imgBlock">

                    </div>
                    <div class="infocard">
                        <div class="dishTitle">
                            <h2>${name}</h2>
                            <span><b><i class="far fa-clock"></i> ${time}min</b></span>
                        </div>
                        <div class="desc">
                            <div class="dishIngridients">
                            ${ingredients.map(ingredient =>`<p><b>${ingredient.ingredient +':'??''}</b>${ingredient.quantity??''} ${ingredient.unit??''}</p>`).join("")}
                            </div>
                            <div class="cooking">
                                <p>${description}</p>
                            </div>
                        
                    </div>


                </article>`
    }

  
    function correction(){
        let  ingList = document.querySelectorAll(".dishIngridients p");
        
         ingList.forEach((unit) =>{
            let text = unit.lastChild;
            if(text.textContent.includes("grammes")){
                text.textContent = text.textContent.replace("grammes","g");
               console.log(unit.lastChild)
            }else if(text.textContent.includes("cuillères à soupe")){
                text.textContent =text.textContent.replace("cuillères à soupe","cuillère(s)");
            }
         } )    
     
     }
    

   return {id,name,servings,ingredients,time,description,appliance,ustensils,getDishCard,correction}
}

