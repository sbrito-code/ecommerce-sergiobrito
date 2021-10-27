import React from 'react';

const Item = (props) => {
    return(
        <div className="item">
            <p>{props.name}</p>
            <img src={props.imgUrl} alt={props.name}/>
            <p>{props.description}</p>
            <p>${props.price}</p>
        </div>
    )
}

export default Item;