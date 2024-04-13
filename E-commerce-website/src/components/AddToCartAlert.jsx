import React, { useEffect } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert library

const AddToCartAlert = ({ item }) => {
    useEffect(() => {
        // Display the SweetAlert popup when the component mounts
        Swal.fire({
            text: "Added to Cart Successfully",
            position: "top-end",
            icon: "success",
            title: item.title,
        });
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return null; // Since this component only renders the Swal popup, return null to avoid rendering anything in the DOM
}

export default AddToCartAlert;
