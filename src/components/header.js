import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const NavBarWrapper = styled.nav`
  z-index: 100;
  li,
  a {
    font-family: ${props => props.theme.fonts.fontNav};
    font-weight: 500;
    font-size: 1.45rem;
    color: #030303;
    text-decoration: none;
  }
  .navbar__link {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    li {
      padding: calc(1rem / 2);
      margin: calc(1rem / 2);
      text-align: center;
    }
    .navbar__link-item {
      transition: ${props => props.theme.transitions.hover};
      color: #333333;
      position: relative;
      text-transform: capitalize;
      :hover {
        color: #f7f7f7;
        ::after {
          content: "👆🏻";
          position: absolute;
          left: 50%;
          bottom: -1rem;
          font-size: 1rem;
          transform: translate(-50%, 50%);
        }
      }
    }
    .navbar__link-item-active {
      color: white;
      ::after {
        content: "👆🏻";
        position: absolute;
        left: 50%;
        bottom: -1rem;
        font-size: 1rem;
        transform: translate(-50%, 50%);
      }
    }
    @media (max-width: 1200px) {
      overflow-x: scroll;
      overflow-y: hidden;
    }
  }
`

const Header = ({ siteTitle }) => (
  <header style={{ backgroundColor: "rgba(255, 55, 55, 1)" }}>
    <NavBarWrapper className="frow-container">
      <ul className="navbar__link">
        <li title={`Trang chủ - ${siteTitle}`}>
          <Link
            to="/"
            className="navbar__link-item"
            activeClassName="navbar__link-item-active"
          >
            Trang Chủ
          </Link>
        </li>
        <li title={`Giới thiệu - ${siteTitle}`}>
          <Link
            to="/page-2"
            className="navbar__link-item"
            activeClassName="navbar__link-item-active"
          >
            Giới Thiệu
          </Link>
        </li>
        <li title={`Sự kiện và Hoạt Động - ${siteTitle}`}>
          <Link
            to="/page-2"
            className="navbar__link-item"
            activeClassName="navbar__link-item-active"
          >
            Sự kiện và hoạt động
          </Link>
        </li>
        <li title={`Thư Viện Ảnh - ${siteTitle}`}>
          <Link
            to="/page-2"
            className="navbar__link-item"
            activeClassName="navbar__link-item-active"
          >
            Thư viện ảnh
          </Link>
        </li>
        <li title={`Liên hệ- ${siteTitle}`}>
          <Link
            to="/"
            className="navbar__link-item"
            activeClassName="navbar__link-item-active"
          >
            Liên hệ
          </Link>
        </li>
      </ul>
    </NavBarWrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
