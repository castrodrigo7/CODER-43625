import { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);

    const decrementarStock = () => {
        if (counter > 1) {
        setCounter(counter - 1);
        }
    }

    const incrementarStock = () => {
        if (counter < stock) {
        setCounter(counter + 1);
        }
    }
    
    const  onAdd = () => {
        if (stock > 0) {
            console.log("Agregaste: " + counter + " Productos al carrito");
        }
    } 
    
    return (
        <div>
            <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                <button type="button" className="btn btn-outline-dark " onClick={decrementarStock}>-</button>
                <button className="btn btn-outline-dark">{counter}</button>
                <button type="button" className="btn btn-outline-dark" onClick={incrementarStock}>+</button>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary rounded-pill" type="button" onClick={onAdd}>Comprar ahora</button>
            </div>
        </div>
    )

}

export default ItemCount;