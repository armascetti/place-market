import React from 'react';
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="product">
        <p> Title </p>
        <p className="product_price">$30</p>
        <div className="product_rating">⭐⭐⭐</div>
        <img src="https://st4.depositphotos.com/2168411/20354/i/1600/depositphotos_203540138-stock-photo-top-view-blue-school-backpack.jpg" alt="product_image" />
        <button> Add to Basket </button>
      </div>
    </div>
  )
}

export default Product 