import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <a href="/">Landing Page</a>
        <a href="/" className="keep-connected">
          <span>seguí conectado</span> <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
