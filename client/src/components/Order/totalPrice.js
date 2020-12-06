export default function totalPrice(orderList) {
  const total = orderList.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  return total.toFixed(2);
}
