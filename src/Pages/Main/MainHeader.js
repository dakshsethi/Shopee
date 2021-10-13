import { Link } from "react-router-dom";
import RenderCart from "../../Data/RenderCart";

const MainHeader = (props) => {
    
    const { cartItems } = props;

    return (
        <div className="header">
            <div className="navigation">
                <div className="logo">
                    shopee
                </div>
                <div className="nav">
                    <ul>
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
                    </ul>
                    <div className="cart">
                        <img src={ process.env.PUBLIC_URL + '/assets//cart.png' }  alt="Cart" />
                    </div>
                    <RenderCart cartItems={ cartItems } />
                </div>
            </div>

            <Link to="/shop" className="c-msg">
                Shop now
            </Link>
        </div>
    );
}

export default MainHeader;