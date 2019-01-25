import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component{
    constructor(){
        super()

        this.state = {
            inputName: '',
            inputPrice: 0,
            inputImageUrl: '',
            cancelPushed: false
        }
    }

    handleNameInput(name){
        this.setState({inputName: name})
    }

    handlePriceInput(price){
        this.setState({inputPrice: price})
    }

    handleImageInput(image){
        this.setState({inputImageUrl: image})
    }
    handleClearInput(){
        this.setState({
            inputName: '',
            inputPrice: 0,
            inputImageUrl: '',
            cancelPushed: true
    })
    }
    handlePostProduct(){
        const bodyObj = {
            product_name: this.state.inputName,
            price: this.state.inputPrice,
            image_url: this.state.inputImageUrl
        }

        axios.post('/api/product',bodyObj)
        .then(response => {
            console.log(response)
            this.props.getInvFn()
        })
        this.handleClearInput()
        
    }
    render(){
        console.log(this.state)
        return(
            <div>Form
                <input onChange={(e) => {this.handleImageInput(e.target.value)}} 
                        value = {this.state.inputImageUrl} placeholder ='image url here'/>
                <input onChange={(e) => {this.handleNameInput(e.target.value)}} 
                        value = {this.state.inputName} placeholder = 'product name here'/>
                <input onChange={(e) => {this.handlePriceInput(e.target.value)}} 
                        value = {this.state.inputPrice} placeholder = 'price here'/>
                <button onClick={() => {this.handleClearInput()}}>Cancel</button>                
                <button onClick={() => {this.handlePostProduct()}}>Add to Inventory</button>
            </div>
        );
    }
}
export default Form;