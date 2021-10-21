import React from 'react';

const ItemListContainer = (props) => {
    return(
        <div>
            <h1>{props.title ?? ''}</h1>
                {props?.text !== undefined ? <p>{props.text}</p>:null}
        </div>
    );
};

export default ItemListContainer;
