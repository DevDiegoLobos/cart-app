import { useEffect, useState } from "react";
import { getProducts } from "./services/getProducts";

export const CartApp = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(getProducts());
    }, []);

    return (
        <>
            <div className="container">
                <h2>Cart App</h2>
                <div className="container">
                    <div className="row">
                        {products.map(product => {
                            return (
                                <div className="col-4 my-3" key={product.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text"> Precio: {product.price}</p>
                                            <a href="#" className="btn btn-primary">Añadir al carrito</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div> {/* row */}
                </div>
            </div>{/* Container Principal*/}
        </>
    );
}