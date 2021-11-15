import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import productsAPI from '../Products/Products'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product,setProduct] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const productList = new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(productsAPI);
            },1000);
        });
        productList.then((product) => {
            setProduct(product.find((i) => (i.id === id)));
        });
    },[id]);

    return <ItemDetail {...product}/>;
};

export default ItemDetailContainer;