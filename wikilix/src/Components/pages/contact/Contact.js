import React from 'react'
import './ContactStyle.css'

const Contact = () => {

  const mapStyle = {
    border: '0'
  };

  return (
    <div>
        <section id="Contact">
          <div class="contact-header">
              <h2>Contact Us</h2>
          </div>

          <div class="contact-section">

              <div class="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.136448185978!2d30.10866481475527!3d-1.9623978991713035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840b8e8e0d55ac3%3A0xc7d789456bde1b38!2sGikondo%2C%20Kigali!5e0!3m2!1sen!2srw!4v1566907212382!5m2!1sen!2srw"  width="100%" height="450px" frameborder="0" style={mapStyle} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>

              <div class="contact-form">
                  <form>
                      <input type="text" id="name" name="name"  placeholder="fullname" required/>
                      <input type="email" id="email" name="email"  placeholder="email" required/>
                      <input type="number" name="tel" id="tel" placeholder="phone"/>
                      <textarea id="message" name="message" rows="4" placeholder="message" required></textarea>
                      <button type="submit">Send your message</button>
                  </form>
              </div>
          </div>
          
        </section>
    </div>
  )
}

export default Contact
