import { Route, Routes, useLocation } from "react-router-dom";
import Home from './modules/Home';
import SearchRecipes from './modules/SearchRecipes';
import SingleRecipe from './modules/SingleRecipe';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrolledToTop/ScrolledToTop";
import Cursor from "./components/Cursor/Cursor";

function App() {

  //Preloader animation
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation()
  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <>
      <Cursor />
      <ScrollToTop />
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<SearchRecipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
