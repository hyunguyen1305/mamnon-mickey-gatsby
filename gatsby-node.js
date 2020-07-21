const path = require(`path`)
const KhongDau = require("khong-dau")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const SinglePostTemplates = path.resolve(`src/templates/SinglePost.js`)
  const result = await graphql(`
    {
      allContentfulSukien(sort: { fields: createdAt, order: DESC }) {
        edges {
          previous {
            tieude
          }
          next {
            tieude
          }
          node {
            id
            ngaytao(formatString: "DD/MM/YYYY")
            noidungbai {
              json
            }
            tieude
            anhdaidien {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.log(`Error while running GraphQL query.`)
    return
  } else {
    return result.data.allContentfulSukien.edges.forEach(edges => {
      const slug = KhongDau(edges.node.tieude.trim(), ["chuyen", "url"])
      createPage({
        path: `/su-kien/${slug}`,
        component: SinglePostTemplates,
        context: {
          post: edges.node,
          next: edges.next,
          prev: edges.previous,
        },
      })
    })
  }
}
