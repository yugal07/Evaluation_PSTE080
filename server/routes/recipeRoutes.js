const express = require("express");
const { getAllRecipe, getRecipeByFiler, createRecipe, updateRecipes, deleteRecipe, getSingleRecipe } = require("../controllers/recipeController");
const protect = require("../middleware/authMiddleware")

const router = express.Router();

router.get("/" , getAllRecipe);
router.get("/:id" , getSingleRecipe)
router.get("/" ,getRecipeByFiler);
router.post("/" , protect , createRecipe);
router.put("/:id" ,protect ,  updateRecipes);
router.delete("/:id" ,protect ,  deleteRecipe);

module.exports = router