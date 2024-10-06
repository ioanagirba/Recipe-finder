import mongoose, { Document, Schema } from "mongoose";

export interface IRecipe extends Document {
  title: string;
  duration: string;
  ingredients: string[];
  instructions: string;
  image: string;
}

const RecipeSchema: Schema = new Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  images: { type: String, required: true },
});

const Recipe = mongoose.model<IRecipe>("Recipe", RecipeSchema);
export default Recipe;
