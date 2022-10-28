import { createContext, createContext, useState } from "react";
import { productsArray } from "./ProductStore";

export const createContext = createContext((
    items:[],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
));

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    
    function getProductQuantity(id) {
        const quatity = cartProducts.find(prodcut => productsArray.id === id)?.quantity;

        if (quantity === undefined){
            return 0;
        }
        return quantity;
    }

    const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    deleteFromCart,
    getTotalCost,
}
    return(
        <createContext.Provider value ={contextValue}>
            {children}
        </createContext.Provider>
    )
}