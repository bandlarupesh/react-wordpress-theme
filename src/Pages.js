import React from "react";
import "./index.scss";
import Posts from "./Posts";

function Pages() {
  return (
    <div className="main">
      <section className="post-section">
        <h1 className="blog-heading">
          Blog Posts<span className="underline"></span>
        </h1>
        <Posts />
      </section>
    </div>
  );
}

export default Pages;
