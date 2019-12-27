import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Download from './components/Download'
import Features from './components/Features'
import Container from './components/Container'

function App() {
  return (
    <div >
      <Navbar />
      <Header />
      <Download />
      <Features />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
