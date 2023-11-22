class ProductManager{
    constructor(){
        this.products = [];
    }

    getProducts=[]

    static id = 0;

    addProducts(title, description, price, thumbnail, code, stock, id){
         id=id++
        const products = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock          
           }  
    }
    getProducts(){
        return products.push()
    }
}
const productManager1 = new ProductManager()
productManager1.addProduct( "producto prueba", "Este es un producto prueba",200,"Sin imagen","abc123",25)