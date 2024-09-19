// ProductCard.js
import React from "react";
import "./ProductCard.css";
import plus from "../../img/plus.svg";

const ProductCard = ({ image, name, price }) => (
  <div className="product-card__container">
    <div className="product-card">
      <div className="product-card__imag  e">
        <img src={image} alt={name} className="image" />
      </div>
      <div className="product-card__content">
        <div className="content__title-container">
          <h3 className="content__title"> {name}</h3>
        </div>
        <div className="product-card__content-bottom">
          <div className="content-bottom__price-container">
            <p className="content-bottom__price-before ">Цена:</p>
            <p className="content-bottom__price">{price}</p>
          </div>
          <div>
            <img src={plus} alt="" className="content-bottom__button" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
