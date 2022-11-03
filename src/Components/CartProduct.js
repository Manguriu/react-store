import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext"
import { useContext } from "react"
import { getProductData } from "../productStore"
 
function CartProduct(props){
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
return(
    <>
        <h3>{productData.title}</h3>
        <p>{quantity} Total</p>
        <p>Ksh {()}</p>
    </>
)

}

export default Cartproduct;