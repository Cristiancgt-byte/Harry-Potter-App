import { useFavorites } from '../favoritesContext';
import './style.css';

const Favoritos = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="page">
      <h2>Mis Favoritos ({favorites.length})</h2>
      <div className="grid">
        {favorites.length === 0 ? <p>No hay magos aquí todavía.</p> : 
          favorites.map(char => (
            <div key={char.id} className="card">
              <img src={char.attributes.image} alt={char.attributes.name} />
              <div className="card-info">
                <h3>{char.attributes.name}</h3>
                <button className="remove-btn" onClick={() => removeFavorite(char.id)}>Eliminar</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Favoritos;