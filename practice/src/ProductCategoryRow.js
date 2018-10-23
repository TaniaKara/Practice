import React, { Component } from 'react';

function getUniqueValues (array){
    const result = [];
    for(let i=0; i<array.length; i++){
        if(result.indexOf(array[i]) === -1)
            result.push(array[i]);
    }
    return result;
}

// displays a heading for each category
function ProductCategoryRow(props){
    const categories = getUniqueValues(
        props.products.map((product)=>product.category));   
    return(                  
        <b>{categories}</b>        
    );
}

export default ProductCategoryRow;