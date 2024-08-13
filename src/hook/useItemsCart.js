import { useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer.js";

const initialCartItems = sessionStorage.getItem("cart")? JSON.parse(sessionStorage.getItem("cart")): [];

export const useItemsCart = () => {
    
    const [cartItem, dispacher] = useReducer(cartReducer, initialCartItems);

    const handlerAddProductCart = (product) => {
        const existProduct = cartItem.find(i => i.product.id === product.id);
        if(existProduct){
            dispacher({type: 'UpdateProductCart', product: product});
        } else {
            dispacher({type: 'AddProductCart', product: product});
        }
    }

    const handlerRemoveProductCart = (product) => {
        dispacher({type: 'RemoveProductCart', product: product});
    };

    return {
        cartItem,
        handlerAddProductCart,
        handlerRemoveProductCart
    };
};
