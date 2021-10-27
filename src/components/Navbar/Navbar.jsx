import React from 'react';
import CartWidget from './CartWidget/CartWidget'

const Navbar = () => {
    return(
        <header className = "header">
            <nav className="navbar">
                <div className="navbarTop">
                    <div><input placeholder="Buscar"/></div>
                    <div><CartWidget name= {''}/></div>
                    <div><img src="../../../img/carrito.png" alt="carrito" className="logoCarrito"/></div>
                </div>
                <div>
                    <ul className="navbarList">
                        <li><a href="../pages/Home.js" className="navbarLink">BAZAR</a></li>
                        <li><a href="../pages/Home.js" className="navbarLink">DECO</a></li>
                        <li><a href="../pages/Home.js" className="navbarLink">PAPELERIA Y ESCRITORIO</a></li>
                        <li><a href="../pages/Home.js" className="navbarLink">USO PERSONAL</a></li>
                        <li><a href="../pages/Home.js" className="navbarLink">MUEBLES</a></li>
                        <li><a href="../pages/Home.js" className="navbarLink">VENTAS POR MAYOR</a></li>
                        <li><a href="../pages/Home.js" className="navbarLink">KITS PARA REGALAR</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;