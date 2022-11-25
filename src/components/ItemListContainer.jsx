import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container-fluid text-center alert alert-light" role="alert">
            <b><h5>{greeting}</h5></b>
        </div>
    )
}

export default ItemListContainer;