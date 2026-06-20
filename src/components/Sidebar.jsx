import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites.jsx'
import SearchForm from './SearchForm'

function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { favoritesCount } = useFavorites()
  const params = new URLSearchParams(location.search)
  const initialQuery = location.pathname === '/' ? params.get('name') ?? '' : ''
  const initialStatus =
    location.pathname === '/' ? params.get('status') ?? 'all' : 'all'

  function handleSearch({ query, status }) {
    const nextParams = new URLSearchParams()

    if (query.trim()) {
      nextParams.set('name', query.trim())
    }

    if (status !== 'all') {
      nextParams.set('status', status)
    }

    nextParams.set('page', '1')

    navigate({
      pathname: '/',
      search: nextParams.toString() ? `?${nextParams}` : '',
    })
  }

  return (
    <aside className="sidebar">
      <div>
        <h1>Rick and Morty</h1>
      </div>

      <nav className="menu">
        <Link
          to="/?page=1"
          className={location.pathname === '/' ? 'menu-link active' : 'menu-link'}
        >
          <span>Inicio</span>
        </Link>
        <Link
          to="/favorites"
          className={
            location.pathname === '/favorites' ? 'menu-link active' : 'menu-link'
          }
        >
          <span>Favoritos</span>
          <strong>{favoritesCount}</strong>
        </Link>
      </nav>

      <SearchForm
        key={`${location.pathname}:${location.search}`}
        initialQuery={initialQuery}
        initialStatus={initialStatus}
        onSearch={handleSearch}
      />
    </aside>
  )
}

export default Sidebar
