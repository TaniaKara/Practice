import React from 'react';
import ReactDOM from 'react-dom';


// create a toggle
// when click on the text changes

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function ProductCategoryRow(props){
  const categories = props.products.map(
    (product) => product.category
  );
  const uniqueCategories = [];
  // = new Set(categories);  
  for (let i=0; i<categories.length; i++){
    if(uniqueCategories.indexOf[categories[i]]=== -1)
      uniqueCategories.push[categories[i]];
  }

  console.log(uniqueCategories);
  return(
    {uniqueCategories}
  );
}



function ProductRow(props) {
  const productRows = props.products.map(
    (product, index) => <li key = {index}>{product.name}{product.price}</li>
  );
  return(
    <ul>{productRows}</ul>
  );
}

ReactDOM.render(
  <ProductCategoryRow products = {products} />,
  <ProductRow products = {products}/>,
  document.getElementById('root')
)
