import './style.css';

const Usuarios = () => {
  return (
    <div className="perfil-usuario">
      <div className="avatar">🧙‍♂️</div>
      <h2>Nombre del Usuario</h2>
      <p>Rango: Mago de Primera Clase</p>
      <button className="btn-logout">Cerrar Sesión</button>
    </div>
  );
};

export default Usuarios;