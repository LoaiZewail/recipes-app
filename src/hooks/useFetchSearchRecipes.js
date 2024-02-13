import { useQuery } from "react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom"

export const useFetchSearchRecipes = () => {

    const [searchParams] = useSearchParams();

    const getSearchRecipes = async () => {
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?query=${searchParams.get("query") || ""}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
        );
        return response.data;
    };

    return useQuery("searchRecipes", getSearchRecipes);

}