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
      const product = JSON.parse(data, null, 2);
      return product;
    } catch (error) {
      console.error("Error de lectura", error);
    }
  }

  async getProductByid(id) {
    const data = await this.getProducts();
    const product = data.find((product) => product.id === id);
    if (product) {
      console.log(`Producto encontrado : ${product.title}`);
      return product;
    } else {
      console.log("Producto no guardado");
    }
  }

  async sellProductByid(id) {
    const data = await this.getProducts();
    const product = data.find((product) => product.id === id);
    try {
      await fs.promises.unlink(Almacenamiento);
      console.log("Producto eliminado");
    } catch (error) {
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

pm.sellProductByid(1);
