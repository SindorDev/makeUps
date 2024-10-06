import { useLocation, useRoutes } from "react-router-dom";
import { SuspenseElement as Suspense } from "../utils/index.jsx";
import { lazy, useEffect } from "react";
const Home = lazy(() => import("./home/Home.jsx"));
const Category = lazy(() => import("./Category/Category.jsx"));
const Brand = lazy(() => import("./brand/Brand.jsx"))
const ProductTypes = lazy(() => import("./productTypes/ProductTypes.jsx"))
const Search = lazy(() => import("./search/Search.jsx"))
const Details = lazy(() => import("./details/Details.jsx"))
const Likes = lazy(() => import("./likes/Likes.jsx"))
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
    }
  ]);
};

export default RoutesController;
