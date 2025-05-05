const mongoose = require("mongoose");
const User = require("../models/User");

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    ingredients: [{
        type: String,
    }],
    steps: {
        type: String,
    },
    cookingTime: {
        type: Number // minutes,
    }
} , {timestamps: true});

const Recipe = mongoose.model("Recipe" , recipeSchema);

module.exports = Recipe;