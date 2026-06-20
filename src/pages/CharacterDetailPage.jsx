import { useNavigate, useParams } from 'react-router-dom'
import CharacterDetailCard from '../components/CharacterDetailCard'
import FeedbackState from '../components/FeedbackState'
import { useFavorites } from '../hooks/useFavorites.jsx'
import { useCharacterDetail } from '../hooks/useCharacterDetail.jsx'

function CharacterDetailPage() {
  const { characterId } = useParams()
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const { character, loading, error } = useCharacterDetail(characterId)

  if (loading) {
    return <FeedbackState message="Cargando detalle del personaje..." />
  }

  if (error || !character) {
    return <FeedbackState message={error || 'No encontramos ese personaje.'} tone="error" />
  }

  return (
    <CharacterDetailCard
      character={character}
      isFavorite={isFavorite(character.id)}
      onToggleFavorite={toggleFavorite}
      onBack={() => navigate(-1)}
    />
  )
}

export default CharacterDetailPage
