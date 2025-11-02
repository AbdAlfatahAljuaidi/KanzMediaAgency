import React from 'react'
import NavBar from '../NavBar/NavBar'
import Video from '../Video/Video'
import About from '../About/About'
import Services from '../Services/Services'
import Videos from '../Videos/Videos'
import Pricing from '../Pricing/Pricing'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Video />
        <About />
        <Services />
        <Videos />
        <Pricing />
        <Footer />
    </div>
  )
}

export default Home