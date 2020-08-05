import React from "react"
import {Link} from "gatsby";
import PostLink from "./post-link";


const PostList = ({data}) => {
  return (
    <div className={'mr-3 flex flex-column'}  id="article-container">
      <h3 className="mb-2 col-4">جدید ترین مطالب</h3>
      {data.map(edge => <PostLink key={edge.node.id} post={edge.node}/>)}
    </div>
  )
}

export default PostList

