import { useEffect, useState } from 'react'
import { getCharacters } from '../services/characterService.jsx'

export function useCharacters({ name = '', status = 'all', page = 1 }) {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadCharacters() {
      setLoading(true)
      setError('')

      try {
        const data = await getCharacters({ name, status, page }, { signal: controller.signal })
        setCharacters(data.results ?? [])
        setInfo(data.info ?? null)
      } catch (fetchError) {
        if (fetchError.name === 'AbortError') {
          return
        }

        setCharacters([])
        setInfo(null)
        setError('Hubo un problema al cargar los personajes.')
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadCharacters()

    return () => controller.abort()
  }, [name, page, status])

  return {
    characters,
    info,
    loading,
    error,
  }
}
