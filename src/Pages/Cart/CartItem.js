const CartItem = (props) => {
    const { data, onAdd, onRemove } = props;

    return (
        <div className="cart__item">
            <div className="item__photo">
                <img src = { process.env.PUBLIC_URL + data.photo } alt={data.name } />
            </div>
            <div className="item__info">
                <h2>{ data.name }</h2>
                <div className="desc">{ data.description }</div>
                <div className="count">
                    <h3>Quantity: </h3>
                    <button type="button" onClick={() => onRemove(data)}>-</button>
                    <span>{ data.count }</span>
                    <button type="button" onClick={() => onAdd(data)}>+</button>
                </div>
                <h3 className="total">{ 'Total = Rs. ' + data.count*data.price }</h3>
            </div>
        </div>
    );
}

export default CartItem;
