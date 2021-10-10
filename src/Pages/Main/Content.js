import { Link, Route } from "react-router-dom";

const Content = () => {
    return (
        <div className="content__wrapper">
            <div className="content__area">
                <h1 style={{ marginTop: '2em' }}>Our Top Products</h1>
                <div className="ct">
                    <div className="left">
                        <img src={ process.env.PUBLIC_URL + '/assets//ct-1.jpg' } alt="content-1" />
                    </div>
                    <div className="right">
                        <h1>Apple iWatch Series 6</h1>
                        <div className="price">$699</div>
                        <div className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nulla vel justo volutpat laoreet eget ac leo. Sed dignissim, leo eu dapibus eleifend, quam leo porta purus, vel accumsan.
                        </div>
                        <Route>
                            <Link to="/shop" className="product">
                                view product
                            </Link>
                        </Route>
                    </div>
                </div>

                <div className="ct">
                    <div className="left" style={{ paddingRight: '2em' }}>
                        <h1>Apple iPhone 12 Pro</h1>
                        <div className="price">$999</div>
                        <div className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nulla vel justo volutpat laoreet eget ac leo. Sed dignissim, leo eu dapibus eleifend, quam leo porta purus, vel accumsan.
                        </div>
                        <Route>
                            <Link to="/shop" className="product">
                                view product
                            </Link>
                        </Route>
                    </div>
                    <div className="right">
                        <img src={ process.env.PUBLIC_URL + '/assets//ct-5.jpg' } alt="content-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;