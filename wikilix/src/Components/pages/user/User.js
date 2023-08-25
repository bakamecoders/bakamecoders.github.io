import React from 'react'
import './UserStyle.css'
import house_img from './assets/house.jpg'

const User = () => {
  return (
    <div className='user-container'>
        <div class="left user-div">
            <div class="asset">
                <h2>House -Nyamirambo</h2>
                <img src={house_img} alt=""/>
                <p>Remaining days: <span>30 days</span></p>
                <div class="actions-div">
                    <button class="confirm">Manage</button>
                    <button class="dangel">Delete</button>
                </div>
            </div>
            <div class="asset">
                <h2>House -Nyamirambo</h2>
                <img src={house_img} alt=""/>
                <p>Remaining days: <span>30 days</span></p>
                <div class="actions-div">
                    <button class="confirm">Manage</button>
                    <button class="dangel">Delete</button>
                </div>
            </div>
            <div class="asset">
                <h2>House -Nyamirambo</h2>
                <img src={house_img} alt=""/>
                <p>Remaining days: <span>30 days</span></p>
                <div class="actions-div">
                    <button class="confirm">Manage</button>
                    <button class="dangel">Delete</button>
                </div>
            </div>
        </div>
        <div class="right user-div">
        
                <button class="confirm">Add new</button>
        
            <div class="options">
                <a href="">Manage credentials</a>
                <a href="">Logout</a>
            </div>

            <div class="profile">
                <span>C</span>
                <a href="">Change pic</a>
            </div>
        </div>
    </div>
  )
}

export default User
