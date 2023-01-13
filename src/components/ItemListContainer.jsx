import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { addDoc, collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

/*     useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");

        arrayProductos.forEach((item) => {
            addDoc(itemsCollection, {nombre:item.nombre, codigo:item.codigo, descripcion:item.descripcion, imagen:item.imagen, precio:item.precio, categoria:item.categoria, stock:item.stock});
        });
    }, []); */

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapshot) => {
            setItems(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ))
        });

    }, [id]);

    return (
        <div className="container my-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;