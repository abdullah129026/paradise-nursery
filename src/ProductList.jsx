import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedNodes, setAddedNodes] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total number of items in cart for the navbar badge
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg",
          description: "Removes mold spores and purifies air.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adds humidity to the room and filters pollutants.",
          cost: "$20"
        },
        {
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Easy to grow with dark green glossy leaves.",
          cost: "$22"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-vera-3283115_1280.jpg",
          description: "Purifies air and has medicinal benefits.",
          cost: "$14"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1000&auto=format&fit=crop",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729800077-ac750f3b06cf?q=80&w=1000&auto=format&fit=crop",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Invigorating aroma, great for cooking.",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://cdn.pixabay.com/photo/2016/01/02/02/03/mint-1117281_1280.jpg",
          description: "Refreshing aroma, easy to grow indoor herb.",
          cost: "$10"
        },
        {
          name: "Lemon Balm",
          image: "https://cdn.pixabay.com/photo/2016/07/04/18/16/lemon-balm-1497120_1280.jpg",
          description: "Citrus scent, relieves stress and anxiety.",
          cost: "$12"
        },
        {
          name: "Hyacinth",
          image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
          description: "Intense sweet scent with vibrant flowers.",
          cost: "$22"
        }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=1000&auto=format&fit=crop",
          description: "Thrives in low light and requires minimal watering.",
          cost: "$25"
        },
        {
          name: "Pothos",
          image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816941_1280.jpg",
          description: "Tolerates neglect and grows well in various light.",
          cost: "$12"
        },
        {
          name: "Cast Iron Plant",
          image: "https://cdn.pixabay.com/photo/2020/05/21/18/20/plant-5202081_1280.jpg",
          description: "Extremely resilient, thrives in shade and low humidity.",
          cost: "$28"
        },
        {
          name: "Succulents",
          image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
          description: "Drought resistant plants with unique fleshy leaves.",
          cost: "$10"
        },
        {
          name: "Jade Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/14/06/00/jade-plant-5915830_1280.jpg",
          description: "Symbol of good luck, minimal watering needed.",
          cost: "$15"
        },
        {
          name: "Chinese Evergreen",
          image: "https://cdn.pixabay.com/photo/2020/07/22/09/16/aglaonema-5428456_1280.jpg",
          description: "Tolerates low light and drought easily.",
          cost: "$20"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedNodes((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onHomeClick) onHomeClick();
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar" style={{ backgroundColor: '#4CAF50', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="logo" style={{ height: '50px', width: '50px' }} />
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px', marginLeft: '10px' }}>
              <div>
                <h3 style={{ margin: 0 }}>Paradise Nursery</h3>
                <i style={{ fontSize: '12px' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <a href="#" onClick={handleHomeClick} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>
            Home
          </a>
          <a href="#" onClick={handlePlantsClick} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>
            Plants
          </a>
          <a href="#" onClick={handleCartClick} style={{ color: 'white', fontSize: '20px', textDecoration: 'none', position: 'relative' }}>
            <h1 className="cart" style={{ margin: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="Flat" height="40" width="40">
                <rect width="256" height="256" fill="none"></rect>
                <path d="M184,184a16,16,0,1,1-16-16A16,16,0,0,1,184,184ZM88,168a16,16,0,1,0,16,16A16,16,0,0,0,88,168Zm152-104V160a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V40H24a8,8,0,0,1,0-16H64a8,8,0,0,1,8,8V160H224V64H88a8,8,0,0,1,0-16H224A16,16,0,0,1,240,64Z" fill="white"></path>
              </svg>
              {totalQuantity > 0 && (
                <span className="cart_quantity_count" style={{ position: 'absolute', top: '-5px', right: '-10px', backgroundColor: 'red', borderRadius: '50%', padding: '2px 8px', fontSize: '14px' }}>
                  {totalQuantity}
                </span>
              )}
            </h1>
          </a>
        </div>
      </div>

      {/* Page Content: Toggle between Product Listing & Shopping Cart */}
      {!showCart ? (
        <div className="product-grid" style={{ padding: '20px' }}>
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section" style={{ marginBottom: '40px' }}>
              <h2 style={{ textAlign: 'center', color: '#2e7d32', borderBottom: '2px solid #2e7d32', paddingBottom: '10px' }}>
                {categoryObj.category}
              </h2>
              <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                {categoryObj.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '250px', textAlign: 'center' }}>
                    <img className="product-image" src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
                    <div className="product-title" style={{ fontWeight: 'bold', margin: '10px 0' }}>{plant.name}</div>
                    <div className="product-description" style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>{plant.description}</div>
                    <div className="product-cost" style={{ fontWeight: 'bold', color: '#2e7d32', marginBottom: '10px' }}>{plant.cost}</div>
                    <button
                      className="product-button"
                      style={{
                        backgroundColor: addedNodes[plant.name] || cartItems.some(item => item.name === plant.name) ? '#ccc' : '#4CAF50',
                        color: 'white',
                        border: 'none',
                        padding: '10px 15px',
                        borderRadius: '4px',
                        cursor: addedNodes[plant.name] || cartItems.some(item => item.name === plant.name) ? 'not-allowed' : 'pointer'
                      }}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedNodes[plant.name] || cartItems.some(item => item.name === plant.name)}
                    >
                      {addedNodes[plant.name] || cartItems.some(item => item.name === plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
