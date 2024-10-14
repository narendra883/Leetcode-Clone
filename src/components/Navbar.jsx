import { useState } from "react";
import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import './Navbar.css';

function Navbar() {
  const [isOpen, setisOpen] = useState(null); // Only one state to track open dropdown

  const toggleDropDown = (dropdown) => {
    setisOpen(isOpen === dropdown ? null : dropdown);
  }
  return (
    <>
    
    <div className="navbar">
      <div className="dropdown">
        <button onClick={()=>toggleDropDown("lists")} className="dropdown-button">
          Lists
          {isOpen === "lists" ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </button>

        {isOpen=="lists" && (
          <ul className="dropdown-menu">
            <li className="dropdown-item">Top Interview Questions</li>
            <li className="dropdown-item">Top 100 Problems</li>
            <li className="dropdown-item">Curated Problems</li>
          </ul>
        )}
      </div>

      <div className="dropdown">
        <button onClick={()=>toggleDropDown("difficulty")} className="dropdown-button">
          Difficulty
          {isOpen=="difficulty" ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </button>

        {isOpen=="difficulty" && (
          <ul className="dropdown-menu">
            <li className="dropdown-item">Easy</li>
            <li className="dropdown-item">Medium</li>
            <li className="dropdown-item">Hard</li>
          </ul>
        )}
      </div>

      <div className="dropdown">
        <button onClick={()=>toggleDropDown("tags")} className="dropdown-button">
          Tags
          {isOpen=="tags" ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </button>

        {isOpen=="tags" && (
          <ul className="dropdown-menu">
            <li className="dropdown-item">Arrays</li>
            <li className="dropdown-item">Strings</li>
            <li className="dropdown-item">Dynamic Programming</li>
            <li className="dropdown-item">Sorting</li>
          </ul>
        )}
      </div>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" />
        <CiSearch className="search-icon" />
      </div>
    </div>
 
    </>
  )
}

export default Navbar
