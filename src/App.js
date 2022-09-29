import React from 'react';
import './App.css';
import Footer from './Footer';
import Form2 from './Form2';



export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
         <Form2 />
         <Footer />
      </div >
    );
  }
}


