class ProductManager {
  constructor() {
    this.products = [];
    this.id = ProductManager.generarId();
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    this.products.push(title, description, price, thumbnail, code, stock);
  }

  static generarId() {
    if (!ProductManager.contador) {
      ProductManager.contador = 1;

      return ProductManager.contador++;
    }
  }

  getProducts() {
    return this.products;
  }
}

const pm = new ProductManager("ProductManager 1");
pm.addProduct("Producto test 1", "descripcion 1", 11, "assets", 1, 11);

const pm2 = new ProductManager();
pm2.addProduct("Producto test 2", "descripcion 2", 22, "assets2", 2, 22);

console.log(pm.getProducts());
console.log(pm2.getProducts());

console.log(pm);
