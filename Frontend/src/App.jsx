import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IDEpage from './pages/IDEpage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IDEpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
