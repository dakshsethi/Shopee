const ProductDetail = (props) => {
    const { onAdd } = props;

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
                    <h2>{ 'Rs. ' + props.data.price }</h2>
                    <button type="button" onClick={() => onAdd(props.data) }>add to cart</button>
                </div>
            </div>

        </div>
    );
}

export default ProductDetail;