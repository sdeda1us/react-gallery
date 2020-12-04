import React, { Component } from 'react';
import '../App/App.css';


class GalleryItem extends Component{

    render(){
        return(
            <div className="imageCard">
                <img src={this.props.image.path} className="imageDazzler" alt={this.props.image.description}/>
                    <button className="buttonStyle" onClick={(event) => this.props.addlike(this.props.image.id)}>Love it!</button>
                    <p>{this.props.image.likes === 0 ? `No people love this :(`:`${this.props.image.likes} people love this`}</p>
            </div>
        )
    }
}

export default GalleryItem;