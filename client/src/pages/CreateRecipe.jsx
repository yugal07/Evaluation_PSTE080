import { useState } from "react";
import api from "../services/api";

const CreateRecipe = () => {
    const [title , setTitle] = useState("");
    const [ingredients , setIngredients] = useState("");
    const [steps , setSteps] = useState("");
    const [cookingTime , setCookingTime] = useState(0);

    const currentUser = localStorage.getItem("user");

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(currentUser)
        try {
            const response = await api.post("/recipe" , {title , ingredients: [ingredients] ,steps ,cookingTime: Number(cookingTime) , author: currentUser._id});
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
                    <input class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" name="ingredients" id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="steps" >steps</label> 
                    <input class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" name="steps" id="steps" value={steps} onChange={(e) => setSteps(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="cookingTime" >cooking Time</label> 
                    <input class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" name="cooking Time" id="cooking time" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />
                </div>
                <button class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default CreateRecipe;