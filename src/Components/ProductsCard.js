// eslint-disable-next-line no-unused-vars
import {Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';


function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    
    return(
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Ksh {product.price}</Card.Text>
                {productQuantity > 0 ?
                <>
                    <Form as={Row}>
                        <Form.Label column="true" sm="6">In cart: {productQuantity}</Form.Label>
                        <Col sm="5">
                            <Button sm="2" onClick={() => cart.addOneToCart(product.id)} className="mx-3">+</Button>
                            <Button sm="2" onClick={() => cart.removeOneFromCart(product.id)} className="mx-3">-</Button>
                        </Col>
                    </Form>
                <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)}classsName="my-2">Delete All</Button>
                </>
                :
             <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add Cart</Button>
            }
            </Card.Body>
        </Card>
    )

}

export default ProductCard;