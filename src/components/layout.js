/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import Header from "./app/header"
import './../fonts/fonts.css';
// import './../styles/app.css';
import "./layout.css"

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id={"app"}>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <main id="main" className="mt-4">
        <div className="container">

        {children}
        </div>

      </main>
      <footer className={'bt-solid-1 mt-3'}id={'footer'}>
        <p className={'text-center p-3'}>در جهان آزاد چیزی برای کسی محفوظ نیست بجر آزادی فرد :)</p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
