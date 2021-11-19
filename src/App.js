import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartFunction} from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return(
  <>
    <BrowserRouter>
      <CartFunction>
        {/* Se cierran al componente Navbar con / xq no tiene hijos */}
        {/* Navbar */}
        <Navbar />
        {/* Product list */}
        <Switch>
            <Route exact path="/">
              {/* Home */}
              <ItemListContainer title='Productos'/>
            </Route>
            {/* Products */}
            <Route exact path="/categoria/:catId">
              <ItemListContainer title='Filtrado de productos'/>
            </Route>            
            <Route exact path="/item/:id">
              <ItemDetailContainer/> 
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
        </Switch>
        {/* Footer */}
        {/* <Footer /> */}
      </CartFunction>
    </BrowserRouter>
  </>
  );
}

export default App;
