import { Link } from "react-router-dom";
import RenderCart from "../../Data/RenderCart";

const ProductHeader = () => {
    return (
        <div className="header product">
            <div className="navigation">
                <div className="logo">
                    shopee
                </div>
                <div className="nav">
                    <ul>
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
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="cart">
                        <img src={ process.env.PUBLIC_URL + '/assets//cart.png' }  alt="Cart" />
                    </div>
                    <RenderCart />
                </div>
            </div>
        </div>
    );
}

export default ProductHeader;