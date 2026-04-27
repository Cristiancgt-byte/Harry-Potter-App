import './style.css';

const Informativa = () => {
  return (
    <div className="page informativa">
      <div className="info-hero">
        <h1>Sobre PotterApp</h1>
        <p>Tu enciclopedia mágica de bolsillo</p>
      </div>

      <div className="info-section">
        <h3>🚀 ¿Qué es esta App?</h3>
        <p>
          Esta aplicación fue desarrollada para explorar el universo de Harry Potter utilizando 
          la **Potter DB API**. Permite buscar personajes, filtrar por casas y gestionar 
          una lista de favoritos personalizada.
        </p>
      </div>

      <div className="info-section">
        <h3>🛠️ Tecnologías Usadas</h3>
        <ul className="tech-list">
          <li><strong>React + Vite:</strong> Para una interfaz rápida y moderna.</li>
          <li><strong>TypeScript:</strong> Para un código seguro y sin errores.</li>
          <li><strong>Capacitor:</strong> Para convertir la web en una App de Android.</li>
          <li><strong>Context API:</strong> Para el manejo global de favoritos.</li>
        </ul>
      </div>

      <div className="info-section">
        <h3>📜 Créditos</h3>
        <p>Datos proporcionados por la API pública de Potter DB.</p>
        <p className="version">Versión 1.0.0 - Proyecto Académico</p>
      </div>
    </div>
  );
};

export default Informativa;