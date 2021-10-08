import { Link, Route, Switch } from "react-router-dom";

const MainHeader = () => {
    return (
        <div className="header">
            <div className="navigation">
                <div className="logo">
                    shopee
                </div>
                <div className="nav">
                    <ul>
                        <Switch>
                            <Route exact path="/">
                                <li className="links">
                                    <Link to="/" className="active">Home</Link>
                                </li>
                                <li className="links">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="links">
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li className="links">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </Route>

                            <Route exact path="/about">
                                <li className="links">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="links">
                                    <Link to="/about" className="active">About</Link>
                                </li>
                                <li className="links">
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li className="links">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </Route>

                            <Route exact path="/shop">
                                <li className="links">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="links">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="links">
                                    <Link to="/shop" className="active">Shop</Link>
                                </li>
                                <li className="links">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </Route>

                            <Route exact path="/contact">
                                <li className="links">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="links">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="links">
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li className="links">
                                    <Link to="/contact" className="active">Contact</Link>
                                </li>
                            </Route>
                        </Switch>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;