import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return(
        <Link to={`/item/${props.id}`} className="itemLink">
            <div className="item">
                <p>{props.name}</p>
                <img src={props.imgUrl} alt={props.name}/>
                <p>{props.description}</p>
                <p>${props.price}</p>
            </div>
        </Link>
    )
}

export default Item;