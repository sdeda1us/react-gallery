import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    imageList: []
  }

  getImages = () => {
    axios.get('/gallery')
    .then((response) => {
      this.setState({
        imageList: response.data
      })
    })
    .catch((error) => {
      alert('Something Bad Happened!!')
      console.log('Error:', error);
    })
  }

  componentDidMount(){
  }


  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        
        <p>Gallery</p>
        <GalleryList />
      </div>
    );
  }
}

export default App;
