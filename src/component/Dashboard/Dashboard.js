import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios'

class Dashboard extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.productList.product_id
        }

        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(id){
        axios.delete(`/api/product/${id}`)
        .then(response => {
            console.log(response)
            this.props.getInvFn()
        })
    }
    render(){
        const mappedProducts = this.props.productList.map((eachProduct) => {
            return(
                <div><Product product={eachProduct} deleteFn ={this.handleDelete} /></div>
            )
        })
        return(
            <div>Dashboard
                {mappedProducts}
            </div>
        );
    }
}

export default Dashboard;