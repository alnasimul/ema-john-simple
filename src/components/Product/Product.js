import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
   // console.log(props.product.key);
    const { img, name, seller, price, stock, key } = props.product
    return (
        <div className="product">
            {/* {console.log(props.product)} */}
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4 class="product-heading" ><Link to={'/product/' + key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
               { props.showAddProduct && <button className="main-button" onClick={() => props.handelAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}
            </div>
        </div>
    );
};

export default Product;