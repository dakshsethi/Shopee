import { useState, useEffect } from 'react';

const RenderCart = (props) => {
    const { cartItems } = props;
    const [isLoaded, setIsLoaded] = useState(true)
    const [count, setCount] = useState(0)

    function countItems() {
        let val = 0;
        if(cartItems !== undefined) {
            cartItems.forEach(item => {
                if(item.count !== undefined)
                    val += item.count;
                else
                    val++;
            });
            return val;
        }
    }
    
    useEffect(() => {
        setIsLoaded(false)
        if(cartItems !== undefined)
            setCount(countItems());
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