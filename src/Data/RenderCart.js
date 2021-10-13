import { useState, useEffect } from 'react';
import cart from './Cart';

const RenderCart = () => {

    const [isLoaded, setIsLoaded] = useState(true)
    const [items, setItems] = useState(null)
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     fetch(cart)
    //         .then(() => {
    //             setIsLoaded(false)
    //             setItems(cart)
    //             setCount(countItems())
                
    //         })
    //         .catch(err => console.log('An error occured - ' + err))
    // }, [items])

    useEffect(() => {
        setIsLoaded(false)
        setItems(cart)
        setCount(countItems())
    })

    function countItems() {
        let val = 0;
        cart.forEach(item => {
            if(item.count !== undefined)
                val = item.count;
            else
                val++;
        });
        return val;
    }

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