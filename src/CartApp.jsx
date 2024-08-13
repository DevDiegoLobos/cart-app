import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hook/useItemsCart";
import { NavBar } from "./components/NavBar";

export const CartApp = () => {

    const { cartItem, handlerAddProductCart, handlerRemoveProductCart } = useItemsCart();
    
    return (
        <>
            <NavBar/>
            <div className="container my-4">
                <Routes>
                    <Route path="/" element={<Navigate to={'/catalog'}/>}/>
                    <Route
                        path="catalog"
                        element={<CatalogView title='Card App' handlerAddProductCart={handlerAddProductCart} />}
                    />
                    
                    <Route
                        path="cart"
                        element={<CartView title='Resumen de compra' cartItem={cartItem} handlerRemoveProductCart={handlerRemoveProductCart} />}
                    />
                </Routes>
            </div>{/* Container Principal*/}
        </>
    );
}