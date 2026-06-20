import CharacterGrid from '../components/CharacterGrid'
import SectionHeader from '../components/SectionHeader'
import { useFavorites } from '../hooks/useFavorites.jsx'

function FavoritesPage() {
  const { favorites, isFavorite, toggleFavorite } = useFavorites()

  return (
    <div className="page-stack">
      <SectionHeader
        title="Favoritos"
        extra={<p className="results-count">{favorites.length} guardados</p>}
      />

      <CharacterGrid
        characters={favorites}
        loading={false}
        error=""
        emptyMessage="Todavia no agregaste personajes a favoritos."
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  )
}

export default FavoritesPage
