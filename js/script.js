//array de productos
const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10},
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
    ];
//1.- Filter para productos con descuento usando la condicion discount

const discountedProducts = products.filter(product => product.discount > 0)
//mediante el método filter, discount > 0 comprobará los valores que sean mayor a 0

console.log(discountedProducts);
//visualización en consola, retorna un array con los productos que cumplan con dicha condición

//2.- Map para precio final usando la condición priceAfterDiscount
const productsWithFinalPrice = products.map(product => {

    const priceAfterDiscount = product.discount > 0 
      ? product.price * (1 - product.discount) 
      : product.price;
  
    return { ...product, priceAfterDiscount };
  });
  
  console.log(productsWithFinalPrice);
  //visualización en consola, retorna un array con los productos que cumplan con dicha condición

//sin prejuicio de lo anterior se pueden hacer ambas operaciones en un solo array sin embargo la petición en este caso es por separado

// 3.- Usar un bucle para identificar productos con menos de 5 unidades, se usa un nuevo array para productos con stock bajo

const stockBajo = []; // Array para almacenar productos con menos de 5 unidades

for (let i = 0; i < products.length; i++) {
    if (products[i].inventario < 5) {
    stockBajo.push(productos[i]);
    }
  }

console.log('Productos con stock bajo:', stockBajo);
//visualización en consola, retorna un array con los productos que cumplan con dicha condición


//4.- Actualizar stock de productos
const updateStock = (productName, quantityToAdd) => {
    try {
      // Buscar el producto en el array por su nombre
      const product = products.find(p => p.name === productName);
      
      // Si el producto no existe, se condiciona con un error
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      
      // Si el producto existe, aumentamos el stock 
      product.stock += quantityToAdd;

      console.log(`Stock de ${productName} actualizado. Nuevo stock: ${product.stock}`);
    } catch (error) {
      // En caso de error, mostramos el mensaje de error
      console.log(error.message);
    }
  };

//para saber acerca del producto "updateStock('Teclado', 5);" arrojará error,"Producto no encontrado"
// en el caso de "updateStock('Televisor', 5);" aumentará el producto en inventario arrojando en consola "Stock de Televisor actualizado. Nuevo stock: 13"

//5.- Resumen por categorias mediante un bucle, retornando un objeto
const categorySummary = products.reduce((acc, product) => {

// Verificamos si la categoría ya existe mediante el uso de la condicional if/else
    if (acc[product.category]) {
      acc[product.category] += 1; // Si existe, se suma 1
    } else {
      acc[product.category] = 1; // Si no existe, se crea la prop. con valor 1
    }
    return acc; // Devolvemos el acumulador para la siguiente iteración
  }, {}); // Inicializamos el acumulador como un objeto vacío
  
  console.log(categorySummary);
//visualización en consola, retorna un array con los productos que cumplan con dicha condición



