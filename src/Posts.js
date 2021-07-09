import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import Pagination from "./Pagination";
import PostsList from "./PostsList";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost/wproject.com/public_html/wp-json/wp/v2/posts")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>loading...</h2>;
  }

  //to get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="post-container">
      {currentPosts.length > 0 ? (
        <div className="">
          {currentPosts.map((post) => {
            return <PostsList postdata={post} key={post.id} />;
          })}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}

export default Posts;
