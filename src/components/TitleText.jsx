import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const TitleTextWrapper = styled.h2`
  text-transform: capitalize;
  color: ${props => props.color};
  margin: 1.5rem 1rem;
  display: block;
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

function TitleText({ color, text }) {
  return <TitleTextWrapper color={color}>{text}</TitleTextWrapper>
}

TitleText.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}
TitleText.defaultProps = {
  color: `#d9534f`,
}

export default TitleText
