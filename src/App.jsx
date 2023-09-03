import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CarouselComponent } from './components/CarouselComponent';

function App() {

  const router = createBrowserRouter([
    {}
  ])

  return (
    <CarouselComponent></CarouselComponent>
  )
}

export default App
