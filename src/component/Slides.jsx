import React from 'react'
import slide_1  from '../assets/image/slide-1.png'
import slide_2 from '../assets/image/slide-2.png'
import slide_3 from '../assets/image/slide-3.png'
const Slides = () => {
  return (
    <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100" src={slide_1} alt="First slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src={slide_2} alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src={slide_3} alt="Third slide"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div> 
    </div>
  )
}

export default Slides