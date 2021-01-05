import "./App.css";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Item from "./Components/Item";
import { useState } from "react";

const PRODUCTS = [
  {
    name: "Apple",
    description: "Delicious apple",
    image: "./img/apple.jpg",
    price: 2,
    quantity: 6,
  },
  {
    name: "Milk",
    description: "Delicious milk",
    image: "./img/milk.jpg",
    price: 4,
    quantity: 3,
  },
  {
    name: "Apple Fake",
    description: "Delicious milk",
    image: "./img/apple1.jpg",
    price: 2,
    quantity: 5,
  },
];

function App() {
  let [products, setProducts] = useState(PRODUCTS);

  let items = [];
  let totalItems = 0;
  let subTotal = 0;

  for (let i = 0; i < products.length; i++) {
    items.push(
      <Item
        key={products[i].name}
        src={products[i].image}
        name={products[i].name}
        description={products[i].description}
        price={products[i].price}
        quantity={products[i].price}
        onRemoveProduct={removeProduct}
        onChangeAmount={ChangeAmount}
      />
    );
    totalItems += products[i].quantity;
    subTotal += products[i].price * products[i].quantity;
  }
  function removeProduct(param) {
    alert(param);
    for (let i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].name === param) {
        PRODUCTS.splice(i, 1);
        let p = [...PRODUCTS];
        setProducts(p);
      }
    }
  }
  function ChangeAmount(param) {
    alert(param);
    for (let i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].name === param) {
        PRODUCTS[i].quantity = 6;
        let p = [...PRODUCTS];
        setProducts(p);
      }
    }
  }
  return (
    <div>
      <Header totalItems={totalItems} />

      <section className="container">
        <ul className="products">{items}</ul>
      </section>

      <Checkout subTotal={subTotal} />

      {/* <button onClick={removeProduct}>Fake remove</button> */}
    </div>
  );
}

export default App;
