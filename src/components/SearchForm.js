import React from "react";

export default function SearchForm({setSearchTerm}) {

  const searchValue = React.useRef("")
  //console.log(searchValue)

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
  }

const searchCocktail = () => {
  setSearchTerm(searchValue.current.value)
}

  return (
    <section className="section container1">
      <h2 className="section-title">Search cocktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">nonya wano kokotayilo ekusingila</label>
          <input 
                type="text" 
                name="name" 
                id="name" 
                onChange={searchCocktail}
                ref={searchValue}
                />
        </div>
      </form>
    </section>
    )
}
