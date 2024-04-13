// BuyingAlert.jsx

import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const BuyingAlert = ({ item }) => {
    useEffect(() => {
        Swal.fire({
            title: item.title,
            text: `Price: ${item.price}`,
            confirmButtonText: "OK",
            footer: "Reaching your Home soon",
            icon: "success"
        });
    }, []);

    return null;
}

export default BuyingAlert; // Ensure BuyingAlert is exported as default
