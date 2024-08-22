import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDisplay = ({ item }) => {
    // Destructure the item prop
    const { name, id, price, seller, ratingCount, img } = item;

    // Initialize state variables with default values
    const [prequantity, setQuantity] = useState(1); // Default quantity set to 1
    const [coupon, setCoupon] = useState("");

    // Function to handle adding to cart
    const handleAddToCart = () => {
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            coupon: coupon
        };

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity;
        } else {
            existingCart.push(product);
        }

        // Update local storage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        // Reset form fields
        setQuantity(1);
        setCoupon("");
    };

    return (
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span>{ratingCount} review</span>
            </p>
            <p>Price: RS.{price}</p>
            <p>Seller: {seller}</p>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={prequantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    min="1"
                />
            </div>
            <div>
                <label htmlFor="coupon">Coupon Code:</label>
                <input
                    type="text"
                    id="coupon"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                />
            </div>
            {/* Button section */}
            <button type='button' className='lab-btn' onClick={handleAddToCart}>
                <span>ADD TO CART</span>
            </button>
            <Link to="/cart-page" className='lab-btn bg-primary'>
                <span>CHECK OUT</span>
            </Link>
        </div>
    );
}

export default ProductDisplay;
