import React, { Component } from 'react';
import './App.css';

import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      productList:[],
      currentProduct: {}
    }
    this.getInventory = this.getInventory.bind(this)
    this.handleSetSelected = this.handleSetSelected.bind(this)
  } 
  getInventory(){
    axios.get('/api/inventory')
    .then((response) => {
      console.log(response.data)
      this.setState({productList: response.data})})
  }
  componentDidMount(){
    this.getInventory()
  }

  handleSetSelected(editProduct){
    this.setState({currentProduct: editProduct})
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className='Form'>
          <div>
          <Dashboard 
          productList = {this.state.productList}
          getInvFn = {this.getInventory}
          setSelectedFn = {this.handleSetSelected}
          />
          </div>
          <div>
          <Form getInvFn = {this.getInventory} currentProduct = {this.state.currentProduct}/>
          </div>
          
          
        </div>
       
      
        
        
      </div>
    );
  }
}

export default App;
