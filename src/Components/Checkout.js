import numberFormat from "./FormatCurrency.js";
function Checkout({ subTotal, onPromotionCodeChanged, discount }) {
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input
          onChange={(e) => onPromotionCodeChanged(e.target.value)}
          type="text"
          id="promo-code"
        />{" "}
        <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{numberFormat(subTotal)}</span>
          </li>
          <li>
            VAT <span>{numberFormat(subTotal * 0.1)}</span>
          </li>
          <li className="total">
            Total <span>{numberFormat(subTotal + subTotal * 0.1)}</span>
          </li>
          <li>
            Discount{" "}
            <span>
              {numberFormat((discount * (subTotal + subTotal * 0.1)) / 100)}
            </span>
          </li>
          <li className="total">
            Payment{" "}
            <span>
              {numberFormat(
                subTotal +
                  subTotal * 0.1 -
                  (discount * (subTotal + subTotal * 0.1)) / 100
              )}
            </span>
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
