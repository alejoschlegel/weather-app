import SearchBar from './SearchBar.jsx';
import "../App.css";

function Nav({onSearch}) {
  return (
    <div className="header">
      <h1>Weather App</h1>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;