import React, { Component } from 'react';

class Form extends Component{

    render(){
        return(
            <form>
                <h4>Add another image!</h4>
                <label>URL</label>
                <input type="text" onChange={this.props.handlechange}/>
                <label>Description</label>
                <input type="text" onChange={this.props.handlechange}/>
                <button onClick={this.props.addimage}>Submit</button>
            </form>
        )
    }
}

export default Form;