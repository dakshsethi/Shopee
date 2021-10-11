import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './Pages/Main/Main';
import Shop from "./Pages/Shop/Shop";
import Product from "./Pages/Product/Product";

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/shop/product/:id">
            <Product />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <h1>Hello World!! 🚀🚀</h1> */}
    </div>
  );
}

export default App;
