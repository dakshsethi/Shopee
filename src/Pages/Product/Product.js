import { useParams } from "react-router"
import { useState, useEffect } from 'react';
import ProductDetail from "./ProductDetail";
import ProductHeader from "./ProductHeader";
import ProductList from "../../Data/ProductList";

const Product = () => {
    const { id } = useParams();
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

    return(
        <div>
            <ProductHeader />
            {isLoaded && <h1>Loading Your Product</h1>}
            <ProductDetail key={ ProductList[id-1].id } data={ ProductList[id-1] } />
        </div>
    );
}

export default Product;