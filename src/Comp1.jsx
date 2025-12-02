import "./estilo.css"
function Comp1()
{
    return(
        <div className='padre'>
      <h1>CENTRO DE REPARACION DE COMPUTADORAS</h1>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">PRINCIPAL</a>
              <a class="nav-link" href="/Comp2">OPCION 2</a>
              <a class="nav-link" href="/Comp3">OPCION 3</a>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="d1">
        <div className='c1'>
          <h1>CARRERA DE INFORMATICA</h1>
          <h1>PROGRAMACION WEB II</h1>
        </div>
        <div className='c2'>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./public/co1.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="./public/co2.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="./public/co3.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="./public/co4.jpg" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        </div>
      </div>
        <div className='c3'>
          <h1><a href="http://facebook.com">FACEBOOK</a></h1>
          <h1><a href="http://instagram.com">INSTAGRAM</a></h1>
        </div>
      </div>
      <div className="d2">
        <h1>JOSUE ABNER FABIANI CHOQUE</h1>
        <h2>LA PAZ-BOLIVIA</h2>
        <h2>2025</h2>
      </div>
    </div>
    );
}
export default Comp1;