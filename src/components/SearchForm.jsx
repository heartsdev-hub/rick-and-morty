import { useCallback, useRef, useState } from 'react'

const STATUS_OPTIONS = [
  { value: 'all', label: 'Todos' },
  { value: 'alive', label: 'Alive' },
  { value: 'dead', label: 'Dead' },
  { value: 'unknown', label: 'Unknown' },
]

function SearchForm({ initialQuery, initialStatus, onSearch }) {
  const inputRef = useRef(null)
  const [query, setQuery] = useState(initialQuery)
  const [status, setStatus] = useState(initialStatus)

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      onSearch({ query, status })
    },
    [onSearch, query, status],
  )

  const handleClear = useCallback(() => {
    setQuery('')
    setStatus('all')
    onSearch({ query: '', status: 'all' })
    inputRef.current?.focus()
  }, [onSearch])

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="search-box">
        <span>Buscar personaje</span>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ejemplo: Rick, Morty..."
        />
      </label>

      <label className="search-box">
        <span>Estado</span>
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          {STATUS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div className="search-actions">
        <button type="submit" className="primary-button">
          Buscar
        </button>
        <button type="button" className="secondary-button" onClick={handleClear}>
          Limpiar
        </button>
      </div>
    </form>
  )
}

export default SearchForm
