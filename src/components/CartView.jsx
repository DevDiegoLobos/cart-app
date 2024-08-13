import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const checkLengthCart = (cartItem, handlerRemoveProductCart) => {

    const onRemoveProductCart = (product) =>{
        handlerRemoveProductCart(product)
    }
    
    if (cartItem.length != 0) {
        return (
            <>
                {cartItem.map(item => {
                    const { id, name, price } = item.product;
                    const { quantity, total } = item;
                    return (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{price} $</td>
                            <td>{quantity}</td>
                            <td>{total} $</td>
                            <td>
                                <button
                                    onClick={() => onRemoveProductCart(item.product)}
                                    className='btn btn-danger btn-sm'>X</button>
                            </td>
                        </tr>
                    )
                })}

            </>
        );
    } else {
        return (
            <>
                <tr>
                    <td colSpan="5" className='text-center'>No hay elementos en el carrito</td>
                </tr>
            </>
        );
    }
}

const calculateTotal = (cartItem) => {
    const result = cartItem.reduce((acc, item) => {
        return item.total + acc;
    }, 0);
    return result;
}

export const CartView = ({ title, cartItem, handlerRemoveProductCart }) => {

    const [total, setTotal] = useState(0);
    
    useEffect(()=>{
        sessionStorage.setItem("cart", JSON.stringify(cartItem));
        setTotal(calculateTotal(cartItem));
    }, [cartItem]);

    return (
        <>
            <h3>{title}</h3>
            <table className="table table-striped w-50">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {checkLengthCart(cartItem, handlerRemoveProductCart)}
                </tbody>
                <tfoot className="table-dark">
                    <tr >
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="fw-bold">{ total } $</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};

CartView.propTypes = {
    title: PropTypes.string.isRequired,
    cartItem: PropTypes.array.isRequired,
    handlerRemoveProductCart: PropTypes.func.isRequired
}