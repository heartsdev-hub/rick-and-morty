import { useDeferredValue } from 'react'
import { useSearchParams } from 'react-router-dom'
import CharacterGrid from '../components/CharacterGrid'
import Pagination from '../components/Pagination'
import SectionHeader from '../components/SectionHeader'
import { useFavorites } from '../hooks/useFavorites.jsx'
import { useCharacters } from '../hooks/useCharacters.jsx'

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const name = searchParams.get('name') ?? ''
  const status = searchParams.get('status') ?? 'all'
  const rawPage = Number(searchParams.get('page') ?? '1')
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1
  const deferredName = useDeferredValue(name)
  const { isFavorite, toggleFavorite } = useFavorites()
  const { characters, info, loading, error } = useCharacters({
    name: deferredName,
    status,
    page,
  })

  function handlePageChange(nextPage) {
    const nextParams = new URLSearchParams(searchParams)
    nextParams.set('page', String(nextPage))
    setSearchParams(nextParams)
  }

  return (
    <div className="page-stack">
      <SectionHeader
        title="Inicio"
        extra={
          <div className="results-meta">
            <p className="page-indicator">
              {loading ? '...' : `Pagina ${page} de ${info?.pages ?? 1}`}
            </p>
          </div>
        }
      />

      <div className="pagination-top">
        <Pagination
          currentPage={page}
          totalPages={info?.pages ?? 0}
          onPageChange={handlePageChange}
        />
      </div>

      <CharacterGrid
        characters={characters}
        loading={loading}
        error={error}
        emptyMessage="No hay personajes para mostrar con esos filtros."
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  )
}

export default HomePage
