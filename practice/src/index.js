import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import products from './productsData';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable';
import * as serviceWorker from './serviceWorker';


function FilterableProductTable() {
    return (
        <div>
            {/* <SearchBar /> */}
            <ProductTable />
        </div>
    );
}

ReactDOM.render(
    <FilterableProductTable />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
