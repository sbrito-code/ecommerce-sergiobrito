import React from 'react'
import Item from './Item/Item'

const ItemList=({products}) =>{
    return(
    <>
    {products.map((products) => 
        <Item key={products.id} name={products.name} description={products.description} price={products.price} imgUrl={products.imgUrl}/>
    )}
    </>
    )
}

export default ItemList;