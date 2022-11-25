import React from "react";

const Footer = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-8">
                <small><span>Copyright© 1995-2020 SAMSUNG Todos los Derechos Reservados. <p>Este sitio se ve mejor con Internet Explorer 11 o superior y las últimas versiones de Chrome y Mozilla Firefox</p> </span></small>
            </div>
            <div className="col-md-4">
                <small><span className="me-2">SÍGUENOS EN</span></small>
                <a href="https://www.facebook.com/SamsungArgentina" className="mx-1"><img src="images/facebook.svg" alt="facebook" /></a>
                <a href="https://twitter.com/SamsungArg" className="mx-1"><img src="images/twitter.svg" alt="twitter" /></a>
                <a href="https://www.instagram.com/SamsungArg/" className="mx-1"><img src="images/instagram.svg" alt="instagram" /></a>
                <a href="https://www.youtube.com/user/SamsungArgentina?&ab_channel=SamsungArgentina" className="mx-1"><img src="images/youtube.svg" alt="youtube" /></a>
            </div>
        </div>
        </div>
    )
}

export default Footer;