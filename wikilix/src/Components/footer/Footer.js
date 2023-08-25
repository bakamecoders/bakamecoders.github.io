import React from 'react'
import './FooterStyle.css'

const Footer = () => {
  return (
    <div class="footer">
    <div class="section">
      <h3>get to know us</h3>
      <a href="#">About us</a>
      <a href="#">What We Do</a>
      <a href="#">Blog</a>
    </div>
    <div class="section">
      <h3>Connect With Us</h3>
      <a href="#">Twitter</a>
      <a href="#">facebook</a>
      <a href="#">Instagram</a>
    </div>
    <div class="section">
      <h3>policy</h3>
      <a href="#">privacy</a>
      <a href="#">return policy</a>
      <a href="#">terms</a>
    </div>
    <div class="section">
      <h3>contact us</h3>
      <a href="#">E-mail</a>
      <a href="#">phone</a>
      <a href="#">adress</a>
    </div>
    <hr></hr>
    <p class="copy">&copy; 2023 WIKILIX. All rights reserved.</p>
  </div>
  )
}

export default Footer
