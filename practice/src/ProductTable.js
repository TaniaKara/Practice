import React, { Component } from 'react';
import products from './productsData'
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

// Table shows products groupped by category
// displays and filters the data collection based on user input
function ProductTable (){
    return(
        <div>
            <ProductCategoryRow products = {products} />
            {/* <ProductRow products = {products}/> */}
        </div>
    );
}

export default ProductTable;