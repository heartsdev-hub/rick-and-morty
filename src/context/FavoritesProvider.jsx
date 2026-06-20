import { useCallback, useEffect, useMemo, useState } from 'react'
import { FavoritesContext } from './favoritesStore.jsx'

const FAVORITES_KEY = 'rick-and-morty-favorites'

function readFavorites() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const savedFavorites = window.localStorage.getItem(FAVORITES_KEY)
    return savedFavorites ? JSON.parse(savedFavorites) : []
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => readFavorites())

  useEffect(() => {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = useCallback((character) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.some((favorite) => favorite.id === character.id)) {
        return currentFavorites
      }

      return [...currentFavorites, character]
    })
  }, [])

  const removeFavorite = useCallback((characterId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((favorite) => favorite.id !== characterId),
    )
  }, [])

  const toggleFavorite = useCallback((character) => {
    setFavorites((currentFavorites) => {
      const exists = currentFavorites.some(
        (favorite) => favorite.id === character.id,
      )

      if (exists) {
        return currentFavorites.filter((favorite) => favorite.id !== character.id)
      }

      return [...currentFavorites, character]
    })
  }, [])

  const isFavorite = useCallback(
    (characterId) => favorites.some((favorite) => favorite.id === characterId),
    [favorites],
  )

  const value = useMemo(
    () => ({
      favorites,
      favoritesCount: favorites.length,
      addFavorite,
      removeFavorite,
      toggleFavorite,
      isFavorite,
    }),
    [addFavorite, favorites, isFavorite, removeFavorite, toggleFavorite],
  )

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}
