import { useState, useEffect } from 'react';
import cart from './Cart';

const RenderCart = () => {

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

    let val = cart.length;
    if(!isLoaded) {
        if (val === 0) {
            return null;
        } else if (val <= 9) {
            return (<div className="cart__count">{ cart.length }</div>)
        } else {
            return (<div className="cart__count">9</div>)
        }
        
    } else {
        return null;
    }
    
}

export default RenderCart;