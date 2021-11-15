import React from 'react';
import {Link} from 'react-router-dom';

const CartWidget = () => {
    return (
        <div>
            <Link to="/"><img src="../../../img/logo.jpg" alt="logo" className="logo"/></Link>
        </div>
    )
}

export default CartWidget;