import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import Main from './Pages/Main/Main';
import Shop from "./Pages/Shop/Shop";
import Product from "./Pages/Product/Product";
import cart from "./Data/Cart"
import Cart from "./Pages/Cart/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState(cart)
  
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    console.log(product.id)
    if(exist) {
        setCartItems(cartItems.map(x => 
            x.id === product.id ?  {...exist, count: exist.count+1} :  x
        ))
    } else {
        setCartItems([...cartItems, {...product, count: 1}])
    }
    console.log(cartItems)
  }

  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main cartItems={ cartItems } />
          </Route>
          <Route exact path="/shop">
            <Shop cartItems={ cartItems } />
          </Route>
          <Route exact path="/shop/product/:id">
            <Product onAdd={ onAdd } cartItems={ cartItems } />
          </Route>
          <Route exact path="/cart">
            <Cart onAdd={ onAdd } cartItems={ cartItems } />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <h1>Hello World!! 🚀🚀</h1> */}
    </div>
  );
}

export default App;
