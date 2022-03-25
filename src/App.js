import React from 'react';
import { Brand, Navbar } from './component';
import { Footer, Possibility, Features, WhatGPT, Header} from './container';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <Footer />
    </div>
  )
}

export default App