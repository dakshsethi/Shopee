import ShopHeader from "./ShopHeader";
import Products from "./Products";

const Shop = (props) => {
    const { cartItems } = props;
    
    return (
        <div>
            <ShopHeader cartItems={ cartItems } />
            <Products />
        </div>
    );
}

export default Shop;