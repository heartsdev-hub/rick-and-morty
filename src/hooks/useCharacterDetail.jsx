import { useEffect, useState } from 'react'
import { getCharacterById } from '../services/characterService.jsx'

export function useCharacterDetail(characterId) {
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadCharacter() {
      setLoading(true)
      setError('')

      try {
        const data = await getCharacterById(characterId, {
          signal: controller.signal,
        })
        setCharacter(data)

        if (!data) {
          setError('No encontramos ese personaje.')
        }
      } catch (fetchError) {
        if (fetchError.name === 'AbortError') {
          return
        }

        setCharacter(null)
        setError('Hubo un problema al cargar el detalle del personaje.')
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadCharacter()

    return () => controller.abort()
  }, [characterId])

  return {
    character,
    loading,
    error,
  }
}
