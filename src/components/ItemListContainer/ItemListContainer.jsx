import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import productsAPI from './../Products/Products'
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const {catId} = useParams();

    useEffect(() => {
        const productsList = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(productsAPI);
            },1000)
        })
        productsList.then((products) => {
        catId ? setProducts(products.filter(i => i.catId === catId)) : setProducts(products); 
        setLoading(false);
        })
    },[catId])
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