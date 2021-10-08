import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './Pages/Main/Main';

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <h1>Hello World!! 🚀🚀</h1> */}
    </div>
  );
}

export default App;
