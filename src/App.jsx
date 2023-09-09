import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CarouselComponent } from './components/CarouselComponent';
import { NavbarComponent } from './components/NavbarComponent';
import { CardProductComponent } from './components/CardProductComponent';

function App() {

  const router = createBrowserRouter([
    {}
  ])

  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div style={{width: '300px', height: '200px'}}>
        <CardProductComponent />
      </div>
      {/* <CarouselComponent></CarouselComponent> */}
    </>
  )
}

export default App
