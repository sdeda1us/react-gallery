import React, { Component } from 'react';
import '../App/App.css';

class Form extends Component{

    render(){
        return(
            <form className="formBackground">
                <h4>Add another image!</h4>
                <label>URL</label>
                <input type="text" onChange={this.props.handlechange('path')}/>
                <label>Description</label>
                <input type="text" onChange={this.props.handlechange('description')}/>
                <button onClick={(event) => this.props.addimage(event)}>Submit</button>
            </form>
        )
    }
}

export default Form;