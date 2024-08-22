import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Ratting from '../components/Ratting'; // Ensure the correct path for Ratting component

const ProductCard = ({ products }) => {
  const [isGridView, setIsGridView] = useState(true); // Default to grid view

  // Define common styles for grid and list views
  const gridContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    justifyContent: 'center',
  };

  const listContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '15px',
  };

  const gridItemStyle = {
    width: 'calc(25% - 15px)', // 4 items per row
    padding: '15px',
    boxSizing: 'border-box',
    width: "250px",
    height: "400px"
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '15px',
    width: "350px",
    height: "350px"
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
  };

  return (
    <div>
      {/* View toggle buttons */}
      <div className="view-toggle" style={{ margin: '15px 0', textAlign: 'center' }}>
        <button onClick={() => setIsGridView(true)} style={{ marginRight: '10px' }}>
          Grid View
        </button>
        <button onClick={() => setIsGridView(false)}>
          List View
        </button>
      </div>

      {/* Container for products */}
      <div
        style={isGridView ? gridContainerStyle : listContainerStyle}
        className={`shop-products-wrap ${isGridView ? "grid" : "list"}`}
      >
        {products.map((product, i) => (
          <div
            key={i}
            style={isGridView ? gridItemStyle : listItemStyle}
            className='product-item'
          >
            <div className='product-thumb'>
              <div className='pro-thumb'>
                <img src={product.img} alt={product.name} style={{width:"400px",height:"200px"}} />
              </div>
              <div className='product-action-link'>
                <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                <a href="#"><i className='icofont-heart'></i></a>
                <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
              </div>
            </div>
            <div className='product-content'>
              <h5>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h5>
              <p className='product-ratting'>
                <Ratting />
              </p>
              <h6>Rs.{product.price}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
