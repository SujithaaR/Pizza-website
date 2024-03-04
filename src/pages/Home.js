import React from 'react'
import {Link} from 'react-router-dom';
import banner from'../assets/background.jpeg';
import "../styles/Home.css";
function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${banner})` }}>
      <div className='headerContainer' >
        <h1>Savor the Flavor, Slice by Slice!</h1>
        <p>Explore Our Irresistible Menu</p>
        
        <Link to='/menu'>
        <button>ORDER NOW</button>
        </Link>
      </div>

    </div>
  )
}

export default Home;
