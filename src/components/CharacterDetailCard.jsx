function CharacterDetailCard({ character, isFavorite, onToggleFavorite, onBack }) {
  return (
    <article className="detail-card">
      <div className="detail-actions">
        <button type="button" className="secondary-button" onClick={onBack}>
          Volver
        </button>
        <button
          type="button"
          className={isFavorite ? 'favorite-button active compact' : 'favorite-button compact'}
          onClick={() => onToggleFavorite(character)}
        >
          {isFavorite ? 'Quitar de favoritos' : 'Anadir a favoritos'}
        </button>
      </div>

      <div className="detail-layout">
        <img src={character.image} alt={character.name} className="detail-image" />

        <div className="detail-copy">
          <p className="status-pill">{character.status}</p>
          <h2>{character.name}</h2>
          <p>
            <span>Especie:</span> {character.species}
          </p>
          <p>
            <span>Genero:</span> {character.gender}
          </p>
          <p>
            <span>Origen:</span> {character.origin.name}
          </p>
          <p>
            <span>Ubicacion:</span> {character.location.name}
          </p>
          <p>
            <span>Episodios:</span> {character.episode.length}
          </p>
        </div>
      </div>
    </article>
  )
}

export default CharacterDetailCard
