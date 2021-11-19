import React from 'react';
import CartWidget from './CartWidget/CartWidget'
import {Link} from 'react-router-dom';

function Navbar ({setCartOpen}) {
    const categories = [
        {id: '1', address: '/categoria/bazar', text: 'BAZAR'},
        {id: '2', address: '/categoria/deco', text: 'DECO'},
        {id: '3', address: '/categoria/papeleriayescritorio', text: 'PAPELERIA Y ESCRITORIO'},
        {id: '4', address: '/categoria/usopersonal', text: 'USO PERSONAL'},
        {id: '5', address: '/categoria/muebles', text: 'MUEBLES'},
        {id: '6', address: '/categoria/ventaspormayor', text: 'VENTAS POR MAYOR'},
        {id: '7', address: '/categoria/kitspararegalar', text: 'KITS PARA REGALAR'},
    ];
    
    return (
        <header className = "header">
        <nav className="navbar">
            <div className="navbarTop">
                <div><input placeholder="Buscar"/></div>
                <div><CartWidget name= {''}/></div>
                <div className="buttonCard">
                    <Link to='/cart'><button 
                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     setCartOpen(true);
                        //     }}
                        type="button">
                    Carrito
                    </button></Link>
                </div>
            </div>
            <div>
                <ul className="navbarList">
                    {categories.map((cat) => {
                        return(
                            <Link to={cat.address} key={cat.id} className="navbarLink" exact >{cat.text}</Link>
                        );
                    })}
                </ul>
            </div>
        </nav>
    </header>
    );
};
export default Navbar;
