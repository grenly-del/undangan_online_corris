import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import routerConfig from './config/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={routerConfig}/>
  )
}

export default App
