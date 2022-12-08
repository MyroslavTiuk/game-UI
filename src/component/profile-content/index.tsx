// @ts-nocheck
import React from 'react'
import numberOne from "../../assets/icons/numeric-1-box.svg";
import numberTwo from "../../assets/icons/numeric-2-box.svg";
import numberThree from "../../assets/icons/numeric-4-box.svg";
import dotsIcon from "../../assets/icons/dots-vertical.svg";
import {data} from '../../utils/dammyData';
import "./style.css"


const ProfileContent = () => {

  const getImg = (item, index) => {
    // eslint-disable-next-line default-case
    switch (item) {
      case 1:
        return numberOne
      case 2:
        return numberTwo
      case 4:
        return numberThree
    }
  }
  return (
    <div className='content'>
       <div className='header'>
        <p className='header-text'>Profile wallets</p>
       </div>
       {data.map((item, index) => {
        return (
          <div className={item.active ? 'active-content' : 'inactive-content'}>
                <div className='description'>
                  { item.active ? <img src={getImg(item.id)} alt="one" className="numeric-icon" /> : (
                    <div className="plus-icon">
                      <span className='plus-text'>+</span>
                    </div>
                  )}
                  <p className={item.active ? 'active-text' : 'inactive-text'}>{item.text}</p>
                </div>
                <img src={dotsIcon} alt="dots" className="numeric-icon-dots" />
              </div>
        )
       })}
       <div className='logout'>
        <span>LOGOUT</span>
       </div>
    </div>
  )
}
export default ProfileContent;
