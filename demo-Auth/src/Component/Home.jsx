import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f8f8', padding: '40px 20px' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#2C3E50' }}>Welcome to Our Store</h1>
        <p style={{ fontSize: '20px', color: '#7F8C8D', marginBottom: '30px' }}>
          Your favorite products are just a click away.
        </p>
        <Link to="/shop">
          <button
            style={{
              fontSize: '18px',
              padding: '12px 25px',
              backgroundColor: '#2980B9',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#3498DB')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#2980B9')}
          >
            Start Shopping
          </button>
        </Link>
      </section>

      
    </div>
  );
};

export default Home;
