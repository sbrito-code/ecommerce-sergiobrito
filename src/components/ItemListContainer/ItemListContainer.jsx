import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import productsAPI from './../Products/Products'

const ItemListContainer = (props) => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        const productsList = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(productsAPI);
            },2)
        })
        productsList.then((products) => {
        setProducts(products);
        setLoading(false);
        })
    },[])
    return(
        <div className="product-list">
            <h1>{props.title}</h1>
            <div>
                {loading ? <h2>Cargando Productos</h2> : <div className="products"><ItemList products={products}/></div>}
            </div>
        </div>
    )
}

export default ItemListContainer;