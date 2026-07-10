import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCar from './components/AddCar'
import SearchCar from './components/SearchCar'
import DeleteCar from './components/DeleteCar'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddCar /> } />
          <Route path='/search' element={<SearchCar />} />
          <Route path='/delete' element={<DeleteCar />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App