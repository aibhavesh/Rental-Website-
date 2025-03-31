import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Slider from './components/slider'
import Agents from './components/agents'
import AllRoutes from './routes/AllRoutes'

const app = () => {
  return (
    <>
   <Header/>
  <Slider/>
  <AllRoutes/>
  <Footer/>
    </>
  )
}

export default app