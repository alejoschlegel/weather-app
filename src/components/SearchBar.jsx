import { useState, useEffect } from "react";
import "../App.css";

export default function SearchBar({onSearch}) {

  const[city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search_input"
      />
      <button type="submit" value="Agregar" className="search__submit" >
        <span className="material-icons-sharp">search</span>
      </button>
      {/* <input type="submit" value="Agregar"  className="search__submit"/> */}
      {/* <span id="search_submit" class="material-icons-sharp">search</span> */}
    </form>
  );
}