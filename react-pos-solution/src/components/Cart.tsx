import React, { useState, useEffect } from 'react';
import { fetchCartItems, calculateTotal } from '../services/dynamoDBService';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const loadCartItems = async () => {
            const items = await fetchCartItems();
            setCartItems(items);
            setTotalPrice(calculateTotal(items));
        };

        loadCartItems();
    }, []);

    const handleRemoveItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
        setTotalPrice(calculateTotal(cartItems.filter(item => item.id !== itemId)));
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${totalPrice}</h3>
        </div>
    );
};

export default Cart;