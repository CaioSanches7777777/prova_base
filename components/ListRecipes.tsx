'use client';
import { Recipe } from "@/context/RecipesContext";
import { useEffect, useState } from "react";
import recipeList from "@/recipes.json";
import Image from "next/image";
import Link from "next/link";

const ListRecipes = ({}) => {
    
    
    return (
      <main className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
        
        <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-center">Selecione uma das Receitas</p>
        {recipeList.map(({ id, name, ingredients,instructions,image}) => (
            <div key={id} className="bg-white border border-gray-300 rounded p-4 shadow-md">
              <Link className="text-xl font-semibold mb-2" href={''}>{name}</Link>
            </div>
        ))}
          {recipeList.map(({ id, name, ingredients,instructions,image}) => (
            <div key={id} className="bg-white border border-gray-300 rounded p-4 shadow-md">
              <p className="text-xl font-semibold mb-2">{name}</p>
              <p className="text-gray-600">Ingredientes: {ingredients}</p>
              <p className="text-gray-600">Instruções: {instructions}</p>
              <Image className="text-gray-600" src={`${image}`} width={250} height={250} alt="Picture of the food"></Image>
            </div>
          ))}
        </div>
      </main>
    );
  };
  
  export default ListRecipes;