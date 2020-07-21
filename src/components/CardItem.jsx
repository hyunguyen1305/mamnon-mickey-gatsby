import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import khongdau from "khong-dau"
import { Link } from "gatsby"

const CardItemWrapper = styled.div`
  transition: ${props => props.theme.transitions.slideUp};
  margin: 0.25rem;
  padding: 1rem 0.5rem;
  :hover {
    cursor: pointer;
    transform: translateY(-0.25rem);
    box-shadow: 0px 4px 6px 2px rgba(0, 0, 0, 0.75);
    .card-image {
      object-fit: scale-down;
    }
  }
  .card-text {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0.5rem;
  }
`

function CardItem({ imgFluid, tieude, date, alt }) {
  if (imgFluid === undefined) {
    return null
  }
  const slug = khongdau(tieude.trim(), ["chuyen", "url"])
  return (
    <Link to={`/su-kien/${slug}`}>
      <CardItemWrapper>
        <Img alt={alt} fluid={imgFluid} className="card-image" />
        <div style={{ textAlign: "center", margin: "0.5rem 0" }}>
          <small>
            <em>Ngày: {date}</em>
          </small>
          <div className="card-text">{tieude}</div>
        </div>
      </CardItemWrapper>
    </Link>
  )
}

export default CardItem
