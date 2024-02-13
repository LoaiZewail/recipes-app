import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom"

export const useFetchSingleRecipe = () => {

    const params = useParams();

    const getSingleRecipe = async () => {
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
        );
        return response.data;
    };

    return useQuery("singleRecipe", getSingleRecipe);

}