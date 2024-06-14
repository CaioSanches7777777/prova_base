import Link from "@/node_modules/next/link";
import ListRecipes from "@/components/ListRecipes";
import { RecipeContextProvider } from "@/context/RecipesContext";

export default function Home() {
  return (
    <div>
        <RecipeContextProvider>
            <ListRecipes></ListRecipes>
        </RecipeContextProvider>
        
    </div>
  );
}
