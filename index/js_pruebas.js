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

  /* getProductById() {
    return this.id;
  }*/
}

const pm = new ProductManager("ProductManager 1");
pm.addProduct("Producto test 1", "descripcion 1", 11, "assets", 1, 11);

const pm2 = new ProductManager();
pm2.addProduct("Producto test 2", "descripcion 2", 22, "assets2", 2, 22);

console.log(pm.getProducts());
console.log(pm2.getProducts());

console.log(pm);

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
import fs from "fs";

const STORAGE = "./productos.txt";

class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  async addProduct(product) {
    const isValid =
      product.title &&
      product.description &&
      product.price &&
      product.thumbnail &&
      product.code &&
      product.stock;
    const isDuplicate = this.products.some((p) => p.code === product.code);

    if (isValid && !isDuplicate) {
      product.id = this.nextId++;
      this.products.push(product);

      const data = JSON.stringify(this.products, null, 2);

      try {
        await fs.promises.writeFile(STORAGE, data);
        console.log("Producto agregado correctamente");
      } catch (error) {
        console.error("Los datos no se guardaron", error);
      }
    } else {
      console.log(
        "Todos los campos son obligatorios o el código de producto ya existe"
      );
    }
  }

  async getProducts() {
    try {
      const data = await fs.promises.readFile(STORAGE, "utf-8");
      const products = JSON.parse(data);
      this.products = products;
      return this.products;
    } catch (error) {
      console.error("Error al leer el archivo:", error);
      return [];
    }
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      console.log("Producto encontrado:");
      console.log(product);
      return product;
    } else {
      throw new Error("Producto no encontrado");
    }
  }

  async updateProduct(id, updatedFields) {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
      const updatedProduct = {
        ...this.products[productIndex],
        ...updatedFields,
      };
      this.products[productIndex] = updatedProduct;

      const data = JSON.stringify(this.products, null, 2);

      try {
        await fs.promises.writeFile(STORAGE, data);
        console.log("Producto actualizado correctamente");
      } catch (error) {
        console.error("Error al actualizar el producto:", error);
      }
    } else {
      throw new Error("Producto no encontrado");
    }
  }

  async deleteProduct(id) {
    const updatedProducts = this.products.filter(
      (product) => product.id !== id
    );

    if (updatedProducts.length < this.products.length) {
      const updatedData = JSON.stringify(updatedProducts, null, 2);

      try {
        await fs.promises.writeFile(STORAGE, updatedData);
        console.log("Producto eliminado correctamente");
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
      }
    } else {
      throw new Error("Producto no encontrado");
    }
  }

  async deleteFile() {
    try {
      await fs.promises.unlink(STORAGE);
      console.log("Archivo eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar el archivo:", error);
    }
  }
}

async function testAddProducts() {
  const productManager = new ProductManager();

  await productManager.addProduct({
    title: "producto prueba 1",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "C001",
    stock: 25,
  });

  await productManager.addProduct({
    title: "producto prueba 2",
    description: "Este es un producto prueba",
    price: 400,
    thumbnail: "Sin imagen",
    code: "C002",
    stock: 55,
  });

  await productManager.addProduct({
    title: "producto prueba 3",
    description: "Este es un producto prueba",
    price: 300,
    thumbnail: "Sin imagen",
    code: "C003",
    stock: 30,
  });
}

async function testGetProducts() {
  const productManager = new ProductManager();
  const products = await productManager.getProducts();
  console.log(products);
}

async function testGetProductById() {
  const productManager = new ProductManager();
  try {
    await productManager.getProducts();
    await productManager.getProductById(3);
  } catch (error) {
    console.error(error.message);
  }
}

async function testUpdateProduct() {
  const productManager = new ProductManager();
  try {
    await productManager.getProducts();

    await productManager.updateProduct(1, {
      title: "Xiaomi 13 4G",
      price: 250,
    });
    console.log("Producto actualizado correctamente");
  } catch (error) {
    console.error("Error al actualizar el producto:", error.message);
  }
}

async function testDeleteProduct() {
  const productManager = new ProductManager();
  try {
    await productManager.getProducts();
    await productManager.deleteProduct(2);
  } catch (error) {
    console.error(error.message);
  }
}

async function testDeleteFile() {
  const productManager = new ProductManager();
  await productManager.deleteFile();
}

// Ejecutar las pruebas individualmente
//testAddProducts();
//testUpdateProduct();
//testGetProducts();
//testGetProductById();
//testDeleteProduct();
//testDeleteFile();

// Ejecutar todas las pruebas
/*  async function runTests() {
    await testAddProducts();
    await testGetProducts();
    await testGetProductById();
    await testUpdateProduct();
    await testDeleteProduct();
} 
runTests();  */
