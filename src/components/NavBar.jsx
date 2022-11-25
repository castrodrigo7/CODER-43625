import React from "react";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-8">
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="images/samsung.png" alt="Samsung" width="120" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <b>
                                <small>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Móviles</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">TV & Audio</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Electrodomésticos</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Informática</a>
                                    </li>
                                </ul>
                                </small>
                            </b>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col-md-4 d-flex align-item-center justify-content-end">
                <form className="d-flex align-item-center justify-content-end" role="search">
                    <button type="button" className="btn btn-white position-relative"><img src="images/search.svg" alt="Search" /></button>
                </form>
                <CartWidget />
            </div>
        </div>
        </div>
    )
}

export default NavBar;