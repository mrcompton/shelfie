import React from 'react';

const Product = function(props){
    return(
        
        <div>
            <h5>product</h5>
            <img src={props.product.image_url} alt='uploaded'/>
            {/* {
                !props.image_url
                ? (<img src = 'https://semantic-ui.com/images/wireframe/image.png' alt = 'default'/>)
                : null
            } */}
            <div>Name: {props.product.product_name}</div>
            <div>Price: {props.product.price}</div>
            <button onClick={() => {props.deleteFn(props.product.product_id)}}>Delete</button>
        </div>
    )
}

export default Product;