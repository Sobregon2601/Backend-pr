class ProductManager {
  constructor() {
    this.products = [];
    this.Id = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    if (this.products.some((products) => products.code === code)) {
      console.log(`El codigo ${code} de producto ya existe.`);
      return;
    }

    const product = {
      id: this.Id++,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };

    this.products.push(product);
    console.log("Producto agregado OK.");
  }

  getProducts() {
    console.log(this.products);
  }

  getProductByid(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      console.log(`Producto encontrado : ${product.title}`);
      console.log(product);
    } else {
      console.log("Producto no encontrado");
    }
  }
}

const pm = new ProductManager();

pm.getProducts();

pm.addProduct("Producto", "descripcion", 200, "images.jpg", "COO1", 25);
pm.addProduct("Producto2", "descripcion2", 300, "images.jpg", "COO1", 25);
pm.addProduct("Producto3", "descripcion3", 400, "images.jpg", "COO2", 35);

pm.getProductByid(1);
pm.getProductByid(4);
