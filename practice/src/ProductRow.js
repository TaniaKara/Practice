import React, { Component } from 'react';

//displays a row for each product
function ProductRow(props) {
    const productRows = props.products.map(
      (product, index) => <div key={index}>{product.name}{product.price}</div>
    );
    return(
      <ul>{productRows}</ul>
    );
}

export default ProductRow;