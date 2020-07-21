import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"

const TitleTextWrapper = styled.h2`
  text-transform: capitalize;
  color: ${props => props.color};
  margin: 1.5rem 1rem;
  display: ${props => props.display};
  ${props =>
    props.display === "inline-block" &&
    css`
      transform: translateX(-50%);
      left: 50%;
    `}
  text-align: center;
  position: relative;
  font-size: 2rem;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.fontNav};
  font-style: italic;
  ::before {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 0;
    height: 8px;
    animation-name: slide100;
    animation-fill-mode: forwards;
    animation-duration: 0.75s;
    background-color: ${props => props.color};
  }
`

function TitleText({ color, text, display }) {
  return (
    <TitleTextWrapper color={color} display={display}>
      {text}
    </TitleTextWrapper>
  )
}

TitleText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  display: PropTypes.string,
}
TitleText.defaultProps = {
  color: `#d9534f`,
  display: "block",
}

export default TitleText
