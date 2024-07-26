import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

export const CartApp = () => {

    const [cartItem, setCartItem] = useState([{
        id:1,
        name:'Teclado Mecanico RGB',
        description:'Teclado mecanico con luces RGB switches cherry red',
        price: 1000
    }]);
    
    return (
        <>
            <div className="container">
                <CatalogView title='Card App'/>
                <div className="container">
                <CartView title='Resumen de compra' cartItem={cartItem}/>
                </div>
            </div>{/* Container Principal*/}
        </>
    );
}