import { useState } from "react";

const RecipeUpdateForm = ({recipeId}) => {
    const [title , setTitle] = useState("");
    const update = async () => {
        try {
            const response = await api.put("/api/recipe/:id" , {title});
        } catch(error){
            throw error.response ? error.response.data : {message: "Failed to update"}
        }
    }
    return (
        <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        title
      </label>
      <input onChange = {(e) => setTitle(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="title" />
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        submit
      </button>
    </div>
  </form>
</div>
    )
}