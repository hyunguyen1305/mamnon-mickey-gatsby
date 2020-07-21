import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { BLOCKS } from "@contentful/rich-text-types"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import useContentfulImage from "../hooks/useContentfulImage"
import { Link } from "gatsby"
import khongdau from "khong-dau"

const SinglePostWrapper = styled.section`
  .noi-dung-bai {
    h2 {
      font-size: 1.25rem;
      margin: 1rem;
    }
  }
`
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      if (node) {
        const fluid = useContentfulImage(
          node.data.target.fields.file["vi-VN"].url
        )
        return <Img fluid={fluid} style={{ margin: "1rem 0" }}></Img>
      }
    },
  },
}

function SinglePost({ pageContext }) {
  const { post, next, prev } = pageContext
  const document = post.noidungbai.json
  const fluidThumbnail = useContentfulImage(post.anhdaidien.file.url)
  return (
    <Layout>
      <SEO title={post.tieude} />
      <SinglePostWrapper className="frow-container">
        <h1 style={{ textAlign: "center", marginBottom: 0 }}>{post.tieude}</h1>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <em>Ngày Đăng: {post.ngaytao}</em>
        </div>
        <div>
          <Img fluid={fluidThumbnail}></Img>
        </div>
        <article className="noi-dung-bai">
          {documentToReactComponents(document, options)}
        </article>
        <div className="frow justify-between">
          {prev ? (
            <Link
              to={`/su-kien/${khongdau(prev.tieude.trim(), ["chuyen", "url"])}`}
              style={{
                textDecoration: "none",
                border: "1px gray solid",
                width: "auto",
                padding: "0.5rem",
                borderRadius: "8px",
                color: "gray",
              }}
              title={prev.tieude}
            >
              <span role="img" aria-label="Bài cũ hơn">
                👈
              </span>{" "}
              Bài Trước
            </Link>
          ) : (
            <div></div>
          )}

          <Link
            to={`/su-kien`}
            style={{
              textDecoration: "none",
              border: "1px gray solid",
              width: "auto",
              padding: "0.5rem",
              borderRadius: "8px",
              color: "gray",
            }}
          >
            Xem Thêm
          </Link>
          {next ? (
            <Link
              to={`/su-kien/${khongdau(next.tieude.trim(), ["chuyen", "url"])}`}
              style={{
                textDecoration: "none",
                border: "1px gray solid",
                width: "auto",
                padding: "0.5rem",
                borderRadius: "8px",
                color: "gray",
              }}
              title={next.tieude}
            >
              Bài Sau{" "}
              <span role="img" aria-label="Bài mới hơn">
                👉
              </span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </SinglePostWrapper>
    </Layout>
  )
}

export default SinglePost
