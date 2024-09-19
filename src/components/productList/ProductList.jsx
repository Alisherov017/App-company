import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductList.css";
import ProductCard from "../cards/ProductCard";
import { fetchProducts } from "../../store/productsSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/favoritesSlice";

const ProductList = () => {
  const products = useSelector((state) => state.products.items);
  const favoriteIds = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToFavorites = (id, add) => {
    if (add) {
      dispatch(addToFavorites(id));
    } else {
      dispatch(removeFromFavorites(id));
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="body__content">
      <div className="body__content-container">
        <div className="body__content-header">
          <h4 className="header_title">Все кроссовки</h4>
          <div className="header__search">
            <div className="group">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                type="search"
                className="input"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              handleAddToFavorites={handleAddToFavorites}
              isFavorite={favoriteIds.includes(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
