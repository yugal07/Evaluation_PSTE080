const express = require("express");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");
const connectDb = require("./config/db");
const authRouter = require("./routes/authRoute");
const recipeRouter = require("./routes/recipeRoutes")

connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use("/api/auth" , authRouter);
app.use("/api/recipe" , recipeRouter);

const PORT = process.env.PORT;

app.get("/" , (req , res) => {
    res.json({message: "Application is running"})
})


app.listen(PORT , () => {
    console.log("Server is running on PORT " , PORT);
})