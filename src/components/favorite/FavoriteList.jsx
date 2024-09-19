import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./FavoritesList.css";
import ProductCard from "../cards/ProductCard";
import { removeFromFavorites } from "../../store/favoritesSlice";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.favorites.items);
  const allProducts = useSelector((state) => state.products.items);
  console.log(favoriteIds, "favoriteIds");

  const favoriteProducts = allProducts.filter((product) =>
    favoriteIds.includes(product.id)
  );

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className="body__content">
      <div className="body__content-container">
        <div className="body__content-header">
          <h4 className="header_title">Избранные продукты</h4>
        </div>
        <div className="product-list">
          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              handleAddToFavorites={() => handleRemoveFromFavorites(product.id)}
              isFavorite={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesList;
