import React, {Component} from 'react';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import '../App.css';
import Main from '../components/Main';



class App extends React.Component  {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
        
        
      </div>
    );
  }
  
}

export default App;
