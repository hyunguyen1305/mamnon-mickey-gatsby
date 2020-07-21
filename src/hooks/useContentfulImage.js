import { graphql, useStaticQuery } from "gatsby"

function useContentfulImage(assetUrl) {
  const { allContentfulAsset } = useStaticQuery(
    graphql`
      query CONTENTFUL_IMAGE_QUERY {
        allContentfulAsset {
          nodes {
            file {
              url
            }
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `
  )
  return allContentfulAsset.nodes.find(n => n.file.url === assetUrl).fluid
}
export default useContentfulImage
