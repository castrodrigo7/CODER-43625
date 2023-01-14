import { useState, useEffect } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "productos", id);
        getDoc(item).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.data());
                setItem({id:snapshot.id, ...snapshot.data()});
            } else {
                console.log("no se encuentra el producto");

            }

        });
    }, [id]);

  return (
    <div className="container my-5">
    <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer