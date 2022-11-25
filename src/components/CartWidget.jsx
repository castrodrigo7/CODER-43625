import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-white position-relative">
            <img src={"images/cart.svg"} alt={"carrito"} width={"20"} />
            <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-dark">1</span>
        </button>
    )
}

export default CartWidget;