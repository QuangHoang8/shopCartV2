import "./App.css";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Item from "./Components/Item";
import { useState } from "react";
import { getPromotionCode } from "./Components/PromotionCode";

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
    price: 40,
    quantity: 3,
  },
  {
    name: "Apple Fake",
    description: "Delicious milk",
    image: "./img/apple1.jpg",
    price: 20,
    quantity: 5,
  },
  {
    name: "Car",
    description: "Sport car",
    image: "./img/car.jpg",
    price: 200000000,
    quantity: 1,
  },
  {
    name: "Bim",
    description: "Bim so sinh",
    image: "./img/bim.jpg",
    price: 2,
    quantity: 6,
  },
];

function App() {
  let [products, setProducts] = useState(PRODUCTS);
  let items = [];
  const handleChangedQuantity = (newQuantity, productName) => {
    const newProducts = products.map((product) => {
      if (product.name !== productName) {
        return product;
      }
      const newProduct = { ...product, quantity: parseInt(newQuantity) };
      return newProduct;
    });
    setProducts(newProducts);
  };

  products.map((product) => {
    return items.push(
      <Item
        key={product.name}
        src={product.image}
        name={product.name}
        description={product.description}
        price={product.price}
        quantity={product.quantity}
        onRemoveProduct={removeProduct}
        onQuantityChanged={handleChangedQuantity}
      />
    );
  });

  // Tính tổng sản phẩm và thành tiền
  const initialValue = 0;
  const totalItems = products.reduce(
    (total, product) => total + product.quantity,
    initialValue
  );
  const subTotal = products.reduce(
    (total, product) => total + product.quantity * product.price,
    initialValue
  );

  // Xóa sản phầm
  function removeProduct(name) {
    setProducts(products.filter((product) => product.name !== name));
  }

  let [percent, setPerCent] = useState(0);
  const handleChangedPromotionCode = (code) => {
    if (getPromotionCode().some((promotion) => promotion.code === code)) {
      setPerCent(
        getPromotionCode()
          .filter((promotion) => promotion.code === code)
          .map((prop) => prop.percent)[0]
      );
    } else {
      setPerCent(0);
    }
  };

  return (
    <div>
      <Header totalItems={totalItems} />

      <section className="container">
        <ul className="products">{items}</ul>
      </section>

      <Checkout
        subTotal={subTotal}
        discount={percent}
        onPromotionCodeChanged={handleChangedPromotionCode}
      />
    </div>
  );
}

export default App;
