import React, {useState, useContext} from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { Context } from '../../../context/CartContext';

const ItemDetail = ({id, name, details, price, stock, imgUrl}) => {

    const [buy, setBuy] = useState(false);
    const {onAdd} = useContext(Context);

    const agregar = (props) =>{
        setBuy(true);
        onAdd({id,name,price},props.unidades)
        alert(`agregaste ${props.unidades} al carrito`)
    }

    return(
        <>
            <div className="itemDetail">
                <div>
                    <img src={imgUrl} alt={name}/>
                    <p>{details}</p>
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>$ {price}</p>
                    {!buy? <ItemCount stock={stock} onAdd={agregar}/>: <Link to='/cart'><button>Terminar compra</button></Link>}
                    
                </div>
            </div>
        </>
    );
}

export default ItemDetail;