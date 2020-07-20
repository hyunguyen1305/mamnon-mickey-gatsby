import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import banner from "../images/banner.png"
import Footer from "./Footer"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const navBar = useRef(null)
  const [isSticky, setSticky] = useState(false)
  const handleScroll = () => {
    if (navBar.current) {
      setSticky(navBar.current.getBoundingClientRect().top <= 0)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])
  return (
    <div className="full-page">
      <div className="frow">
        <Link
          to="/"
          title={`Quay về trang chủ - ${data.site.siteMetadata.title}`}
        >
          <img
            src={banner}
            alt={`banner ${data.site.siteMetadata.title}`}
            title={`Quay về trang chủ - ${data.site.siteMetadata.title}`}
            style={{ padding: `0 8px`, margin: `calc(1.45rem / 2) 0` }}
          ></img>
        </Link>
      </div>
      <div className={`${isSticky ? " sticky" : ""}`} ref={navBar}>
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>
      <div className="main-contain">
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
