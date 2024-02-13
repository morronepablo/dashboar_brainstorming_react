import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aside from './components/Aside'
import ContentCore from './components/contentcore/ContentCore'
import ContentDataTableProducts from './components/contentcore/ContentDataTableProducts'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {
  return (
    
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Aside />
        <Routes>
          <Route path="/" element={<ContentCore />} exact={"true"} />
          <Route path="/allProducts" element={<ContentDataTableProducts />} exact={"true"} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}
