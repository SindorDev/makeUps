import { useLocation, useRoutes } from "react-router-dom";
import { SuspenseElement as Suspense } from "../utils/index.js";
import { lazy, useEffect } from "react";
const Home = lazy(() => import("./home/Home.js"));
const Category = lazy(() => import("./category/Category.js"));
const Brand = lazy(() => import("./brand/Brand.js"))
const ProductTypes = lazy(() => import("./productTypes/ProductTypes.js"))
const Search = lazy(() => import("./search/Search.js"))
const Details = lazy(() => import("./details/Details.js"))
const Likes = lazy(() => import("./likes/Likes.js"))
const CartProduct = lazy(() => import("./cartProduct/CartProduct.js"))
const RoutesController = () => {

  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/category/:id",
      element: (
        <Suspense>
          <Category />
        </Suspense>
      ),
    },
    {
      path: "/brand/:id",
      element: (
        <Suspense>
          <Brand/>
        </Suspense>
      )
    },
    {
      path: "/types/:id",
      element: ( 
      <Suspense>
        <ProductTypes/>
      </Suspense> )
    },
    {
      path: "/details/:id",
      element: (
        <Suspense>
          <Details/>
        </Suspense>
      )
    },
    {
      path: "/search",
      element: (
        <Suspense>
          <Search/>
        </Suspense>
      )
    },
    {
      path: "/likes",
      element: (
        <Suspense>
          <Likes/>
        </Suspense>
      )
    },
    {
      path: "/checkout",
      element: (
        <Suspense>
          <CartProduct/>
        </Suspense>
      )
    }
  ]);
};

export default RoutesController;
