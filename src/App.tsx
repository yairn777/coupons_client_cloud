import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/LayoutArea/Header/Header';
import Menu from './Components/LayoutArea/Menu/Menu';
import Footer from './Components/LayoutArea/Footer/Footer';
import Main from './Components/LayoutArea/Main/Main';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <Main/>
      <Menu/>

      {/* <Footer/> */}

    </div>
  );
}

export default App;
