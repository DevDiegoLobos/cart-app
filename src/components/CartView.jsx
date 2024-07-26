import PropTypes from 'prop-types';

const checkLengthCart = (cartItem) => {
    console.log(cartItem.length);
    if (cartItem.length != 0) {
        return (
            <>
                {cartItem.map(item => {
                    const { id, name, price } = item;
                    return (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{price}</td>
                            <td>cantidad</td>
                            <td>total</td>  
                            <td>
                                <button className='btn btn-danger btn-sm'>X</button>
                            </td>
                        </tr>
                    )
                })}

            </>
        );
    } else {
        return (
            <>
                <td colSpan="5" className='text-center'>No hay elementos en el carrito</td>
            </>
        );
    }
}

export const CartView = ({ title, cartItem }) => {
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
                    {checkLengthCart(cartItem)}
                </tbody>
                <tfoot className="table-dark">
                    <tr >
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="fw-bold">total</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};

CartView.propTypes = {
    title: PropTypes.string.isRequired,
    cartItem: PropTypes.array.isRequired
}