import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CategoryPosts() {
  console.log(location.href);
  let text = location.href;
  const myArray = text.split("/");
  const id = myArray[4];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost/wproject.com/public_html/wp-json/wp/v2/posts?categories=${id}`
      )
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {posts.length > 0 ? (
        <div className="container row justify-content-center">
          {posts.map((post, i) => {
            return (
              <div className="card col-sm-4" key={i}>
                <div className="card-header">{post.slug}</div>
                <div className="card-body">
                  <h6 className="card-title">Title:{post.title["rendered"]}</h6>
                  <p className="card-text">Type:{post.type}</p>
                  <Link className="btn btn-primary" to={`/post/${post.id}`}>
                    View Post
                  </Link>
                </div>
                <div className="card-footer text-muted">{post.date}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <h6>No posts found for this category</h6>
      )}
    </div>
  );
}

export default CategoryPosts;
