import { useEffect, useState } from "react";
import api from "../services/api";
import RecipeCard from "../components/RecipeCard";

const Home = async () => {
    const [data , setData] = useState([]);

    const getData = async () => {
        const response  = await api.get("/recipe");
        return response.data;
    }
    
    const val = await getData();
    setData(val);

    return (
        <div>
            <ul>
                {data.map((recipe , index) => {
                    return <li key={index}>
                        <RecipeCard recipe={recipe} />
                    </li>
                })}
            </ul>
        </div>
    )
}
export default Home;