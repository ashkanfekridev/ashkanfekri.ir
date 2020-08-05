import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => {
  console.warn(post)
  return (
      <Link to={post.frontmatter.slug} className="card-view_post">
        <h2>{post.frontmatter.title}</h2>
        <time>({post.frontmatter.date})</time>
      </Link>)
}
export default PostLink
