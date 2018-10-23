import React, { Component } from 'react';

function SearchBar() {
    return(
        <div>
            <input type = "text" placeholder="Search..." /><br/>
            <input type = "checkbox" /> Only show items in stock
        </div>
    );
}

export  default SearchBar;