import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const handelRemoveItem = (productKey) => {
        console.log('remove clicked');

        const newCart = cart.filter(pd => pd.key !== productKey);

        setCart(newCart);

        removeFromDatabaseCart(productKey);
    }
    const handelPlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();

        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);

            product.quantity = savedCart[key];

            return product;
        })

        // console.log(productKeys);
        setCart(cartProducts);
        console.log(cartProducts)
        //console.log(savedCart);
    }, [])
    let thankYou;

    if(orderPlaced){
        thankYou = <img src={happyImage} alt=""/>
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {thankYou}
                {cart.map(pd => <ReviewItem
                    key={pd.key} product={pd} handelRemoveItem={handelRemoveItem}>
                </ReviewItem>)}
            </div>
            <div className="cart-container">
                <Cart cart = {cart}>
                    <Link to="/review">  <button onClick= {handelPlaceOrder} className="main-button">Place Order</button> </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;