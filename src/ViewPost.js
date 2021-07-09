import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import moment from "moment";
import { Link, useParams,useHistory } from "react-router-dom";

function ViewPost() {
  const [post, setPost] = useState({});
  const [image, setImage] = useState({});
  const [categoryName, setCategoryName] = useState({});
  const [authorName, setAuthorName] = useState({});
  const [tagName, setTagName] = useState({});
  let { id } = useParams();
  let history = useHistory();


  useEffect(() => {
    axios
      .get(
        `http://localhost/wproject.com/public_html/wp-json/wp/v2/posts/${id}`
      )
      .then((res) => {
        setPost(res.data);
        getFeaturedImage(res.data.featured_media);
        getTags(res.data.tags[0]);
        getAuthor(res.data.author);
        getCategory(res.data.categories[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const getFeaturedImage = (id) => {
    axios
      .get(
        `http://localhost/wproject.com/public_html/wp-json/wp/v2/media/${id}`
      )
      .then((res) => {
        console.log(res, "featured");
        setImage(res.data.guid);
      });
  };

  const getTags = (id) => {
    axios
      .get(`http://localhost/wproject.com/public_html/wp-json/wp/v2/tags/${id}`)
      .then((res) => {
        setTagName(res.data);
      });
  };

  const getAuthor = (id) => {
    axios
      .get(
        `http://localhost/wproject.com/public_html/wp-json/wp/v2/users/${id}`
      )
      .then((res) => {
        setAuthorName(res.data);
      });
  };

  const getCategory = (id) => {
    axios
      .get(
        `http://localhost/wproject.com/public_html/wp-json/wp/v2/categories/${id}`
      )
      .then((res) => {
        setCategoryName(res.data);
      });
  };

  const gotoPreviousPage = () =>{
    history.goBack();
  }

  return (
    <div className="container-fluid viewpost">
      <a className="btn btn-outline-info" onClick={() =>gotoPreviousPage()}>
        Back
      </a>
      <div className="viewpost-data">
        <div className="top-text">
          <div className="white-circle">
            <div className="circle-text text-muted">
              {moment(post.date).format("DD/MM/YYYY")}
            </div>
          </div>
          <h1 className="post-title text-capitalize">{post.title?.rendered}</h1>

          <div className="d-flex pb-5">
            <h6 className="text-muted">
              In :
              <a href="#" className="category-name">
                {categoryName.name}
              </a>
            </h6>
            <h6 className="px-3 text-muted">
              By :
              <a href="#" className="category-name">
                {authorName.name}
              </a>
            </h6>
            <h6 className="px-3 text-muted">
              Tags :
              <a href="#" className="category-name">
                {tagName.name}
              </a>
            </h6>
          </div>

          <div className="post-content">
            {image ? (
              <img
                src={image?.rendered}
                alt="featured-image"
                width="600px"
              />
            ) : (
              <p>No Featured Image</p>
            )}

            <div
              className="pt-3 text-capitalize content"
              dangerouslySetInnerHTML={{ __html: post.content?.rendered }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
