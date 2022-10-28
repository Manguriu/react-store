const productsArray = [
    {
        id:"1",
        title:"coffe",
        price:1.99

    },
    {
        id:"2",
        title:"sunglasses",
        price:2.99

    },
    {
        id:"3",
        title:"camera",
        price:23.99

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