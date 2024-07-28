import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems = sessionStorage.getItem("cart")? JSON.parse(sessionStorage.getItem("cart")): [];

export const CartApp = () => {

    const [cartItem, setCartItem] = useState(initialCartItems);

    const handlerAddProductCart = (product) => {
        {/* Hacemos la verificación de si existe el producto son find */ }

        const hasItem = cartItem.find((i) => i.product.id === product.id);

        {/* Si existe el producto en el carrito actualiza el valor, si no lo crea */}
        if (hasItem) {
            setCartItem(cartItem.map((i) => {
                if (i.product.id === product.id){
                    i.quantity = i.quantity + 1;
                    i.total = i.product.price * i.quantity 
                }
                return i;
            }));
        } else {
            setCartItem(
                [...cartItem,
                {
                    product,
                    quantity: 1,
                    total: product.price * 1
                }]);
        }
    };

    const handlerRemoveProductCart = (product) => {
        setCartItem(cartItem.filter((i) => i.product.id !== product.id));
    };

    return (
        <>
            <div className="container my-4">
                <CatalogView title='Card App' handlerAddProductCart={handlerAddProductCart} />
                <div className="container">
                    <CartView title='Resumen de compra' 
                    cartItem={cartItem} 
                    handlerRemoveProductCart = {handlerRemoveProductCart}/>
                </div>
            </div>{/* Container Principal*/}
        </>
    );
}