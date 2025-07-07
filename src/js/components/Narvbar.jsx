const Narvbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top navbar-dark" style={{ backgroundColor: "#431847"}}>
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">Trench Crusade</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">STL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Lore</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Donations</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
};

export default Narvbar;