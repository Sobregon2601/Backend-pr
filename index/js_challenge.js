class ProductManager {
  constructor() {
    this.products = [];
    this.id = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    this.products.push(title, description, price, thumbnail, code, stock);
  }

  getProducts() {
    return this.products;
  }
}

const pm = new ProductManager();

pm.addProduct(
  "Producto test 1",
  "descripcion 1",
  11,
  "assets.imagen.jpg",
  1,
  11
);
pm.addProduct(
  "Producto test 2",
  "descripcion 2",
  22,
  "ssets.imagen.jpg",
  2,
  22
);
pm.addProduct(
  "Producto test 3",
  "descripcion 3",
  33,
  "assets.imagen.jpg",
  3,
  33
);

console.log(pm.getProducts());

//console.log(pm.getProductById(1));
