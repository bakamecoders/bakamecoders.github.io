import React from 'react'
import './HomeStyle.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import Contact from '../contact/Contact'

const Home = () => {

  
  var slideIndex = 1;
  window.onload = function() {
    showSlide(slideIndex);
  };
  
    function changeSlide(n) {
      showSlide(slideIndex += n);
    }

    setInterval(()=>{changeSlide(1)}, 10000);

    function showSlide(n) {
      var slides = document.getElementsByClassName("slideshow-image");

      if (n > slides.length) {
        slideIndex = 1;
      } 
      if (n < 1) {
        slideIndex = slides.length;
      }

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.display = "none";
      }

      slides[slideIndex - 1].style.display = "block";
    }

  return (
    <div>
        <div class="slideshow-container">
            <img class="slideshow-image" src={img1} alt="Image 1"/>
            <img class="slideshow-image" src={img2} alt="Image 1"/>
            <img class="slideshow-image" src={img3} alt="Image 1"/>
            <img class="slideshow-image" src={img2} alt="Image 3"/>
            <a class="prev" onClick={()=>{changeSlide(-1)}}>&#10094;</a>
            <a class="next" onClick={()=>{changeSlide(1)}}>&#10095;</a>
        </div>

        <Contact />

    </div>
  )
}

export default Home
