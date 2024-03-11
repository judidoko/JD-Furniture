import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import ShopDetailDescription from "./pages/ShopDetailDescription";
import DetailReview from "./pages/DetailReview";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/WishList";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contactus from "./pages/ContactUs";
import Aboutus from "./pages/Aboutus";
import NotFound from "./pages/NotFound";

const ProjectRoutes = () => {
  const element = useRoutes([
    { path: "*", element: <NotFound /> },
    { path: "cart", element: <Cart /> },
    { path: "/", element: <Home /> },
    { path: "shop", element: <Shop /> },
    { path: "shopdetaildescription", element: <ShopDetailDescription /> },
    { path: "detailreview", element: <DetailReview /> },
    { path: "checkout", element: <Checkout /> },
    { path: "wishlist", element: <Wishlist /> },
    { path: "team", element: <Team /> },
    { path: "blog", element: <Blog /> },
    { path: "blogdetail", element: <BlogDetail /> },
    { path: "contactus", element: <Contactus /> },
    { path: "aboutus", element: <Aboutus /> },
  ]);
  return element;
};

export default ProjectRoutes;
