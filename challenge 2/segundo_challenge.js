import { error } from "console";
import fs from "fs";

const Almacenamiento = "./productos.txt";

class ProductManager {
  constructor() {
    this.products = [];
    this.Id = 1;
  }

  async addProduct(title, description, price, thumbnail, code, stock) {
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

    const data = JSON.stringify(this.products, null, 2);

    try {
      await fs.promises.writeFile(Almacenamiento, data);
      console.log("Producto agregado al archivo");
    } catch (error) {
      console.error("Error en el guardado", error);
    }
  }

  async getProducts() {
    try {
      const data = await fs.promises.readFile(Almacenamiento, "utf-8");
      //const product = JSON.stringify(data);
      //product = this.products;
      return this.products;
    } catch (error) {
      console.error("Error de lectura", error);
    }
  }

  getProductByid(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      console.log(`Producto encontrado : ${product.title}`);
      console.log(product);
    } else {
      console.log("Producto no guardado");
    }
  }

  async sellProductByid(id) {
    //  const deleteProduct = this.products.filter((product) => product.id === id);
    const data = JSON.parse(this.products, null, 2);
    if (data == id) {
      //await deleteProduct  fs.promises.unlink(Almacenamiento);
      await fs.promises.unlink(Almacenamiento);
      console.log("Producto eliminado");
    } else {
      console.log("No se encontro el archivo");
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
