const API_BASE_URL = 'https://rickandmortyapi.com/api'

export async function getCharacters(filters = {}, options = {}) {
  const params = new URLSearchParams()

  if (filters.name?.trim()) {
    params.set('name', filters.name.trim())
  }

  if (filters.status && filters.status !== 'all') {
    params.set('status', filters.status)
  }

  if (filters.page && filters.page > 1) {
    params.set('page', String(filters.page))
  }

  const response = await fetch(
    `${API_BASE_URL}/character${params.toString() ? `?${params}` : ''}`,
    {
      signal: options.signal,
    },
  )

  if (response.status === 404) {
    return {
      info: null,
      results: [],
    }
  }

  if (!response.ok) {
    throw new Error('No se pudo obtener la lista de personajes.')
  }

  return response.json()
}

export async function getCharacterById(characterId, options = {}) {
  const response = await fetch(`${API_BASE_URL}/character/${characterId}`, {
    signal: options.signal,
  })

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error('No se pudo obtener el detalle del personaje.')
  }

  return response.json()
}
