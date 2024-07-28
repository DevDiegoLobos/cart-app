import PropTypes from 'prop-types';

export const ProductCardView = ({ id, name, description, price, handlerAddProductCart }) => {
    const onAddProduct= (product) => {
        handlerAddProductCart(product);
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"> Precio: {price}</p>
                    <a onClick={() => onAddProduct({id, name, description, price})} className="btn btn-primary">Añadir al carrito</a>
                </div>
            </div>
        </>
    );
};

ProductCardView.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    handlerAddProductCart: PropTypes.func.isRequired
}