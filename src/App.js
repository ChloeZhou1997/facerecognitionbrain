import './App.css';
import React, { Component } from 'react';
import Nav from './components/nav/Nav'
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelink/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from "react-tsparticles";
import 'tachyons';

const setting = {
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }
              }
export class App extends Component {
  
  render() {
    return (
      <div className='App'>
          <Particles 
                params={setting} 
            />

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
