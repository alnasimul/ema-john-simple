import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    function handelAddProduct(product) {
        console.log(product)
        console.log("product added");
        //console.log(cart);
        const newCart = [...cart,product];
        setCart(newCart)
        // const newCart = [...cart,product];
        // console.log(newCart);
    }
    return (
        <div class="shop-container">
            <div className="product-container">

                {/* {console.log(products)} */}
                {products.map(pd => <Product product={pd} handelAddProduct={handelAddProduct}>{pd.name}</Product>)}

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;