import {useState, useEffect, useContext} from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext)
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect(() => {
        setItemStock(item.stock);
    }, [item]);

  return (
    <div className="container">
        <div className="row my-5">
            <div className="col-md-4 offset-md-2">
                <img src={item.imagen} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4 offset-md-2">
                <h1>{item.nombre}</h1>
                <p>{item.codigo}</p>
                <span><b>$ {item.precio}</b></span>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
        <div>
            <h2>Descripción</h2>
            <p>{item.descripcion}</p>
        </div>
    </div>
  )
}

export default ItemDetail