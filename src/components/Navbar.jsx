import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return(
        <header className = "header">
            <nav className="navbar">
                <div className="navbarTop">
                    <div><input placeholder="Buscar"/></div>
                    <div><a href="#"><img src="../../../img/logo.jpg" alt="logo" className="logo"/></a></div>
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









// Otra forma de exportar
// Si uso esta forma de exportar, tengo que usar llaves en mi archivo donde importe Navbar
// export const Navbar = () => {
//     return(
//         <header className = "header">
//             <nav className="navbar">
//                 <img src="../../../logo192.png" alt="logo" />
//                 <h1 className="item-nav" >Home</h1>
//                 <h1 className="item-nav" >Profile</h1>
//                 <h1 className="item-nav" >Sign In</h1>
//             </nav>
//         </header>
//     );
// };