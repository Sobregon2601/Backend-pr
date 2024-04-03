class ProductManager {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title; //nombre dell producto
    this.description = description; // descripcion del producto
    this.price = price; //precio
    this.thumbnail = thumbnail; //ruta de imagen
    this.code = code; //codigo identificador
    this.stock = stock; //numero de piezas disponibles
    ///this.products = {this.title} $ {this.description} ${this.price} ${this.thumbnail} ${this.code} ${this.stock};
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

getProducts();*/
