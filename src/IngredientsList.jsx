import { getRecipeFromMistral } from "./ai"

export default function IngredientsList(prop){

    async function getreceipe(){
      const result = await  getRecipeFromMistral(prop.foodstate)
      prop.setreceipe(result)
        }
    return(
<section>
    <h2>Ingredients on hand</h2>
 <ul>
     {prop.allfood}
</ul>
 {
     prop.foodstate.length>3 &&
 <div className="container">
 <div ref={prop.ref}>
     <h3>Ready for a receipe?</h3>
     <p>Generate a receipe from your list of ingredients</p>
 </div>
 <button className="receiptbtn" onClick={getreceipe}>Get a receipe</button>
 </div>
 }
 </section>
    )
}