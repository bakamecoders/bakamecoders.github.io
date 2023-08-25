import React from 'react'
import './AboutStyle.css'
import underline_img from '../../assets/underline.png'

const About = () => {
  return (
    <div className='about-container'>
          <div class="all-items">
            <div class="first-div">
                <div class="Membership">Membership:</div>
                <div class="member-title">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
                    </p>
                </div>
            </div>
            <div class="second-div">
                <div class="History">History:</div>
                <div class="History-title">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
                    </p>
                </div>
            </div>
            <div class="third-div">
                <div class="left-third">
                    <div class="pic-left">
                        <p class="p-left">Mission</p>
                        <img class="img-left" src={underline_img}/>
                    </div>
                    <ol class="order-left">
                      <li>Lorem Ipsum</li>
                      <li>Lorem Ipsum</li>
                      <li>Lorem Ipsum</li>
                      <li>Lorem Ipsum</li>
                    </ol>
                </div>
                <div class="right-third">
                    <div class="pic-right">
                        <p class="p-right">Vision</p>
                        <img class="img-right" src={underline_img}/>
                    </div>
                    <ol class="order-right">
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>   
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
