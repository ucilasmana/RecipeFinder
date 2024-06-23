'use client'
import CategoriesList from "./components/categoriesList";
import Hero from "./components/hero";
import Recipes from "./components/recipeCollection";


export default function Home() {
  return (
    <main  className="w-full h-full flex flex-col gap-6 md:gap-8">
     <Hero/>
     <CategoriesList/>
     <Recipes/>
    </main>
  );
}
