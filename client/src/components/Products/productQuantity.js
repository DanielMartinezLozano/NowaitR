export default function productQuantity(product, orderList) {
  let quantity = 0;
  const productFound = orderList.find((productOrder) => productOrder.product.name === product.name);
  if (productFound) {
    quantity = productFound.quantity;
  }
  return quantity;
}
