import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const SearchAlert = () => {
  useEffect(() => {
    Swal.fire({
      title: "Sorry!! No such queries found!",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    });
  }, []); // This empty dependency array ensures that this effect runs only once, similar to componentDidMount

  // Return null because you don't need to render anything
  return null;
}

export default SearchAlert;
