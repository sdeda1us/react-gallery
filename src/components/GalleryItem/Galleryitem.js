import React, { Component } from 'react';
import '../App/App.css';

class GalleryItem extends Component{

    render(){
        return(
            <div>
                <img src={this.props.image.path} className="imageDazzler"/>
                <button onClick={(event) => this.props.addlike(this.props.image.id)}>Love it!</button>
                <p>{this.props.image.likes} people love this</p>
            </div>
        )
    }
}

export default GalleryItem;