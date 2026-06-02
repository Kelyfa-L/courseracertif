import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectCartItems, selectCartTotal,
  increaseQuantity, decreaseQuantity, removeItem, clearCart,
} from './CartSlice';
import { Navbar } from './ProductList';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items    = useSelector(selectCartItems);
  const total    = useSelector(selectCartTotal);

  const handleCheckout = () => {
    alert('🌿 Coming Soon! Checkout is under construction. Thank you for shopping at Paradise Nursery!');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <Navbar />
        <div className="cart-empty">
          <div className="empty-icon">🪴</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any plants yet.</p>
          <button className="continue-btn" onClick={() => navigate('/products')}>
            Browse Plants
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-content">
        <h1 className="cart-title">Shopping Cart</h1>

        <div className="cart-layout">
          {/* ── ITEM LIST ── */}
          <div className="cart-items-list">
            {items.map(item => (
              <div key={item.id} className="cart-row">
                <img src={item.image} alt={item.name} className="cart-thumb" />

                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-unit-price">Unit price: ${item.price.toFixed(2)}</p>
                </div>

                <div className="cart-qty-controls">
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    aria-label="Decrease quantity"
                  >−</button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    aria-label="Increase quantity"
                  >+</button>
                </div>

                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                  aria-label="Remove item"
                >🗑</button>
              </div>
            ))}
          </div>

          {/* ── ORDER SUMMARY ── */}
          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-lines">
              {items.map(item => (
                <div key={item.id} className="summary-line">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="summary-divider" />

            <div className="summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>

            <button className="continue-btn" onClick={() => navigate('/products')}>
              ← Continue Shopping
            </button>

            <button className="clear-btn" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
