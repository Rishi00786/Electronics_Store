// data.js

import drone2 from '../assets/drone2.webp';
import mobile1 from '../assets/phone_1.webp';
import computer1 from '../assets/lap2.webp';

const products = {
  dronesAndCameras: [
    {
      id: 1,
      imageSrc: drone2,
      title: "Product 1",
      price: "$10.99",
      starRatings: 4,
      onSale: true,
    },
    // Add more drone and camera products as needed
  ],
  mobile: [
    {
      id: 1,
      imageSrc: mobile1,
      title: "Mobile Product 1",
      price: "$499",
      starRatings: 5,
      onSale: false,
    },
    // Add more mobile products as needed
  ],
  computers: [
    {
      id: 1,
      imageSrc: computer1,
      title: "Computer Product 1",
      price: "$999",
      starRatings: 4,
      onSale: true,
    },
    // Add more computer products as needed
  ],
};

export default products;
