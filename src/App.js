import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Tienda Online Samsung. En nuestra Tienda vas a encontrar tecnología inteligente."}/>
      <Footer />
    </div>
  );
}

export default App;
