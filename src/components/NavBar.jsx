import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <nav className="navbar navbar-expand-lg bg-white">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src="/images/samsung.png" alt="Samsung" width="120" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <b>
                                    <small>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/category/moviles"}>Móviles</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/category/tv y audio"}>TV & Audio</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/category/electrodomesticos"}>Electrodomésticos</NavLink>
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