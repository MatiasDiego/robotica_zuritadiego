import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="py-3 footer">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item footer_item">
                    <Link to="/" className="footer-link">
                        Inicio
                    </Link>
                </li>
                <li className="nav-item footer_item">
                    <Link to="/category/1" className="footer-link">
                        Robots
                    </Link>
                </li>
                <li className="nav-item footer_item">
                    <Link to="/category/2" className="footer-link">
                        Piezas
                    </Link>
                </li>
                <li className="nav-item footer_item">
                    <Link to="/contacto" className="footer-link">
                        Contacto
                    </Link>
                </li>
            </ul>
            <p className="text-center text-muted">© 2021 ROBOT.ICA - All rights reserved</p>
        </footer>
    )
}

export default Footer;