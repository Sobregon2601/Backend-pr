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




import fs from 'fs'

const DESTINATION_FILE = './first_content.txt'
const ALTERNATIVE_FILE = './second_content.txt'
const currentDateTimeIso = new Date().toISOString()
const currentDateTimeLocale = new Date().toLocaleString()
ntent = fs.readFileSync(ALTERNATIVE_FILE, { encoding: 'utf-8'})
console.log(content)

fs.appendFileSync(DESTINATION_FILE, `${currentDateTimeLocale}\n`)
const content2 = fs.readFileSync(DESTINATION_FILE, { encoding: 'utf-8'})
console.log(content2)

// OPCION 2: fs ASINCRONO con callbacks
// Prueba de escritura y posterior lectura de archivo local
// Esta es una sintaxis alternativa utilizando callbacks. Recordar EVITAR
// un anidamiento muy pronunciado de los callbacks, utilizar solo 2 o 3 niveles
fs.appendFile(DESTINATION_FILE, `${currentDateTimeIso}\n`, (error) => {
    if (error) {
        console.log('No se pudo escribir el archivo: ', error.message)
        return
    }
    
    fs.readFile(DESTINATION_FILE, { encoding: 'utf-8'}, (error, result) => {
        if (error) {
            console.log('No se pudo leer el archivo: ', error.message)
            return
        }
        
        console.log(result)
    })
})

// Para integrar módulos externos a nuestro código, podemos utilizar tanto require como import
// import es la sintaxis que adpotaremos en el curso
// const fs = require('fs')
import fs from 'fs'

const DESTINATION_FILE = './first_content.txt'
const ALTERNATIVE_FILE = './second_content.txt'
const currentDateTimeIso = new Date().toISOString()
const currentDateTimeLocale = new Date().toLocaleString()


// OPCION 1: fs SINCRONO
// Pruebas de escritura y posterior lectura de archivo local
// Escribimos la fecha y hora actual a archivo, de forma síncrona, y luego lo leemos
// writeFileSync SOBREESCRIBE, appendFileSync AGREGA al final
// \n inserta un salto de línea
fs.writeFileSync(ALTERNATIVE_FILE, `Este es el SEGUNDO ARCHIVO\n${currentDateTimeLocale}\n`)
const content = fs.readFileSync(ALTERNATIVE_FILE, { encoding: 'utf-8'})
console.log(content)

fs.appendFileSync(DESTINATION_FILE, `${currentDateTimeLocale}\n`)
const content2 = fs.readFileSync(DESTINATION_FILE, { encoding: 'utf-8'})
console.log(content2)

// OPCION 2: fs ASINCRONO con callbacks
// Prueba de escritura y posterior lectura de archivo local
// Esta es una sintaxis alternativa utilizando callbacks. Recordar EVITAR
// un anidamiento muy pronunciado de los callbacks, utilizar solo 2 o 3 niveles
fs.appendFile(DESTINATION_FILE, `${currentDateTimeIso}\n`, (error) => {
    if (error) {
        console.log('No se pudo escribir el archivo: ', error.message)
        return
    }
    
    fs.readFile(DESTINATION_FILE, { encoding: 'utf-8'}, (error, result) => {
        if (error) {
            console.log('No se pudo leer el archivo: ', error.message)
            return
        }
        
        console.log(result)
    })
})
/*
**
 * 1- Leer archivo package.json
 * 2- Crear un objeto info con keys strContent, objContent y size.
 *    strContent debe tener el contenido de texto plano recuperado del archivo,
 *    objContent debe tener el contenido transformado a objeto de JS,
 *    size debe tener el tamaño en bytes del archivo
 * 3- Mostrar el objeto info por consola.
 * 4- Guardar el objeto info en un archivo info.json.
 * 5- Utilizar fs con promesas, sintaxis async / await y las utilidades JSON.parse() y JSON.stringify().
 */

// Importamos el módulo filesystem para manejo de archivos
import fs from 'fs'


// Constantes y variables globales
// Definimos un par de constantes para las ubicaciones de archivos
const CONFIG_FILE = './package.json'
const DESTINATION_FILE = './info.json'


// Funciones
// Declaramos una función asíncrona para aprovechar la sintaxis async / await.
// También podríamos utilizar el await directamente en el nivel principal (top level) del módulo.
const process = async () => {
    try {
        // Esperamos por el resultado en content, ahora utilizamos fs.promises
        const content = await fs.promises.readFile(CONFIG_FILE, { encoding: 'utf8' })
        // Volvemos a esperar por el resultado del parseo a JSON, es decir, convertimos
        // el texto recuperado del archivo en un OBJETO JSON que podemos operar en el código
        const jsonContent = await JSON.parse(content)

        // Hacemos una tercer espera usando el método stat (estadísticas)
        // Esto nos devolverá un objeto con info del archivo, por ejemplo su tamaño.
        const fileInfo = await fs.promises.stat(CONFIG_FILE)

        // Armamos el objeto info solicitado
        const info = {
            strContent: content,
            objContent: jsonContent,
            size: fileInfo.size // también podría ser directamente content.length
        }

        // Lo mostramos por consola y luego lo guardamos a disco
        console.log(info)
        // JSON.stringify(info, null, 2) permite agregar saltos de línea al escribir el contenido a archivo
        await fs.promises.writeFile(DESTINATION_FILE, JSON.stringify(info, null, 2))
    } catch (err) {
        console.error(err.message)
    }
}


// Flujo principal, solo se inicia la secuencia llamando a process()
process()



async getProducts() {
  try {
    const data = await fs.promises.readFile(Almacenamiento, "utf-8");
    //const product = JSON.parse(data);
    //this.products = product;
    return this.products;
  } catch (error) {
    console.error("Error de lectura", error);
  }
}




//Hola Mathias, el archivo se escribe bien, igual recorda que debe ser en formato .json, y en cuanto a los metodos getProducts(), getProductsById() y sellProductById(), se debe hacer en base al archivo y no desde el array de this.products por lo que la lectura y borrado del producto debe suceder en el archivo de los productos.



Te dejo de ayuda los metodos getProducts() y getProductsById() y resuelvas solo sellProductById()



async getProducts() {
    try {
      const data = await fs.promises.readFile(Almacenamiento, "utf-8");
      
      const product = JSON.parse(data, null, 2);


      return product
    } catch (error) {
      console.error("Error de lectura", error);
    }
  }


 async getProductByid(id) {
    const data = await this.getProducts();
    const product = data.find((product) => product.id === id);
    if (product) {
      console.log(`Producto encontrado : ${product.title}`);
      return product
    } else {
      console.log("Producto no guardado");
    }
  }

Cualquier duda, avisame.