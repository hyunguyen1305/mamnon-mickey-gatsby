import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }
      const imageFluid = image.node.childImageSharp.fluid
      return (
        <Img
          alt={props.alt}
          fluid={imageFluid}
          objectFit="contain"
          objectPosition="50% 50%"
        />
      )
    }}
  />
)

export default Image
