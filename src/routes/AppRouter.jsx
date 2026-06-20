import { Route, Routes } from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import CharacterDetailPage from '../pages/CharacterDetailPage'
import FavoritesPage from '../pages/FavoritesPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/character/:characterId" element={<CharacterDetailPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRouter
