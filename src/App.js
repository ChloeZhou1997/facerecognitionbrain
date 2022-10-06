import './App.css';
import React, { Component } from 'react';
import Nav from './components/nav/Nav'
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelink/ImageLinkForm';
import Rank from './components/rank/Rank';
import 'tachyons';

export class App extends Component {
  
  render() {
    return (
      <div className='App'> 
        <Nav />
        <Logo />
        <Rank />
            <ImageLinkForm />
            {/*<FaceRecog/>*/}
      </div>
    );
  }
}


export default App;
