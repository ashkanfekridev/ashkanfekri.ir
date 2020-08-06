import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header id="header">
    <div className="container">
      <nav className="navbar-header flex flex-row flex-wrap align-item-base-line">
        <Link to='/' className="nav-header_logo">اشکان فکری</Link>

        <ul className="navbar-header_nav mr-auto flex flex-row">
          <li><a href="#" className="navbar-nav_item">تماس با من</a></li>
          <li><Link to="/me" className="navbar-nav_item">درباره من</Link></li>
          <li><a href="#" className="navbar-nav_item">مقالات</a></li>
        </ul>
      </nav>
    </div>
  </header>

)


export default Header
