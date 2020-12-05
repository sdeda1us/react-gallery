import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    imageList: []
  }

  componentDidMount(){
    this.getImages();
  }

  addLike = (id) => {
    axios.put(`/gallery/like/`, {params: {id: id}, {likes:likes})
    .then((response) => {
      this.getImages();
    })
    .catch((error) => {
      alert('Something Bad Happened!!')
      console.log('Error:', error);
    })
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



  


  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <div className="imageFrame">
        <GalleryList imagelist={this.state.imageList} addlike={this.addLike} toggleimage={this.toggleImage}/>
        </div>
      </div>
    );
  }
}

export default App;
