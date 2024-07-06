/* eslint-disable no-unused-vars */
import { FaSearch } from "react-icons/fa";
import './Searchbar.css'
import { useState } from "react";


const Searchbar = () => {
  const [query,setQuery]=useState('')
  const [loading,setLoading]=useState('')

  const onSearch = (e)=>{
    e.preventDefault()

    setLoading(true)
    setQuery(e.target.value)
    getGroups(e.target.value)
  }
  const getGroups = async (value)=>{
    try{
      console.log(value)
    }catch(err){
      console.log(err)
      setQuery('')
    }
  }
  
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
            value={query}
            onChange={onSearch}
          />
        </div>
        <div className="search-results"></div>
      </div>
    </div>
  );
};

export default Searchbar;
