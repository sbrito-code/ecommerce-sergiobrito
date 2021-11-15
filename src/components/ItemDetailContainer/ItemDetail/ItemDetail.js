import React from 'react';

const ItemDetail = (props) => {
    return(
        <>
            <div className="itemDetail">
                <div>
                    <img src={props.imgUrl} alt={props.name}/>
                    <p>{props.details}</p>
                </div>
                <div>
                    <h1>{props.name}</h1>
                    <p>$ {props.price}</p>
                    <button>AGREGAR AL CARRITO</button>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;