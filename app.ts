import * as express from "express";
import connectDB from "./db";
import recipeRoutes from "./recipeRoutes";

const app: express.Application = express();
connectDB();

app.use(express.json());
app.use("/api", recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
