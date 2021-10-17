import CartArea from "./CartArea";
import CartHeader from "./CartHeader";

const Cart = (props) => {
    const { cartItems, onAdd, onRemove } = props;

    return (
        <div>
            <CartHeader cartItems={ cartItems } />
            <CartArea cartItems={ cartItems } onAdd={ onAdd } onRemove={ onRemove } />
        </div>
    );
}

export default Cart;