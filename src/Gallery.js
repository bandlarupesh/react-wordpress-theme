import React, { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
//   const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost/wproject.com/public_html/wp-json/wp/v2/media`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return <div></div>;
}

export default Gallery;
