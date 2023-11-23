class ProductManager{
    constructor (){
        this.products = [];
        
    
    }
    getProducts(){
        return this.products;
    }

    static id = 0;

    addProduct({ title, description, price, thumbnail, code, stock }) {
       
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
          throw new Error('El código del producto ya existe');
        }
        
        const id = this.generateUniqueId();
            const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
            };
    this.products.push(newProduct);
    return newProduct;
}
    getProductById(productId) {
    const product = this.products.find(product => product.id === productId);
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    return product;
  }
    generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}

const productManager = new ProductManager();
console.log(productManager.getProducts());
try {
    // Agregar un nuevo producto
    const newProduct = productManager.addProduct({
      title: 'producto prueba',
      description: 'Este es un producto prueba',
      price: 200,
      thumbnail: 'Sin imagen',
      code: 'abc123',
      stock: 25
    });
    console.log('Producto agregado:', newProduct);
  

    console.log(productManager.getProducts());
    productManager.addProduct({
        title: 'producto prueba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 25
      });
    } catch (error) {
      console.error('Error al agregar producto:', error.message);
    }
    
    try {
      // Obtener producto por ID (debería devolver el producto agregado anteriormente)
      const productId = productManager.getProducts()[0].id;
      const foundProduct = productManager.getProductById(productId);
      console.log('Producto encontrado por ID:', foundProduct);
    
      // Intentar obtener un producto con un ID inexistente (debería arrojar un error)
      productManager.getProductById('id_inexistente');
    } catch (error) {
      console.error('Error al obtener producto por ID:', error.message);
    }