import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Shop from "./components/Shop/Shop";
import HomePage from "./components/HomePage/HomePage";
import ItemPage from "./components/ItemPage/ItemPage";
import Cart from "./components/Cart/Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "shop", element: <Shop /> },
        { path: "shop/item/:itemId", element: <ItemPage /> },
        {path:"cart", element: <Cart/>},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
