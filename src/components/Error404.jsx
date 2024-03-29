import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container my-5">
        <div class="alert alert-primary d-flex align-items-center " role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" width={100} viewBox="0 0 16 16" role="img" aria-label="Warning:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div className="ps-5">
                <h3 class="alert-heading">La página solicitada no está disponible</h3>
                <p>Probablemente la dirección que ingresó es incorrecta, no existe o tiene un enlace roto. Para obtener más información, consulte el mapa del sitio</p>
                <Link to={"/"} class="alert-link">Ir a la página de inicio de Samsung</Link>
            </div>
        </div>
    </div>
  )
}

export default Error404