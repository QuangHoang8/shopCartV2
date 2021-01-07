const numberFormat = (number) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number);

export default numberFormat;
