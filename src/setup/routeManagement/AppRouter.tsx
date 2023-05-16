import { Route, Routes } from 'react-router-dom'
import { ToDos } from '../../pages/ToDos'
import { Home } from '../../pages/Home'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<ToDos />} />
    </Routes>
  )
}

export default AppRouter