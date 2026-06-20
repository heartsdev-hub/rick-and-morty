import { Link } from 'react-router-dom'

function CharacterCard({ character, isFavorite, onToggleFavorite }) {
  return (
    <article className="character-card">
      <Link to={`/character/${character.id}`} className="card-media-link">
        <img src={character.image} alt={character.name} />
      </Link>

      <div className="character-copy">
        <p className="status-pill">{character.status}</p>
        <h3>
          <Link to={`/character/${character.id}`} className="card-title-link">
            {character.name}
          </Link>
        </h3>
        <p>
          <span>Especie:</span> {character.species}
        </p>
        <p>
          <span>Origen:</span> {character.origin.name}
        </p>
        <p>
          <span>Ubicacion:</span> {character.location.name}
        </p>

        <button
          type="button"
          className={isFavorite ? 'favorite-button active' : 'favorite-button'}
          onClick={() => onToggleFavorite(character)}
        >
          {isFavorite ? 'Quitar de favoritos' : 'Anadir a favoritos'}
        </button>
      </div>
    </article>
  )
}

export default CharacterCard
