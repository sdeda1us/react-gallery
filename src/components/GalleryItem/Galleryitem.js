import React, { Component } from 'react';
import '../App/App.css';




class GalleryItem extends Component{

    state = {
        showImage: true
    }

    toggleImage = (showImage) => {
        this.setState({
          showImage: !this.state.showImage
      })
    }

    render(){
        return(
            <div className="imageCard">
                {/* <img onClick={(event)=> }src={this.props.image.path} className="imageDazzler" alt={this.props.image.description} /> */}
                    <div className="imageDazzler" onClick={(event)=> this.toggleImage(this.state.showImage)}>
                        {this.state.showImage === true ? <img className="imageDazzler" src={this.props.image.path} alt={this.props.image.description}></img> :  <span className="spanStyle">{this.props.image.description}</span>}                    
                    </div>
                    <button className="buttonStyle" onClick={(event) => this.props.addlike(this.props.image.id, this.props.image.likes)}>Love it!</button>
                    <button>Delete</button>
                    <p>{this.props.image.likes === 0 ? `No people love this :(`:`${this.props.image.likes} people love this`}</p>
                    
            </div>
        )
    }
}

export default GalleryItem;