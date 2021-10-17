import { useState, useEffect } from "react";
import CartItem from "./CartItem";

const CartArea = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    const [isLoaded, setIsLoaded] = useState(true)
    const [items, setItems] = useState([])

    useEffect(() => {
        setIsLoaded(false)
        setItems(cartItems)
    }, [cartItems])

    return (
        <div className="cart__area">
            <div className="cart__show">
                {isLoaded ? <h1>Loading Your Cart...</h1> : <h1>Your Cart has {cartItems.length} items</h1>  }
                {items && cartItems.map((product) => (
                    <CartItem key={ product.id } data={ product } onAdd={ onAdd } onRemove={ onRemove } />
                ))}
            </div>
        </div>
    );
}

export default CartArea;