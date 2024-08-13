import PropTypes from 'prop-types';
import { ProductCardView } from './ProductCardView';
import { useEffect, useState } from "react";
import { getProducts } from '../services/getProducts';
import { Alert } from './Alert';

export const CatalogView = ({ title, handlerAddProductCart }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
    }, []);

    return (
        <>
            <h2>{title}</h2>
            <div className="container">
                <div className="container">
                    <Alert type="success" msg="Producto añadido correctamente" isVisible={false} />
                </div>

                <div className="row">
                    {products.map(product => {
                        const { id, name, description, price } = product;
                        return (
                            <div className="col-4 my-3" key={id}>
                                <ProductCardView
                                    id={id}
                                    name={name}
                                    description={description}
                                    price={price}
                                    handlerAddProductCart={handlerAddProductCart} />
                            </div>
                        );
                    })}
                </div> {/* row */}
            </div> {/* Container productos */}
        </>
    );
};

CatalogView.propTypes = {
    title: PropTypes.string.isRequired,
    handlerAddProductCart: PropTypes.func.isRequired
}