import { useState, useEffect } from 'react';
import { useFavorites } from '../favoritesContext';
import './style.css';

const Home = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const { addFavorite, favorites } = useFavorites();

  useEffect(() => {
    fetch('https://api.potterdb.com/v1/characters')
      .then(res => res.json())
      .then(data => setCharacters(data.data));
  }, []);

  const filtered = characters.filter(c => 
    c.attributes.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Busca tu mago o bruja..." 
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid">
        {filtered.map(char => (
          <div key={char.id} className="card">
            <img src={char.attributes.image || 'https://via.placeholder.com/150'} alt={char.attributes.name} />
            <div className="card-info">
              <h3>{char.attributes.name}</h3>
              <p>{char.attributes.house || 'Sin Casa'}</p>
              <button 
                className={`fav-btn ${favorites.find(f => f.id === char.id) ? 'active' : ''}`}
                onClick={() => addFavorite(char)}
              >
                {favorites.find(f => f.id === char.id) ? '❤️ En favoritos' : '🤍 Añadir'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;