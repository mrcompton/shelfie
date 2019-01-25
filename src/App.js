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

  render(){
    return (
      <div className="App">
        <Dashboard 
        productList = {this.state.productList}
        getInvFn = {this.getInventory}
        />
        <Form getInvFn = {this.getInventory} currentProduct = {this.state.currentProduct}/>
        <Header />
      </div>
    );
  }
}

export default App;
