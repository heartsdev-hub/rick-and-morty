import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <p className="brand-kicker">404</p>
        <h1>Ruta no encontrada</h1>
        <p>La pagina que buscabas no existe dentro de esta app.</p>
        <Link to="/" className="primary-button link-button">
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
