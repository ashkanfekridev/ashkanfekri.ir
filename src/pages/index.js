import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout";
import AboutMeBox from "../components/aboutMeBox";
import PostList from "../components/postList";
import SEO from "../components/seo";


const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title={'اشکان فکری - صفحه اصلی'}></SEO>
      <div id="main-container" className="flex">
        <AboutMeBox></AboutMeBox>
        <PostList data={data.latest.edges}/>
      </div>
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query {
   latest: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
  }
  }
`

