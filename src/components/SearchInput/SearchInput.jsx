import React from 'react'
import './SearchInput.css';

const SearchInput = ({value, onChange}) => {
    return ( 
        <input type="text" value={value} onChange={onChange} placeholder="search"className='search'/>
        
     );
}

export default SearchInput;