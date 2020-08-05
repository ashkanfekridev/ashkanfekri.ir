import React from "react"
import {graphql} from "gatsby"


import Layout from "../components/layout";


export default function Template({
                                   data, // this prop will be injected by the GraphQL query below.
                                 }) {
  const {markdownRemark} = data // data.markdownRemark holds your post data
  const {frontmatter, html} = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <article className="blog-post">
          <header id="article-header">
            <h2>{frontmatter.title}</h2>
            <time>{frontmatter.date}</time>
          </header>
          <main id="article-main" className={'mt-4'}>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{__html: html}}
            />
          </main>

        </article>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
