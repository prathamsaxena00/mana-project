import React from 'react'
import Navigation from './nav'
import Banner from './banner'
import Subbanner from './subbanner'
import Mombanner from './mombanner'
import Customer from './customer'
import Footer from './footer'

export default function Home() {
  return (
    <div>
      <Navigation/>
    <Banner/>
    <Subbanner/>
    <Mombanner/>
    <Customer/>
    <Footer/>
    </div>
  )
}
