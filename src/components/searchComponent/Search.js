import React, { Component } from 'react';

class Search extends React.Component {

    constructor(props){
        super(props);
    }
  
    //Funcion que ecucha cuando se cambia el valor del texto
    textChange = (e) =>{
        this.props.filterInput(e.target.value)
    }

    //Funcion que ecucha cuando se cambia el valor del check
    checkChange = (e) =>{
        this.props.checkInput(e.target.value)
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Search.. "
                value={this.props.filter}
                onChange={this.textChange}/>


                <input type="checkbox" checked={this.props.stock} 
                onChange={this.checkChange} name="showAllProducts"/>
                <label for="showAllProducts"> Ocultar productos sin stock</label>
            </form>
        );
    }
  }

  export default Search; 