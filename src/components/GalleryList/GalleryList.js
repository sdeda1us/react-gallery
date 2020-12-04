import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/Galleryitem';

class GalleryList extends Component{

    

    render(){
        return(
            <>
            {this.props.imagelist.map((image) => 
                <GalleryItem image={image} />
            )
            
            }
            </>
        )
    }
}

export default GalleryList;