import { RecipeDetails } from "../components/RecipeDetails";
import { instructions } from "../config/recipe";

export const RecipePage = () => {
  const photo = require("../config/images/photo.jpg");

  return (
    <div>
      <div className="bg-primary min-h-screen flex flex-col md:flex-row smaller:gap-10  md:gap-20 justify-center md:items-start items-center md:px-10 py-10">
        <div className="w-1/2 ">
          <img src={photo} alt="NoPhoto" className="w-full " />
          <RecipeDetails recipeName={"Smashed Potatoes"} recipePeriod={"20"} />
        </div>
        <div className="text-small whitespace-pre-wrap w-1/2">
          {instructions}
        </div>
      </div>
      <div className="bg-primary min-h-screen flex flex-col md:flex-row smaller:gap-10  md:gap-20 justify-center md:items-start items-center md:px-10 py-10">
        <div className="w-1/2 ">
          <img src={photo} alt="NoPhoto" className="w-full " />
          <RecipeDetails recipeName={"Carbonara"} recipePeriod={"30"} />
        </div>
        <div className="text-small whitespace-pre-wrap w-1/2">
          {instructions}
        </div>
      </div>
    </div>
  );
};
