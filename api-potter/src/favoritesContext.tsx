import { createContext, useState, useContext, type ReactNode } from 'react';

interface FavoriteContextType {
  favorites: any[];
  addFavorite: (character: any) => void;
  removeFavorite: (id: string) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  const addFavorite = (char: any) => {
    if (!favorites.find(f => f.id === char.id)) {
      setFavorites([...favorites, char]);
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(f => f.id !== id));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) throw new Error('useFavorites debe usarse dentro de FavoriteProvider');
  return context;
};