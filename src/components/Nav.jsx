import SearchBar from './SearchBar.jsx';
import "../App.css";

function Nav({onSearch}) {
  return (
    <div className="header">
      <div className='title'>
      <ul>
        <li>
          <input type="checkbox" />
          <div>W</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>E</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>A</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>T</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>H</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>E</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>R</div>
        </li>
      </ul>
      </div>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;