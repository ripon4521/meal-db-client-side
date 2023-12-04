
import Navbar from "../Navbar/Navbar";
import RecipeCards from "../RecipeCards/RecipeCards";



const Home = () => {
    return (
        <div>
           
   <Navbar></Navbar>

            <div>
                <h1 className="text-9xl font-ranacho mt-24 text-center ml-60  absolute text-gray-100  ">All Recipe Here</h1>
            </div>
            <div>
                <h1 className="text-8xl mr-40 font-ranacho mt-40  relative text-black-500 ">All Recipe Here</h1>
            </div>

            <RecipeCards></RecipeCards>
        </div>
    );
};

export default Home;