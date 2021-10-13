import CartArea from "./CartArea";
import CartHeader from "./CartHeader";

const Cart = (props) => {
    const { cartItems, onAdd } = props;

    return (
        <div>
            <CartHeader cartItems={ cartItems } />
            <CartArea cartItems={ cartItems } onAdd={ onAdd } />
        </div>
    );
}

export default Cart;