import "frow/dist/frow.min.css"
import React from "react"
import "react-image-lightbox/style.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { ThemeProvider } from "styled-components"
import theme from "./src/themes/theme"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
