import { useState, useEffect } from 'react';
import cart from '../../Data/Cart';
import RenderCart from '../../Data/RenderCart';

const ProductDetail = (props) => {

    const [items, setItems] = useState(null)
    const [count, setCount] = useState(countItems())

    function handleCart() {
        const item = props.data;
        let itExists = 0;
        setItems((prev) => {
            prev.forEach(product => {
                if(product.id === props.data.id) {
                    if(product.count === undefined)
                        product.count = 2;
                    else
                        product.count++;
                    itExists = 1;
                }
            });

            if(!itExists) {
                prev[prev.length] = item;
            }
        })
        // console.log(cart, items);
        // cart = items;
        // setItems(items);
        setCount(countItems());
        console.log(count)

    }

    // useEffect(() => {
    //     fetch(cart)
    //         .then(() => {
    //             setItems(cart)
    //         })
    //         .catch(err => console.log('An error occured - ' + err))
    // }, [items])

    useEffect(() => {
        setItems(cart)
        // console.log("ran", count)
        setCount(countItems())
    }, [items])

    function countItems() {
        // console.log(cart)
        let val = 0;
        cart.forEach(item => {
            if(item.count !== undefined)
                val = item.count;
            else
                val++;
        });
        return val;
    }

    return (
        <div className="product__show">
            <div className="product__display">
                <div className="product__photo">
                    <img src = { process.env.PUBLIC_URL + props.data.photo } alt={ props.data.name } />
                </div>
                <div className="product__info">
                    <h1>{ props.data.name }</h1>
                    <p align="justify">
                        { props.data.description }
                    </p>
                    <RenderCart />
                    <h2>{ 'Rs. ' + props.data.price }</h2>
                    <button type="button" onClick={() => handleCart()}>add to cart</button>
                </div>
            </div>

        </div>
    );
}

export default ProductDetail;