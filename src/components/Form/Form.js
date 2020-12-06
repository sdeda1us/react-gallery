import React, { Component } from 'react';
import '../App/App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Form extends Component{

    render(){
        return(
            <form className="formBackground"> 
                <h4>Add another image!</h4>
                <Grid container spacing={1} direction="row" justify="center" alignItems="center">
                    <TextField style= {{width:500}} id="outlined-basic" label="URL Path" variant="outlined" onChange={this.props.handlechange('path')}/>
                    <TextField style= {{width:500}} id="outlined-basic" label="Description" variant="outlined" onChange={this.props.handlechange('description')}/>
                    <Button variant="outlined" color="primary" size="large" onClick={(event) => this.props.addimage(event)}>Submit</Button>
                </Grid>
            </form>
        )
    }
}

export default Form;