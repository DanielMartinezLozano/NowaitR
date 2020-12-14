const ip = '192.168.0.34';

const endpoints = {
  productsURL: `http://${ip}:4500/products/`,
  authURL: `http://${ip}:4500/users/auth/`,
  userURL: `http://${ip}:4500/users/`,
  usersURL: `http://${ip}:4500/users/auth/`,
  userFavURL: `http://${ip}:4500/users/favs/`,
  tableURL: `http://${ip}:4500/users/table/`,
};

export default endpoints;
