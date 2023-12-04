import { Link } from "react-router-dom";


const SingleRecipeCrad = (load) => {
    console.log(load.load);
    const {strMealThumb,strCategory}=load.load;
    return (
        <div>
            <div className="flex flex-col  items-center justify-center w-full max-w-sm mx-auto">
    <div className="w-full h-full  bg-gray-300 bg-center bg-cover rounded-lg shadow-md"  >
    <img className="" src={strMealThumb} alt="" />
    </div>
   

    <div className="w-56 cursor-pointer -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <Link to={`/recipe/${strCategory}`} className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">See All Recipe</Link>

       
    </div>
</div>




        </div>
    );
};

export default SingleRecipeCrad;