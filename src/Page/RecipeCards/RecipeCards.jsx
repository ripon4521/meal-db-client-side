import { useLoaderData } from "react-router-dom";
import SingleRecipeCrad from "./SingleRecipe/SingleRecipeCrad";


const RecipeCards = () => {
        const loader =useLoaderData()
        console.log(loader);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {
                loader.map(load=> <SingleRecipeCrad key={load._id} load={load} ></SingleRecipeCrad>)
            }
        </div>
    );
};

export default RecipeCards;