import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return(
  <>
    <BrowserRouter>
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
            
            {/* <Route path="/item/:id" component={ItemDetailContainer} /> */}
            
            <Route exact path="/item/:id">
              <ItemDetailContainer/> 
            </Route>

        </Switch>
        {/* Footer */}
        {/* <Footer /> */}
    </BrowserRouter>
  </>
  );
}

export default App;
