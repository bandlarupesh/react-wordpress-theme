import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/wproject.com/public_html/wp-json/wp/v2/categories")
      .then((res) => {
        if (res.status === 200) {
          setCategories(res.data);
        } else {
          console.log("something went wrong");
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="category-container">
      {categories.length > 0 ? (
        <div className="container d-md-flex align-center justify-content-center">
          {categories.map((category) => {
            return (
              <div className="card w-50 p-3 m-3" key={category.id}>
                <div className="card-body">
                  <h5 className="card-title">Category Name:{category.name}</h5>
                  <p>Description:{category.description} </p>
                  <p>No of Posts:{category.count}</p>
                  <div>
                    <Link
                      className="btn btn-outline-primary"
                      to={`/category/${category.id}`}
                    >
                      View Category Posts
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>No Categories Found</h1>
      )}
    </div>
  );
}

export default Categories;
