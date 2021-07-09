import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import { Link } from "react-router-dom";
import moment from "moment";

function PostsList(props) {
  const [post, setPost] = useState({});
  const [image, setImage] = useState({});
  const [categoryName, setCategoryName] = useState({});
  const [authorName, setAuthorName] = useState({});
  const [tagName, setTagName] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://localhost/wproject.com/public_html/wp-json/wp/v2/posts/${props.postdata.id}`
      )
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(
        `http://localhost/wproject.com/public_html/wp-json/wp/v2/media/${props.postdata.featured_media}`
      )
      .then((res) => {
        setImage(res.data.guid);
      });
    axios
      .get(
        `http://localhost/wproject.com/public_html/wp-json/wp/v2/categories/${props.postdata.categories[0]}`
      )
      .then((res) => {
        setCategoryName(res.data);
      });
    axios
      .get(
        `http://localhost/wproject.com/public_html/wp-json/wp/v2/users/${props.postdata.author}`
      )
      .then((res) => {
        setAuthorName(res.data);
      });
    axios
      .get(
        `http://localhost/wproject.com/public_html/wp-json/wp/v2/tags/${props.postdata.tags[0]}`
      )
      .then((res) => {
        setTagName(res.data);
      });
  }, []);

  return (
    <div className="container-fluid post-list-container">
      <div className="d-flex align-items-start justify-content-center">
        <div className="white-circle mx-5">
          <div className="circle-text text-muted">
            {moment(post.date).format("DD/MM/YYYY")}
          </div>
        </div>
        <div className="post-content">
          <div>
            {image ? (
              <img
                src={image?.rendered}
                alt="featured-image"
                width="600px"
              />
            ) : (
              <p>No Featured Image</p>
            )}
          </div>
          <div className="d-flex tags-section">
            <h6 className="text-muted">
              In :
              <a href="#" className="category-name">
                {categoryName.name}
              </a>
            </h6>
            <h6 className="text-muted px-3">
              By :
              <a href="#" className="category-name">
                {authorName.name}
              </a>
            </h6>
            <h6 className="text-muted px-3">
              Tags :
              <a href="#" className="category-name">
                {tagName.name}
              </a>
            </h6>
          </div>
          <div className="post-text">
            <Link
              className="post-title text-capitalize"
              to={`/${post.id}`}
            >
              {post.title?.rendered}
            </Link>
          </div>
          <p
            className="py-3 text-capitalize post-text"
            dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default PostsList;
