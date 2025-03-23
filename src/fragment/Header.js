const Header = () =>{

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand fw-bold" href="/"><i className="fas fa-book-open me-2"></i>Summit Lib</a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
          <li className="nav-item">
            <a className="nav-link" href="/categories">Categories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/search">Search</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/register">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

}


export default Header;