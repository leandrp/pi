import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext([]);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (carId) => {
    setFavorites([...favorites, carId]);
  };

  const removeFromFavorites = (carId) => {
    setFavorites(favorites.filter((id) => id !== carId));
  };

  const isFavorite = (carId) => {
    return favorites.includes(carId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
}
