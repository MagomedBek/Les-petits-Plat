function dishFactory(data){
    const {id,name,servings,ingredients,time,description,appliance,ustensils} = data;


    function getDishCard(){
        return `<article class="dishCard">
                    <div class="imgBlock">

                    </div>
                    <div class="infocard">
                        <div class="dishTitle">
                            <h2>${name}</h2>
                            <span>${time} <i class="far fa-clock"></i> min</span>
                        </div>
                        <div class="desc">
                            <div class="DishIngridients">
                            ${ingredients.map(ingredient =>`<p>${ingredient.ingredient} ${ingredient.quantity??''} ${ingredient.unit??''}</p>`).join("")}
                            </div>
                            <div class="cooking">
                                <p>${description}</p>
                            </div>
                        
                    </div>


                </article>`
    }

    

   return {id,name,servings,ingredients,time,description,appliance,ustensils,getDishCard}
}

