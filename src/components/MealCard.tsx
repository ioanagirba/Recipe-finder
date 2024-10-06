import { RecipeDetails } from "./RecipeDetails";

interface MealCardProps {
  photo: string;
  recipeName?: string;
  recipePeriod?: string;
}

export const MealCard: React.FC<MealCardProps> = ({
  photo,
  recipeName,
  recipePeriod,
}) => {
  return (
    <div className="bg-primary rounded-xl shadow-md flex my-4 min-w-[320px] w-full max-w-[400px]">
      <img src={photo} alt="NoPhoto" className="h-full rounded-l-xl max-h-24" />

      <div className="px-2 flex w-full">
        <RecipeDetails recipeName={recipeName} recipePeriod={recipePeriod} />
      </div>
    </div>
  );
};
