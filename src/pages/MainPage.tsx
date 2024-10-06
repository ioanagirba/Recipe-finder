import { MealCard } from "../components/MealCard";
import { RefreshButton } from "../components/RefreshButton";
import { SearchBar } from "../components/SearchBar";
import recipesInfo from "../config/recipesInfo.json";

export const MainPage = () => {
  const photo = require("../config/images/photo.jpg");

  return (
    <div className="bg-primary min-h-screen flex flex-col items-center p-5">
      <div>
        <SearchBar />
        <div className="text-title font-bold">Favorites</div>

        {recipesInfo.map((recipe, index) => (
          <MealCard
            key={index}
            // photo={require(recipe.photo)}
            photo={require("../config/images/photo.jpg")}
            recipeName={recipe.title}
            recipePeriod={recipe.time}
          />
        ))}
        <div className="flex items-center justify-center">
          <RefreshButton />
        </div>
      </div>
    </div>
  );
};
