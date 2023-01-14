import { addDoc, collection, getFirestore} from "firebase/firestore";
import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"

const Checkout = () => {
    const {cart, clear, sumTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, phone:telefono, email:email},
            items: cart.map(item => ({id:item.id, title:item.nombre, quantity:item.quantity, price:item.precio, price_total:item.quantity * item.precio})),
            total: sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "ordenes");
        addDoc(ordersCollection, order).then(({id}) => {
            setOrderId(id);
            clear();
        });
    }

  return (
    <div className="container">
        <div className="row my-5">
            <div className="col-md-6">
                <form>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Teléfono</label>
                        <input type="number" className="form-control" id="telefono" placeholder="Ingrese su Teléfono" onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <button type="button" className="btn btn-primary rounded-pill" onClick={generarOrden}>Generar Pedido</button>
                </form>
            </div>
            <div className="col-md-6">
                <table class="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={80}/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle text-center">{item.quantity}</td>
                                    <td className="align-middle">${item.precio}</td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2} >&nbsp;</td> 
                                <td className="align-middle text-center"><b> Total a Pagar</b></td>
                                <td className="align-middle"><b> ${sumTotal()} </b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId !== "" ? <div className="alert alert-info" role="alert">Su orden es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
  )
}

export default Checkout