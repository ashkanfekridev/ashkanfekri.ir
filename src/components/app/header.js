import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="header">
    <div className="container">
      <nav className="navbar-header flex flex-row flex-wrap align-item-base-line">
        <a href="/" className="nav-header_logo">اشکان فکری</a>

        <ul className="navbar-header_nav mr-auto flex flex-row">
          <li><a href="#" className="navbar-nav_item">تماس با من</a></li>
          <li><a href="#" className="navbar-nav_item">درباره من</a></li>
          <li><a href="#" className="navbar-nav_item">مقالات</a></li>
        </ul>
      </nav>
    </div>
  </header>
//
//
// <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
