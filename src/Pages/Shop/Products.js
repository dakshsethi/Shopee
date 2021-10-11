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
                {isLoaded && <div>Loading Your Tasks...</div> }

                {products && products.map((product) => (
                    <ProductCard key={ product.id } data={ product } />
                ))}
            </div>
        </div>

    );
}

export default Products;