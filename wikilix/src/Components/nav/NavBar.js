import React from 'react'
import './NavBarStyle.css'
import wikilix_logo from './assets/wkilix_logo.jpeg'
import flag_rwanda from './assets/rwanda.png'
import language_img from './assets/language.png'
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
// import { faCoffee } from '@fortawesome/fontawesome-free';

const NavBar = () => {
  return (
    <div className='navbar-container'>

        <div class="menu">
            <div class="logo">
                <img src={wikilix_logo} alt="Wikilix Logo"/>
            </div>

            <div class="menus">
                <ul class="menu-list">
                    <li class="menu-link"> <a href="/">home </a></li>
                    <li class="menu-link">  <a href="about">about us </a></li> 
                    <li class="menu-link"><a href="services">servises </a></li>
                    <li class="menu-link"><a href="for-buy">for buy  </a></li>
                    <li class="menu-link"><a href="for-rent">for rent</a></li>        
                    <li class="menu-link"><a href="property">property</a></li>
                    <li class="menu-link"><a href="news">news</a></li>
                    <li class="menu-link"><a href="contact-us">contact</a></li>
                </ul>
            </div>

        </div>

        <div class="login">

            <div class="countries">
                <span ><img class="country-image" src={flag_rwanda}/></span>
                <select name="country" id="country" class="country"> 
                    <option value="rwanda"> RWANDA</option>
                    <option value="burundi"> BURUNDI</option>
                    <option value="kenya"> KENYA</option>
                    <option value="tanzania"> TANZANIA</option>
                    <option value="uganda"> UGANDA</option>
                    <option value="uganda"> S-SUDAN</option>
                    <option value="uganda"> UGANDA</option>
                </select>
            </div>

            <div class="countries">
                <span><img class="country-image" src={language_img}/></span>
                <select name="country" id="country" class="country"> 
                    <option value="rwanda"> KINYAR</option> 
                    <option value="rwanda"> ENGLISH</option>                      
                    <option value="rwanda"> FRENCH</option>
                    <option value="rwanda"> SWAHILI</option>
                </select>
            </div>

            <div class="login-section">
                <a href="login">Login</a>
                <a href="sign-up">Sign up</a>
                <a href="#"><i class="fa fa-search"></i></a>
            </div>
        </div>

    </div>
  )
}

export default NavBar
