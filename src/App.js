import React from 'react';
import './App.css';
import Search from './components/searchComponent/Search';
import Product from './components/productComponent/Product';
import Container from '@material-ui/core/Container';

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
    //Para datos consumidos desde API
    fetch('http://localhost:3030/')
    .then(res => res.json())
    .then( res => {
        this.setState({
          products : res
        })
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

    if(this.state.products.length === 0){
      return(
          <h1>Cargando productos</h1>
      );
    }

    return (
      <Container fixed>
        <div style={{ backgroundColor: '#fafafa', height: '100vh', textAlign: 'center' }}>
          <div>
          <Search filterInput={this.filterText}
            checkInput={this.checkProducts}/>
          </div>
          <div>
          <Product products={this.state.products}
            filterText={this.state.filter}
            inStockOnly={this.state.stock}/>
          </div> 
        </div>
      </Container>
    );
  }
}

export default App;
