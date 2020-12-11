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

export function translateCategory(category) {
  let translation;
  switch (category) {
    case 'firsts':
      translation = 'Primeros';
      break;

    case 'seconds':
      translation = 'Segundos';
      break;

    case 'drinks':
      translation = 'Bebidas';
      break;

    case 'offers':
      translation = 'Ofertas';
      break;

    case 'desserts':
      translation = 'Postres';
      break;

    case 'tapas':
      translation = 'Tapas';
      break;

    default:
      break;
  }

  return translation;
}
