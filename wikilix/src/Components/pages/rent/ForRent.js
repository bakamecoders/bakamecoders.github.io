import React from 'react'
import Item from '../../item/Item'
import '../../assets/ProductsStyle.css'
import underline_Img from '../../assets/underline.png'

const ForRent = () => {
  return (
    <div className='for-buy-container'>
      <center>

        <div className='computers-for-sell for-sell'>
            <div className='for-sell-title'>
                <h1>Computers For Rent</h1>
                <img src={underline_Img} className='undeline_img'/>
            </div>
            <div className='for-sell-flex'>
                <div className='for-sell-items'>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                    <Item category="pc"/>
                </div>
            </div>
        </div>


        <div className='phones-for-sell for-sell'>
            <div className='for-sell-title'>
                <h1>Phones For Rent</h1>
                <img src={underline_Img} className='undeline_img'/>
            </div>
            <div className='for-sell-flex'>
                
                <div className='for-sell-items'>
                    <Item category="phone"/>
                    <Item category="phone"/>
                    <Item category="phone"/>
                    <Item category="phone"/>
                    <Item category="phone"/>
                    <Item category="phone"/>
                </div>
                
            </div>
        </div>


        <div className='lands-for-sell for-sell'>
            <div className='for-sell-title'>
                <h1>Lands For Rent</h1>
                <img src={underline_Img} className='undeline_img'/>
            </div>
            <div className='for-sell-flex'>
                
                <div className='for-sell-items'>
                    <Item category="land"/>
                    <Item category="land"/>
                    <Item category="land"/>
                    <Item category="land"/>
                    <Item category="land"/>
                    <Item category="land"/>
                </div>
                
            </div>
        </div>



        <div className='houses-for-sell for-sell'>
            <div className='for-sell-title'>
                <h1>Houses For Rent</h1>
                <img src={underline_Img} className='undeline_img'/>
            </div>
            <div className='for-sell-flex'>
                
                <div className='for-sell-items'>
                    <Item category="house"/>
                    <Item category="house"/>
                    <Item category="house"/>
                    <Item category="house"/>
                    <Item category="house"/>
                    <Item category="house"/>
                </div>
                
            </div>
        </div>

      </center>
    </div>
  )
}

export default ForRent
