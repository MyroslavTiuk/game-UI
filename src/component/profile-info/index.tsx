import React from 'react'
import accountIcon from "../../assets/images/avatar.png";
import editIcon from "../../assets/icons/pencil.svg";

import "./style.css"

const ProfileInfo = () => {
  return (
    <div className='wrapperProfile'>
      <div className='containerPhoto'>
      <img src={accountIcon} alt="account" className="account-icon" />
      </div>
      <div className='containerInfo'>
        <div className='containerInfoName'>
          <p className="infoName">Surface</p>
          <div className='iconEdit'>
            <img src={editIcon} alt="account" className="edit-icon" />
          </div>
        </div>
        <span className="InfoSub">11 Total NFTs</span>
      </div>
    </div>
  )
}
export default ProfileInfo;
