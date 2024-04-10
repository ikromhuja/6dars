import {
  RouterProvider,
  RouterProps,
  createBrowserRouter,
} from "react-router-dom";
import { Toast } from "react-hot-toast";

// Pages

import Home from "./Pages/Home";
import Create from "./pages/Create";
import SingleRecipe from "./Pages/";

// Layout
import MainLayout from "./Layout/MainLayout";

// Navbar
import Navbar from "./components/Navbar";

function App() {
  const routes = createBrowserRouter([{}]);
}

export default App;
