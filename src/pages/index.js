import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/Carousel"
import TitleText from "../components/TitleText"
import CardItem from "../components/CardItem"
import ChuongTrinhHoc from "../components/ChuongTrinhHoc"
import CoSo from "../components/CoSo"
import ThuVienAnh from "../components/ThuVienAnh"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSukien(limit: 8) {
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
      allContentfulAsset(limit: 10) {
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

  const listData = data.allContentfulSukien.edges
  const listImage = data.allContentfulAsset.nodes

  return (
    <Layout>
      <SEO title="Trang Chủ" />
      <div className="frow-container">
        <Carousel></Carousel>
      </div>
      <div style={{ backgroundColor: "whitesmoke", padding: "8px 0" }}>
        <section id="su-kien" className="frow-container">
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
          <div
            style={{
              textAlign: "center",
              margin: "1rem 0 1.5rem 0",
            }}
          >
            <Link
              to="/su-kien"
              style={{
                textDecoration: "none",
                border: "1px gray solid",
                width: "auto",
                padding: "0.5rem",
                borderRadius: "8px",
                color: "gray",
              }}
            >
              Xem tất cả sự kiện
            </Link>
          </div>
        </section>
      </div>
      <div style={{ padding: "8px 0" }}>
        <section id="chuong-trinh-hoc" className="frow-container">
          <TitleText text="Chương trình học"></TitleText>
          <ChuongTrinhHoc></ChuongTrinhHoc>
        </section>
      </div>
      <div style={{ backgroundColor: "whitesmoke", padding: "8px 0" }}>
        <section id="co-so-hoc" className="frow-container">
          <TitleText text="Cơ sở học"></TitleText>
          <CoSo></CoSo>
        </section>
      </div>
      <div style={{ padding: "8px 0" }}>
        <section id="thu-vien-anh">
          <TitleText text="Thư Viện Ảnh"></TitleText>
          <ThuVienAnh data={listImage}></ThuVienAnh>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
