import { Link } from "react-router-dom";

const ProductCard = (props) => {
    return (
        <div className="product__card">
            <img src = { process.env.PUBLIC_URL + props.data.photo } alt={ props.data.name } />
            <div className="product__info">
                <div className="text">
                    <h3>{ props.data.name }</h3>
                    <div className="price">{ props.data.price }</div>
                </div>
                {props.data.sold_out === false && <Link className="view" to={ props.data.url }>view</Link>}
                {props.data.sold_out === true && <Link className="view sold" to={ props.data.url + props.data.id }>sold</Link>}
            </div>
        </div>
    );
}

export default ProductCard;