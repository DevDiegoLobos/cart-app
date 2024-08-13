import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hook/useItemsCart";

export const CartApp = () => {
    
    const {cartItem, handlerAddProductCart, handlerRemoveProductCart} = useItemsCart();

    return (
        <>
            <div className="container my-4">
                <CatalogView title='Card App' handlerAddProductCart={(product) => {handlerAddProductCart(product)}} />
                <div className="container">
                    <CartView title='Resumen de compra' 
                    cartItem={cartItem} 
                    handlerRemoveProductCart = {handlerRemoveProductCart}/>
                </div>
            </div>{/* Container Principal*/}
        </>
    );
}