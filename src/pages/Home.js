import React from "react";
import CocktailsList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("a");
  const [cocktails, setCocktails] = React.useState([]);

/**
 * 
 * 
 React.useEffect(() =>{
   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
     .then(response => response.json())
     .then(data => setCocktails(data.drinks))
 }, [searchTerm])

since we gonna want to filter our array of drinks this uphere wont work and we may wanna get to catch our errors as well
 */


  React.useEffect(() => {
    setLoading(true)
    async function getDrinks() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        
        const {drinks} = data;
        if(drinks) {
          //console.log("Drinks");
          const newCocktails = drinks.map( item => {
            //console.log(item);
            const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;

            return {id:idDrink,
                    name:strDrink,
                    info:strAlcoholic,
                    glass:strGlass,
                    image:strDrinkThumb
            }
          });

          setCocktails(newCocktails)
        }
        else {
          //console.log("No drinks");
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
    getDrinks();
  }, [searchTerm])



  return <main>
    <SearchForm 
      setSearchTerm={setSearchTerm}
    />
    <CocktailsList 
      loading={loading}
      cocktails={cocktails}
    />
  </main>;
}
