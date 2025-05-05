import { useEffect, useState } from "react";
import api from "../services/api";
import RecipeCard from "../components/RecipeCard";

const Home = async () => {
    const [error, setError] = useState(true);
    const [data , setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get("/recipe");
            setData(response.data);
        }
        fetchData();
    } , []);
    
    console.log(data)

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