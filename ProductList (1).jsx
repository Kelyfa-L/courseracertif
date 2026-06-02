import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem, selectAddedIds, selectCartCount } from './CartSlice';
import './ProductList.css';

// ── PLANT DATA ──────────────────────────────────────────────────────────────
const categories = [
  {
    name: '☀️ Sun Lovers',
    plants: [
      { id: 'sl1', name: 'Bird of Paradise', price: 42.99, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&auto=format&fit=crop', description: 'Bold, tropical statement plant.' },
      { id: 'sl2', name: 'Aloe Vera',        price: 14.99, image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=300&auto=format&fit=crop', description: 'Healing gel & sun-loving charm.' },
      { id: 'sl3', name: 'Echeveria',        price: 11.99, image: 'https://images.unsplash.com/photo-1520302519878-3dc6fe3e2fef?w=300&auto=format&fit=crop', description: 'Stunning rosette succulent.' },
      { id: 'sl4', name: 'Jade Plant',       price: 18.99, image: 'https://images.unsplash.com/photo-1604762524559-1c3f4d2e4db7?w=300&auto=format&fit=crop', description: 'Symbol of good fortune.' },
      { id: 'sl5', name: 'Snake Plant',      price: 24.99, image: 'https://images.unsplash.com/photo-1585399000684-d2f72660f092?w=300&auto=format&fit=crop', description: 'Near-indestructible air purifier.' },
      { id: 'sl6', name: 'Desert Rose',      price: 29.99, image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=300&auto=format&fit=crop', description: 'Dramatic blooms, minimal water.' },
    ],
  },
  {
    name: '🌿 Low-Light Champions',
    plants: [
      { id: 'll1', name: 'Pothos',          price: 12.99, image: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=300&auto=format&fit=crop', description: 'Trailing vines for any shelf.' },
      { id: 'll2', name: 'ZZ Plant',        price: 21.99, image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=300&auto=format&fit=crop', description: 'Glossy leaves, thrives anywhere.' },
      { id: 'll3', name: 'Peace Lily',      price: 19.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&auto=format&fit=crop', description: 'White blooms, air-cleansing.' },
      { id: 'll4', name: 'Cast Iron Plant', price: 27.99, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=300&auto=format&fit=crop', description: 'Lives up to its name.' },
      { id: 'll5', name: 'Parlour Palm',    price: 23.99, image: 'https://images.unsplash.com/photo-1527602919-f9e19fbb4e09?w=300&auto=format&fit=crop', description: 'Elegant tropical fronds.' },
      { id: 'll6', name: 'Chinese Evergreen', price: 16.99, image: 'https://images.unsplash.com/photo-1616143137765-4f9bdd3ab6b0?w=300&auto=format&fit=crop', description: 'Lush, patterned foliage.' },
    ],
  },
  {
    name: '💧 Humidity Lovers',
    plants: [
      { id: 'hl1', name: 'Monstera Deliciosa', price: 38.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&auto=format&fit=crop', description: 'Iconic split-leaf beauty.' },
      { id: 'hl2', name: 'Calathea Orbifolia', price: 31.99, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=300&auto=format&fit=crop', description: 'Striped leaves that move with light.' },
      { id: 'hl3', name: 'Boston Fern',        price: 17.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=300&auto=format&fit=crop', description: 'Feathery fronds, loves moisture.' },
      { id: 'hl4', name: 'Fiddle Leaf Fig',    price: 54.99, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&auto=format&fit=crop', description: 'Designer darling of houseplants.' },
      { id: 'hl5', name: 'Alocasia Polly',     price: 34.99, image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=300&auto=format&fit=crop', description: 'Dramatic arrow-shaped leaves.' },
      { id: 'hl6', name: 'Bird\'s Nest Fern',  price: 22.99, image: 'https://images.unsplash.com/photo-1549299399-a1ba2d5aa30a?w=300&auto=format&fit=crop', description: 'Wavy fronds, striking texture.' },
    ],
  },
];

// ── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const navigate  = useNavigate();
  const cartCount = useSelector(selectCartCount);

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate('/')}>🌿 Paradise Nursery</div>
      <div className="navbar-links">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/products')}>Plants</button>
        <button className="cart-btn" onClick={() => navigate('/cart')}>
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          Cart
        </button>
      </div>
    </nav>
  );
}

// ── PRODUCT CARD ─────────────────────────────────────────────────────────────
function PlantCard({ plant }) {
  const dispatch  = useDispatch();
  const addedIds  = useSelector(selectAddedIds);
  const isAdded   = addedIds.includes(plant.id);

  return (
    <div className={`plant-card ${isAdded ? 'added' : ''}`}>
      <div className="plant-img-wrap">
        <img src={plant.image} alt={plant.name} className="plant-img" />
        {isAdded && <div className="added-badge">✓ In Cart</div>}
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-desc">{plant.description}</p>
        <div className="plant-footer">
          <span className="plant-price">${plant.price.toFixed(2)}</span>
          <button
            className={`add-btn ${isAdded ? 'added' : ''}`}
            onClick={() => dispatch(addItem(plant))}
            disabled={isAdded}
          >
            {isAdded ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── PRODUCT LIST PAGE ─────────────────────────────────────────────────────────
function ProductList() {
  return (
    <div className="product-page">
      <Navbar />
      <div className="product-content">
        <div className="product-header">
          <h1>Our Plants</h1>
          <p>Every plant handpicked and grown with care</p>
        </div>

        {categories.map(cat => (
          <section key={cat.name} className="category-section">
            <h2 className="category-title">{cat.name}</h2>
            <div className="plants-grid">
              {cat.plants.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export { Navbar };
export default ProductList;
