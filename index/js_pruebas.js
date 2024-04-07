/*

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

*/ /*
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
  static nextId = 1;
  constructor() {
    this.products = [];
    this.id = ProductManager.nextId++;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    this.products.push(title, description, price, thumbnail, code, stock);
  }

  /*  static generarId() {
    if (!this.nextId) {
      this.nextId = 1;
    }
    return this.nextId++;
  }
*/
  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products;
  }
}

const pm = new ProductManager();

pm.addProduct("Producto test 1", "descripcion 1", 11, "assets", 1, 11);
pm.addProduct("Producto test 2", "descripcion 2", 22, "assets", 2, 22);
pm.addProduct("Producto test 3", "descripcion 3", 33, "assets", 3, 33);

console.log(pm.getProducts());

console.log(pm.getProductById(1));
