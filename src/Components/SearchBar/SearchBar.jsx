import React from 'react'
import "./SearchBar.css"

function SearchBar() {

    return (
        <div className="searchBar">
            <select className="shape"  name="line" id="bus">
                    <option value="1">Inglaterra</option>
                    <option value="4">Argentina</option>
            </select>
<input type="submit"/>
{/*             <form>
                <input 
                className="shape" 
                placeholder="Search city.." 
                type="text" 
                />
                <button 
                className="searchBar__submit " 
                type="submit"
                >
                </button>
           </form> */}
        </div>
        
    )
}

export default SearchBar
