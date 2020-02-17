import React, { } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

class Search extends React.Component {
  
    //Funcion que ecucha cuando se cambia el valor del texto
    textChange = (e) =>{
        this.props.filterInput(e.target.value)
    }

    //Funcion que ecucha cuando se cambia el valor del check
    checkChange = (e) =>{
        this.props.checkInput(e.target.checked)
    }

    render() {
        return (
            <form>
                <img src='https://pngimage.net/wp-content/uploads/2018/06/productos-png-3.png' alt="Logo" height="200"/>
                <h1> ¡Productos! </h1>
                <TextField 
                style={{ masrginTop: '10%', width: '70%' }}
                label="Buscar..." 
                variant="filled" 
                value={this.props.filter}
                onChange={this.textChange}/>
                
                <br/><br/>

                <Checkbox
                checked={this.props.stock} 
                onChange={this.checkChange}
                />
                <label> Ocultar productos sin stock</label>

                <br/><br/>
            </form>
        );
    }
  }

  export default Search; 