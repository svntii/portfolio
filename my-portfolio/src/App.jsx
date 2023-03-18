import React from 'react';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Work from './components/work/Work';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;