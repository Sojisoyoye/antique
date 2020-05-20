import HomePage from "../components/pages/HomePage";
import ProductPage from "../components/pages/ProductPage/ProductPage";

const routes = {
  default: [
    {
      exact: true,
      path: "/",
      component: HomePage,
    },
    {
      // exact: true,
      path: "/products",
      component: ProductPage,
    },
  ],
};

export default routes;
