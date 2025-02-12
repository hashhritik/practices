import React from 'react'

export default function BootstrapExample() {
  let data = [
    { id: 1, name: "Product1", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p1.jpg" },
    { id: 2, name: "Product2", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p2.jpg" },
    { id: 3, name: "Product3", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p3.jpg" },
    { id: 4, name: "Product4", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p4.jpg" },
    { id: 5, name: "Product5", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p5.jpg" },
    { id: 6, name: "Product6", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p6.jpg" },
    { id: 7, name: "Product7", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p7.jpg" }, ,
    { id: 8, name: "Product8", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p8.jpg" },
    { id: 9, name: "Product9", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p9.jpg" },
    { id: 10, name: "Product10", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p10.jpg" },
    { id: 11, name: "Product11", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p11.jpg" },
    { id: 12, name: "Product12", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p12.jpg" },
    { id: 13, name: "Product13", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p13.jpg" },
    { id: 14, name: "Product14", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p14.jpg" },
    { id: 15, name: "Product15", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p15.jpg" },
    { id: 16, name: "Product16", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p16.jpg" },
    { id: 17, name: "Product17", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p17.jpg" },
    { id: 18, name: "Product18", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p18.jpg" },
    { id: 19, name: "Product19", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p19.jpg" },
    { id: 20, name: "Product20", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p20.jpg" },


  ]
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
        </div>



        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/banner1.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner2.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner3.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner4.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner5.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner6.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner7.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner8.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner9.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner10.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h3 className='bg-primary text-center p-2 text-light'>Latest Product</h3>

      <div className="container-fluid">
        <div className='row'>
          {
            data.map((item, index) => {
              return <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6' key={index}>
                <div className="card ">
                  <img src={item.pic} style={{ height: 300, width: "100%" }} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text"><del className='text-danger'>&#8377;{item.basePrice}</del> &#8377;{item.finalPrice} <sup className='text-success'>{item.discount}% Off</sup></p>
                    <a href="#" style={{width:"100%"}} className="btn btn-primary">Add to Cart</a>
                  </div>


                </div>
              </div>

            })
          }

        </div>
      </div>

    </>
  )
}
