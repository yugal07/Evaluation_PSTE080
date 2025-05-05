import { useState } from "react";
import api from "../services/api";

const CreateRecipe = () => {
    const [title , setTitle] = useState("");
    const [ingredients , setIngredients] = useState("");
    const [steps , setSteps] = useState("");
    const [cookingTime , setCookingTime] = useState(0);

    const currentUser = JSON.parse(localStorage.getItem("user"));

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(currentUser)
        try {
            const response = await api.post("/recipe" , {title , ingredients: [ingredients] ,steps ,cookingTime: Number(cookingTime) , author: currentUser.data._id});
        }
        catch(error){
            throw error
        }
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="title" >Title</label> 
                    <input name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input name="ingredients" id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="steps" >steps</label> 
                    <input name="steps" id="steps" value={steps} onChange={(e) => setSteps(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="cookingTime" >cooking Time</label> 
                    <input name="cooking Time" id="cooking time" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default CreateRecipe;