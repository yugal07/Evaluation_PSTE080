const Recipe = require("../models/Recipe");
const User = require("../models/User");

const getAllRecipe = async (req , res) => {
    try {
        const recipes = await Recipe.find().sort({createdAt: -1});
        res.json(recipes);
    } catch(error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
} 

const getSingleRecipe = async (req , res) => {
    try {
        const {id} = req.params;
        const recipe = await Recipe.findById(id);

        if(!recipe){
            res.status(404).json({message: "Not found"})
        }
        res.json(recipe)
    } catch(error){
        console.error(error);
        res.status(500).json({message});
    }
}

const getRecipeByFiler = async(req , res) => {
    try {
        const { title  , ingredients , steps , cookingTime } = req.body;

        const recipes = await Recipe.find({title , ingredients , steps , cookingTime});

        res.json(recipes)
    } catch(error){
        console.error(error);
        res.status(500).json({message: error.message})
    }
}

const updateRecipes = async (req , res ) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        const user = await User.findById(req.user.userId);
        const {title , steps} = req.body;

        if(!recipe) return res.status(404).json({message: "Recipe not found"});

        if(recipe.author != user._id) return res.status(401).json({message: "unauthorized"});

        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id , { title , steps });

        res.json(updateRecipes)
    } catch(error){
        console.error(error);
        res.status(500).json({message: error.message})
    }
}

const createRecipe = async(req , res) => {
    try {
        const { title , ingredients , steps , cookingTime } = req.body;
        const userId = req.user.userId;

        const recipe = new Recipe({
            title , ingredients , steps , cookingTime , author: userId
        })
        await recipe.save();

        const user = await User.findById({userId});
        user.recipes.push(recipe._id);
        await user.save();

        return res.status(201).json(recipe)
    } catch(error){
        console.error(error);
        res.status(500).json({message: error.message})
    }
}

const deleteRecipe = async(req , res) => {
    try {
        const id = req.params.id;
        const userId = req.user.userId;

        const recipe = await Recipe.findById(id)

        if(!recipe) return res.status(404).json({message: "Recipe not found"});

        if(recipe.author != userId) {
            return res.status(401).json({message: "Unauthorized"})
        }

        await Recipe.findByIdAndDelete(id);
        await User.findOneAndUpdate(userId , { $pull: {recipes: id}});

        res.status(200).json(recipe);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: error.message})
    }
}

module.exports = {getAllRecipe , getRecipeByFiler , updateRecipes , deleteRecipe , createRecipe , getSingleRecipe }