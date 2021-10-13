import { useState, useEffect } from "react";
import CartItem from "./CartItem";

const CartArea = (props) => {
    const { cartItems, onAdd } = props;
    const [isLoaded, setIsLoaded] = useState(true)
    const [items, setItems] = useState([])

    useEffect(() => {
        setIsLoaded(false)
        setItems(cartItems)
    }, [items])

    return (
        <div className="cart__area">
            <div className="cart__show">
                {isLoaded ? <h1>Loading Your Cart...</h1> : <h1>Your Cart has {items.length} items</h1>  }
                {items && items.map((product) => (
                    <CartItem key={ product.id } data={ product } onAdd={ onAdd } />
                ))}
            </div>
        </div>
    );
}

export default CartArea;