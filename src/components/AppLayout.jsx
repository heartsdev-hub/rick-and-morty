import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function AppLayout() {
  return (
    <main className="app-shell">
      <Sidebar />
      <section className="content-panel">
        <Outlet />
      </section>
    </main>
  )
}

export default AppLayout
