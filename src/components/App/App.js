import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import Form from '../Form/Form';

class App extends Component {
  state = {
    imageList: [],
    newImage: [
      {path: ''},
      {description: ''}
    ]
  }

  componentDidMount(){
    this.getImages();
  }

  addLike = (id) => {
    console.log(id);
    axios.put(`/gallery/like/${id}`)
    .then((response) => {
      this.getImages();
    })
    .catch((error) => {
      alert('Something Bad Happened!!')
      console.log('Error:', error);
    })
  }

 addNewImage = () => {
   axios.post('/gallery', this.state.newImage)
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

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newImage: {
        ...this.state.newImage,
        [propertyName]: event.target.value
      },
    });
  }//end handleChangeFor

  


  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <Form addimage={this.addNewImage} handlechange={this.handleChangeFor}/>
        <br/>
        <div className="imageFrame">
        <GalleryList imagelist={this.state.imageList} addlike={this.addLike} toggleimage={this.toggleImage}/>
        </div>
      </div>
    );
  }
}

export default App;
