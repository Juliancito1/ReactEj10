import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario'

function App() {

  return (
    <>
      <section className='paginaPrincipal'>
      <Formulario></Formulario>
      </section>
      <footer className='bg-dark text-light py-4 text-center'>
        <p>&copy; Todos los Derechos Reservados</p>
      </footer>
    </>
  )
}

export default App
