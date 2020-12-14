export default function totalPrice(orderList, sentList) {
  const totalOrder = orderList.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  const totalSent = sentList.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  const total = totalOrder + totalSent;
  return total.toFixed(2);
}
