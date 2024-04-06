/*class ProductManager {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title; //nombre dell producto
    this.description = description; // descripcion del producto
    this.price = price; //precio
    this.thumbnail = thumbnail; //ruta de imagen
    this.code = code; //codigo identificador
    this.stock = stock; //numero de piezas disponibles
    ///this.products = {this.title} $ {this.description} ${this.price} ${this.thumbnail} ${this.code} ${this.stock};
  }




      this.title = title; //nombre dell producto
    this.description = description; // descripcion del producto
    this.price = price; //precio
    this.thumbnail = thumbnail; //ruta de imagen
    this.code = code; //codigo identificador
    this.stock = stock; //numero de piezas disponibles
    this.products = `${this.title} ${this.description} ${this.price} ${this.thumbnail} ${this.code} ${this.stock}`;
  }



  addProduct() {
    const product1 = new ProductManager(
      "tornillo",
      "tornillo con rosca",
      20,
      (URL = "assets"),
      1,
      20
    );
    const product2 = new ProductManager(
      "tornillo",
      "tornillo con rosca",
      20,
      (URL = "assets"),
      1,
      20
    );

    getProducts = () => {
      console.log(product1.addProduct);
    };

    getProducts();
  }
}

/*getProducts = () => {
  console.log(product1);
};

getProducts();*/ /*
class ProdcutManager {
  constructor() {
    this.products = [];
    this.id = 1;
  }

  addProduct() {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
    }

    getProducts();
    {
      return this.products;
    }

    getProductById(id);
    {
    }
  }
}

const pm = new ProdcutManager();

pm.addProduct("Producto test 1", "descripcion 1", 11, "img1.jpg", "1111", 1);
pm.addProduct("Producto test 2", "descripcion 2", 22, "img1.jpg", "2222", 2);
pm.addProduct("Producto test 3", "descripcion 3", 33, "img1.jpg", "3333", 2);

console.log(pm.getProducts());

console.log(pm.getProductById(1));

*/

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

pm.addProduct("Producto test 1", "descripcion 1");
pm.addProduct("Producto test 2", "descripcion 2");
pm.addProduct("Producto test 3", "descripcion 3");

console.log(pm.getProducts());

//console.log(pm.getProductById(1));
