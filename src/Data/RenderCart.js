import { useState, useEffect } from 'react';

const RenderCart = (props) => {
    const { cartItems } = props;
    const [isLoaded, setIsLoaded] = useState(true)
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        setIsLoaded(false)
        if(cartItems !== undefined)
            setCount(cartItems.length);
    })

    if(!isLoaded) {
        if (count === 0) {
            return null;
        } else if (count <= 9) {
            return (<div className="cart__count">{ count }</div>)
        } else {
            return (<div className="cart__count">9+</div>)
        }
    } else {
        return null;
    }
}

export default RenderCart;