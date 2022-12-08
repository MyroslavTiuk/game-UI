import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import homeIcon from "./assets/icons/home-icon.svg";
import galleryIcon from "./assets/icons/gallery-icon.svg";
import aboutIcon from "./assets/icons/about-icon.svg";


export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
      <CustomLink to="/">
          <div className="tab-block">
            <img src={homeIcon} alt="home" className="icon" />
            <span className="nav-text">Home</span>
          </div>
        </CustomLink>
        <CustomLink to="/gallery">
          <div className="tab-block">
            <img src={galleryIcon} alt="gallery" className="icon" />
            <span className="nav-text">gallery</span>
          </div>
        </CustomLink>
        <CustomLink to="/about">
        <div className="tab-block">
            <img src={aboutIcon} alt="about" className="icon" />
            <span className="nav-text">About</span>
          </div>
        </CustomLink>
      </ul>
    </nav>
  )
}

interface Props {
  to: string;
  children: any;
}

const CustomLink: React.FC<Props> =({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
