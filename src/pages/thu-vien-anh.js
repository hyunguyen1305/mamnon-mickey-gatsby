import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThuVienAnh from "../components/ThuVienAnh"
import TitleText from "../components/TitleText"

const ThuVienAnhPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        nodes {
          fluid {
            ...GatsbyContentfulFluid
          }
          file {
            url
          }
        }
      }
    }
  `)
  const listImage = data.allContentfulAsset.nodes
  return (
    <Layout>
      <SEO title="Thư Viện Ảnh" />
      <section>
        <TitleText text="Thư Viện Ảnh"></TitleText>
        <ThuVienAnh data={listImage}></ThuVienAnh>
      </section>
    </Layout>
  )
}

export default ThuVienAnhPage
