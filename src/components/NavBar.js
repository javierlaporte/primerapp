import CartWidget from "./CartWidget";

const NavBar = ({greeting}) => {    
    return (
    
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <h1 class="navbar-brand" href="#">The Grow</h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Sobre Nosotros</a>
          </li>
         
        </ul>
      </div>
    </div>
    <div>
    <p>{greeting}</p>    
    </div>
    <div><CartWidget/></div>
    
  </nav>
  )
    ;
};

export default NavBar;