import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/Galleryitem';

class GalleryList extends Component{

    

    render(){
        return(
            <>
            {this.props.imagelist.map((image) => 
                <GalleryItem image={image} key={image.key} addlike={this.props.addlike} 
                                toggleimage={this.props.toggleimage} deleteimage={this.props.deleteimage}/>
            )
            }
            </>
        )
    }
}

export default GalleryList;