import { useState } from 'react';
import './style.css';

const Original = () => {
  const [char, setChar] = useState<any>(null);
  const [animating, setAnimating] = useState(false);

  const summon = async () => {
    setAnimating(true);
    const res = await fetch('https://api.potterdb.com/v1/characters');
    const data = await res.json();
    const random = data.data[Math.floor(Math.random() * data.data.length)];
    
    setTimeout(() => {
      setChar(random);
      setAnimating(false);
    }, 800);
  };

  return (
    <div className="summon-page">
      <div className={`wand-section ${animating ? 'casting' : ''}`}>
        <button onClick={summon}>¡ACCIO MAGO! 🪄</button>
      </div>

      {char && !animating && (
        <div className="summoned-card">
          <img src={char.attributes.image} />
          <h2>{char.attributes.name}</h2>
          <p>Especie: {char.attributes.species}</p>
        </div>
      )}
    </div>
  );
};

export default Original;