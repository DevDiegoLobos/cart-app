import { Link } from "react-router-dom";

export const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">CartApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/catalog'}>Catálogo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/cart'}>Carrito</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
