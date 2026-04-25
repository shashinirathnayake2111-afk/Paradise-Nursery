import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/CartSlice';
import './CartItem.css';
import { Trash2, Plus, Minus } from 'lucide-react';

function CartItem({ onContinueShopping }) {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const parsePrice = (priceString) => {
        return parseFloat(priceString.replace('Rs.', '').replace(/,/g, '').trim()) || 0;
    };

    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => {
            const cost = parsePrice(item.cost);
            return total + (cost * item.quantity);
        }, 0).toLocaleString();
    };

    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item.name));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    const calculateTotalCost = (item) => {
        const cost = parsePrice(item.cost);
        return (cost * item.quantity).toLocaleString();
    };

    return (
        <div className="cart-container">
            <h2 className="cart-total">Total Cart Amount: Rs. {calculateTotalAmount()}</h2>
            <div className="cart-items">
                {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty.</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3 className="cart-item-name">{item.name}</h3>
                                <p className="cart-item-cost">{item.cost}</p>
                                <div className="cart-item-quantity">
                                    <button className="quantity-btn" onClick={() => handleDecrement(item)}>
                                        <Minus size={16} />
                                    </button>
                                    <span className="quantity-value">{item.quantity}</span>
                                    <button className="quantity-btn" onClick={() => handleIncrement(item)}>
                                        <Plus size={16} />
                                    </button>
                                </div>
                                <p className="cart-item-total">Subtotal: Rs. {calculateTotalCost(item)}</p>
                                <button className="remove-btn" onClick={() => handleRemove(item)}>
                                    <Trash2 size={20} />
                                    <span>Remove</span>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="cart-actions">
                <button className="continue-shopping-btn" onClick={onContinueShopping}>Continue Shopping</button>
                <button className="checkout-btn" onClick={() => alert('Checkout functionality coming soon!')}>Checkout</button>
            </div>
        </div>
    );
}

export default CartItem;
