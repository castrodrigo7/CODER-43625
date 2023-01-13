import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);

    const decrementarStock = () => {
        if (counter > 1) {
        setCounter(counter - 1);
        }
    }

    const incrementarStock = () => {
        if (counter < itemStock) {
        setCounter(counter + 1);
        }
    } 

    const addToCart = (quantity) => {
        if (counter <= itemStock) {
            setCounter(1);
            setItemStock(itemStock - quantity);
            setVendido(true);
            onAdd(quantity);
        }
        
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])
    
    return (
        <div>
            <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                <button type="button" className="btn btn-outline-dark " onClick={decrementarStock}>-</button>
                <button className="btn btn-outline-dark">{counter}</button>
                <button type="button" className="btn btn-outline-dark" onClick={incrementarStock}>+</button>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {vendido ? <Link to={"/cart"} className="btn btn-primary rounded-pill">Terminar Mi Compra</Link> : <button className="btn btn-primary rounded-pill" type="button" onClick={() => {addToCart(counter)}}>Comprar ahora</button>}
            </div>
        </div>
    )

}

export default ItemCount;