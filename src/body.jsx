import { useState } from "react"
import "../src/index.css"
import Clauderecipe from "./claudereceipe"
import IngredientsList from "./IngredientsList"

export default function Body(){

            const [receipe,setreceipe]= useState("")

 const [foods,setfoods]= useState([])

     const foodingre = foods.map(each =>{
      return <li key={each}>{each}</li>
    }) 
   

    function addIngredient(formData){
        try{
        console.log('Form Submitted')
        //const inputfield = document.querySelector("[name=ingredient]")
        //const newfood = inputfield.value;
        const newfood= formData.get("ingredient")
        if(newfood == ''){
            throw "Cant enter a null food"
        }
        //const newitem = <li key={newfood}>{newfood}</li>
        setfoods(prev => [...prev, newfood ])
    }
    catch(err){
        console.error(err)
    }
    }
     
    return(
        <main>
            <form  action={addIngredient}>
                <input type="text" placeholder="e.g tomatoes" aria-label="Add Ingredient" name="ingredient" />
                <button  className="addbtn">Add ingredient</button>
            </form>
            {
                foods.length>0 && <IngredientsList allfood={foodingre} foodstate={foods} setreceipe={setreceipe}/>
            }
            {receipe &&
              <Clauderecipe receipe={receipe}/>  }
        </main>
    )
}