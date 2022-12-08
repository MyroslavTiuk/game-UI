import React from "react";
import ProfileContent from "../../component/profile-content";
import  ProfileInfo  from "../../component/profile-info";
import "./style.css";

export default function Home() {
  return (
    <div className="container">
      <ProfileInfo />
      <ProfileContent />
    </div>
  )
}
