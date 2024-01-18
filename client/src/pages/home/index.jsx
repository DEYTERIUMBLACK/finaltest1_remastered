import React from 'react'
import Navbar from '../../components/navbar'
import Slider from '../../components/slider'
import Products from '../../components/products'
import About from '../../components/about'
import Team from '../../components/team'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Slider></Slider>
    <Products></Products>
    <About></About>
    <Team></Team>
    </>
    )
}

export default Home