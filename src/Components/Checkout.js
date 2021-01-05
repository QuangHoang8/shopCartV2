function Checkout({ subTotal }) {
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>${subTotal}</span>
          </li>
          <li>
            Tax <span>${subTotal * 0.1}</span>
          </li>
          <li className="total">
            Total <span>${subTotal + subTotal * 0.1}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}
export default Checkout;
