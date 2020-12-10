export function productQuantity(product, orderList) {
  let quantity = 0;
  const productFound = orderList.find((productOrder) => productOrder.product.name === product.name);
  if (productFound) {
    quantity = productFound.quantity;
  }
  return quantity;
}

export function isInFavs(product, favList) {
  return !!favList.find((favProduct) => product.name === favProduct.name);
}
