import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { RecipePage } from "./pages/RecipePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/recipe",
      element: <RecipePage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
