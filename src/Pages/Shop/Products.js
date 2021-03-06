import { useState, useEffect } from 'react';
import ProductList from "../../Data/ProductList";
import ProductCard from './ProductCard';

const Products = () => {

    const [isLoaded, setIsLoaded] = useState(true)
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch(ProductList)
            .then(() => {
                setIsLoaded(false)
                setProducts(ProductList)
            })
            .catch(err => console.log('An error occured - ' + err))
    }, [products])

    return (
        <div className="products">
            <h1>Our Collection</h1>
            <div className="product__area">
                {isLoaded && <h1>Loading Products</h1> }

                {products && products.map((product) => (
                    <ProductCard key={ product.id } data={ product } />
                ))}
            </div>
        </div>

    );
}

export default Products;