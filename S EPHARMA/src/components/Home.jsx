import React from 'react'
import Banner from './Banner'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponsor from './Sponsor'
import HomeCategory from './HomeCategory'



const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <LocationSprade/>
      <AboutUs/>
      <AppSection/>
      <Sponsor/>    
    </div>
  )
}

export default Home
