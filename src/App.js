import './App.css'
import React, { lazy, Suspense } from 'react'

import { Routes, Route } from 'react-router-dom'

import 'antd/dist/antd.css'
import './bootstrap.min.css'
import { Header, SimpleLoader, Footer } from './components'
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = () => {
  return (
    <Suspense
      fallback={
        <div className='col text-center p-5'>
          <SimpleLoader />
        </div>
      }
    >
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
      <Footer />
    </Suspense>
  )
}

export default App
