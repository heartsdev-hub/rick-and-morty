import CharacterCard from './CharacterCard'
import FeedbackState from './FeedbackState'

function CharacterGrid({
  characters,
  loading,
  error,
  emptyMessage,
  isFavorite,
  onToggleFavorite,
}) {
  if (loading) {
    return <FeedbackState message="Cargando personajes..." />
  }

  if (error) {
    return <FeedbackState message={error} tone="error" />
  }

  if (!characters.length) {
    return <FeedbackState message={emptyMessage} />
  }

  return (
    <div className="card-grid">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          isFavorite={isFavorite(character.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

export default CharacterGrid
