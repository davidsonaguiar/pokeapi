import React, { useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";

import './Search.css';

function Search ({func}) {

    const [ inputValue, setInputValue ] = useState('');

    return (
        <form className='form'
            onSubmit={(e) => {
                e.preventDefault();
                func(inputValue.toLowerCase());
                setInputValue('')
            }}>
            <input 
                type='search'
                id='search'
                placeholder='Digite nome/id do pokemon'
                value={inputValue}
                onChange={ (e) => {
                    setInputValue(e.target.value);
                }}/>
            <button 
                type='submit' 
                className='submit-btn'>
                <BiSearchAlt style={{fontSize: '20px',}} />
            </button>
        </form>
    )
}

export default Search;