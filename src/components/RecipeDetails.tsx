import { useState } from "react";
import { COLORS } from "../config/constants";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

interface RecipeDetailsProps {
  recipeName?: string;
  recipePeriod?: string;
}

export const RecipeDetails: React.FC<RecipeDetailsProps> = ({
  recipeName,
  recipePeriod,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const handleAddToFavorite = () => {
    setIsFavorited(true);
    console.log("Add to fav!");
  };

  const handleDeleteFromFavorite = () => {
    setIsFavorited(false);
    console.log("Removed from fav!");
  };

  return (
    <div className="flex justify-between py-3 w-full">
      <Link to="/recipe">
        <div className="text-medium leading-6 font-semibold">{recipeName}</div>
        <div className="text-small">{recipePeriod} min.</div>
      </Link>

      <div className="flex items-center justify-center">
        {isFavorited ? (
          <FavoriteIcon
            onClick={handleDeleteFromFavorite}
            className="cursor-pointer"
            sx={{ color: COLORS.button }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={handleAddToFavorite}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
