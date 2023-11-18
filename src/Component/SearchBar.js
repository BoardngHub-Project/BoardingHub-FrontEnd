import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import "../CSS/SearchBar.css"; 


const SearchBar = () => {

    return (
        <div className='SearchBar'>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic-button">
                    <b>Range</b>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">1km</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2km</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3km</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <input
                id='searchInput'
                type="text"
                placeholder="  Search Area"
                variant="outlined"
                style={{width: 1000, height:50}}
                // onChange={handleChange}
                // value={searchInput}
            />

            <Button className='SearchBtn' variant="contained">
                Search
            </Button>
            
        </div>

        
    );
    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    // };

    // if(searchInput.length > 0){

    // }
}

export default SearchBar;