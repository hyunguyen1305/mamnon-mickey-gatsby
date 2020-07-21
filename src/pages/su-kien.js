import React from "react"
import TitleText from "../components/TitleText"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardItem from "../components/CardItem"
import { useStaticQuery, graphql } from "gatsby"

const SuKienPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSukien(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            anhdaidien {
              fluid(maxWidth: 1200, maxHeight: 1200) {
                ...GatsbyContentfulFluid
              }
            }
            ngaytao(formatString: "DD/MM/YYYY")
            tieude
          }
        }
      }
    }
  `)
  const listData = data.allContentfulSukien.edges
  return (
    <Layout>
      <SEO title="Các Sự Kiện Và Hoạt Động" />
      <section className="frow-container">
        <TitleText text="Sự kiện và hoạt động"></TitleText>
        <div className="frow">
          {listData &&
            listData.map(({ node }) => {
              return (
                <div className="col-md-1-4 col-lg-1-4" key={node.tieude}>
                  <CardItem
                    imgFluid={node.anhdaidien.fluid}
                    tieude={node.tieude}
                    date={node.ngaytao}
                    alt={node.tieude}
                  ></CardItem>
                </div>
              )
            })}
        </div>
      </section>
    </Layout>
  )
}

export default SuKienPage
