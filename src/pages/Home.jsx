import React from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Features from '../components/Features'
import MobilePatient from '../components/MobilePatient'
import MobileDoctor from '../components/MobileDoctor'

const Home = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <Section/>
        <Features/>
        <MobilePatient/>
        <MobileDoctor/>
    </React.Fragment>
  )
}

export default Home