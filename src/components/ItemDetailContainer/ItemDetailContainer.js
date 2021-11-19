import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import productsAPI from '../Products/Products'
import { useParams } from 'react-router-dom';
import ComponentLoader from '../../components/Loader/ComponentLoader'

const ItemDetailContainer = () => {
    const [product,setProduct] = useState([]);
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        setLoader(true);
        const productList = new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(productsAPI);
            },1000);
        });
        productList.then((product) => {
            setProduct(product.find((i) => (i.id === id)));
        }).finally(() => setLoader(false));
    },[id]);

    return loader ? <ComponentLoader /> : <ItemDetail {...product}/>;
};

export default ItemDetailContainer;