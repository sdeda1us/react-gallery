import React, { Component } from 'react';

class Form extends Component{

    render(){
        return(
            <form>
                <h4>Add another image!</h4>
                <label>URL</label>
                <input type="text" />
                <label>Description</label>
                <input type="text" />
            </form>
           
        )
    }
}

export default Form;