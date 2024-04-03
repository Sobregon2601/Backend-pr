class ProductManager {
  constructor() {
    this.title = []; //nombre dell producto
    this.description = []; // descripcion del producto
    this.price = []; //precio
    this.thumbnail = []; //ruta de imagen
    this.code = []; //codigo identificador
    this.stock = []; //numero de piezas disponibles
    // this.products = $ {this.title} $ {this.description} ${this.price} ${this.thumbnail} ${this.code} ${this.stock};
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
      console.log(product1);
    };

    getProducts();
  }
}

getProducts = () => {
  console.log(product1);
};

getProducts();
