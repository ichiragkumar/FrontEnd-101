
const ProductInfo = () => {
    const product = {   
        price: 1000,
        name:"iPhone 13",
        Availablity: true
    }
  return <div>
            Product Price :{product.price}
            Product Name :{product.name}
            Product Availablity : {product.Availablity}
    </div>

}

export default ProductInfo
