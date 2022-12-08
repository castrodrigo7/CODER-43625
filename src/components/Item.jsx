import { Link } from "react-router-dom";
const Item = ({item}) => {
    return (
        <div className="col-md-4">
            <Link to={"/item/" + item.id} className="text-dark text-decoration-none">
                <div className="card text-center">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">$ {item.precio}</p>
                        <a href="#" className="btn btn-dark rounded-pill">Comprar</a>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;