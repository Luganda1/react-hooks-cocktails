import React from "react";
import Cocktail from "./Cocktail";

export default function CocktailList({cocktails, loading}) {
  //console.log(cocktails);

  if(loading) {
    return <h1 className="section-title">Gumikilizako.../ Loading...</h1>
  }
  if(cocktails.length < 1) {
    return <h2 className="section-title">
      kokotayilo gyononya tetujilina /
      <p>No cocktails matched your criteria</p>
    </h2>
  }
  return <section className="section">
    <h2 className="section-title">Cocktail / kokotayilo</h2>
    <div className="cocktails-center">
        {
          cocktails.map( item => {
            return <Cocktail key={item.id} {...item}/>
          })
        }
    </div>
  </section>
  
}
