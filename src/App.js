import React from 'react';
import './App.css';

//import Product from './components/productComponent/Product';
import Search from './components/searchComponent/Search';

import productos from './bd/productos.json';
import Product from './components/productComponent/Product';

class App extends React.Component {
  
  //Constructor
  constructor (props) {
    super(props);
    this.state = {
        filter: '',
        stock: false,
        products: []
    };
  }

  //funcion que se ejecuta despues que los componentes se han montado
  componentDidMount(){
    this.getProducts();
  }

  //Funcion para cargar los productos
  getProducts = () => {
    this.setState({
      products: productos
    });
  }

  //Funcion que permitira saber el texto que se require buscar
  filterText = (text) => {
    this.setState({
      filter: text
    });
  }

  //Funcion que permitira saber el valor del del check
  checkProducts = (check) => {
    this.setState({
      stock: check
    });
  }

  render(){
    
    if(this.state.products.length == 0){
    console.log("cargandooo");
      return(
          <h1>Cargando productos</h1>
      );
    }

    console.log("cargaasdasdsndooo");
    return (
      <div>
        <Search filterInput={this.filterText}
					checkInput={this.checkProducts}/>

        <Product products={this.state.products}
					filterText={this.state.filter}
					inStockOnly={this.state.stock}/>
        
      </div>
    );
  }
}

export default App;
