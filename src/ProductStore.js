const productsArray = [
    {
        id:"1",
        title:"coffe",
        price:200.99

    },
    {
        id:"2",
        title:"sunglasses",
        price:300.99

    },
    {
        id:"3",
        title:"camera",
        price:23000.99

    },
]
function getproductData(id){
    let productData = productsArray.find(product => product.id === id)
    if (productData === undefined) {
        console.log("product data does not exixst for ID: " +id);
        return undefined;
    }
    return productData;
};
export { productsArray, getproductData };