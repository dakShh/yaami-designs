import React from 'react'
import './App.css'
import Routes from './Components/Routes'

// ** Animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  Aos.init({
    duration: 1000,
    offset: 0
  })

  return (
    <div>
      <ScrollToTop />
      <Routes />
    </div>
  )
}

export default App
