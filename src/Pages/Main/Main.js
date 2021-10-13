import MainHeader from "./MainHeader";
import Content from "./Content";

const Main = (props) => {
    const { cartItems } = props;

    return(
        <div>
            <MainHeader cartItems={ cartItems } />
            <Content />
        </div>
    );
}

export default Main;