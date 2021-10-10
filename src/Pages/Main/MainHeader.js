import { Link, Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import cart from './../../Data/Cart';

const MainHeader = () => {

    const [isLoaded, setIsLoaded] = useState(true)
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch(cart)
            .then(() => {
                setIsLoaded(false)
                setItems(cart)
            })
            .catch(err => console.log('An error occured - ' + err))
    }, [items])

    function renderBtn() {
        let val = cart.length;
        if(!isLoaded) {
            if (val === 0) {
                return null;
            } else if (val <= 9) {
                return <div className="cart__count">{ cart.length }</div>
            } else {
                return <div className="cart__count">9</div>
            }
            
        }
    }

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
                    <div className="cart">
                        <img src={ process.env.PUBLIC_URL + '/assets//cart.png' }  alt="Cart" />
                    </div>

                    { renderBtn() }
                </div>
            </div>

            <Link to="/shop" className="c-msg">
                Shop now
            </Link>
        </div>
    );
}

export default MainHeader;