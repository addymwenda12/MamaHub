import { FaSearch } from "react-icons/fa";
import './Searchbar.css'


const Searchbar = () => {
  return (
    <div>
      <div className="search-options-container">
        <div className="search-container">
          <FaSearch size={14} className="icons search" />
          <input
            type="text"
            name="search"
            placeholder="search"
            className="search-input"
          />
        </div>
        <div className="search-results"></div>
      </div>
    </div>
  );
};

export default Searchbar;
