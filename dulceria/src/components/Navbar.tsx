import Link from "next/link";
import Image from "next/image";
import "../styles/custom.css"; 

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <Image className="mx-2" src="/assets/logo.png" alt="imagen" width={80} height={60} />
                <Link className="navbar-brand" href="/">
                    Dulcería
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">
                                Productos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/">
                                Acerca de
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}