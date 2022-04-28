import React from 'react';
import homeImage from './assets/homeImage.png'
import Product from './Product'


function Home() {
  return (
    <>
      <div>
        <div className="home">
          <div className="home_container">
            <img src={homeImage} alt="home_image" />
            <div className="home_row">
              <Product />
              <Product />
            </div>
            <div className="home_row">
              <Product />
              <Product />
              <Product />
            </div>
            <div className="home_row">
              <Product />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home 