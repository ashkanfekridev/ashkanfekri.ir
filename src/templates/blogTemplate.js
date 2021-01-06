import React from "react"
import {graphql} from "gatsby"

import './../styles/app.css'
import Layout from "../components/layout";
import SEO from "../components/seo";
import AboutMeBox from "../components/aboutMeBox";


export default function Template({data}) {
  const {markdownRemark} = data
  const {frontmatter, html} = markdownRemark

      // return (
      //   <Layout>
      //     <SEO title={frontmatter.title + ' -  اشکان فکری'}></SEO>
      //     <div id="main-container" className="flex">
      //       <AboutMeBox></AboutMeBox>
      //
      //       <div className="blog-post-container">
      //         <article id="blog-post" className={'mr-3 flex flex-column'}>
      //           <header id="article-header">
      //             <h2>{frontmatter.title}</h2>
      //             <time>{frontmatter.date}</time>
      //           </header>
      //           <main id="article-main" className={'mt-4'}>
      //             <div
      //               className="blog-post-content"
      //               dangerouslySetInnerHTML={{__html: html}}
      //             />
      //           </main>
      //         </article>
      //       </div>
      //     </div>
      //   </Layout>
      // )

      return (
        <Layout>
          <SEO title={frontmatter.title + ' -  اشکان فکری'}></SEO>
          <div id="main-container">
            <div className="blog-post-container">
              <article id="blog-post" className={'mr-3 flex flex-column'}>
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
