import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        <Link to={"/cart"} type="button" className="btn btn-white position-relative">
            <img src="/images/cart.svg" alt="carrito" width="20" />
            <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-dark">{cartTotal()}</span>
        </Link>
    )
}

export default CartWidget;