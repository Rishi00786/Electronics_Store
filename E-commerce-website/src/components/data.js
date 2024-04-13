import phone1 from '../assets/phone_1.webp';
import lap2 from '../assets/lap2.webp';
import d1 from '../assets/Drones & Cameras/1d.webp';
import d2 from '../assets/Drones & Cameras/2d.webp';
import d3 from '../assets/Drones & Cameras/3d.webp';
import d4 from '../assets/Drones & Cameras/4d.webp';
import d5 from '../assets/Drones & Cameras/5d.webp';
import d6 from '../assets/Drones & Cameras/6d.webp';
import d7 from '../assets/Drones & Cameras/7d.webp';
import d8 from '../assets/Drones & Cameras/8d.webp';
import c1 from '../assets/Computers/c1.webp';
import c2 from '../assets/Computers/c2.webp';
import c3 from '../assets/Computers/c3.webp';
import c4 from '../assets/Computers/c4.webp';
import c5 from '../assets/Computers/c5.webp';
import c6 from '../assets/Computers/c6.webp';
import m1 from '../assets/Mobiles/m1.webp';
import m2 from '../assets/Mobiles/m2.webp';
import m3 from '../assets/Mobiles/m3.webp';
import m4 from '../assets/Mobiles/m4.webp';
import m5 from '../assets/Mobiles/m5.webp';
import t1 from '../assets/Tablets/t1.webp';
import t2 from '../assets/Tablets/t2.webp';
import t3 from '../assets/Tablets/t3.webp';
import t4 from '../assets/Tablets/t4.webp';
import t5 from '../assets/Tablets/t5.webp';
import tv1 from '../assets/T.V. & Home Cinema/tv1.webp';
import tv2 from '../assets/T.V. & Home Cinema/tv2.webp';
import tv3 from '../assets/T.V. & Home Cinema/tv3.webp';
import tv4 from '../assets/T.V. & Home Cinema/tv4.webp';
import tv5 from '../assets/T.V. & Home Cinema/tv5.webp';
import wt1 from '../assets/Wearable Tech/w1.webp';
import wt2 from '../assets/Wearable Tech/w2.webp';
import wt3 from '../assets/Wearable Tech/w3.webp';
import wt4 from '../assets/Wearable Tech/w4.webp';
import wt5 from '../assets/Wearable Tech/w5.webp';
import wt6 from '../assets/Wearable Tech/w6.webp';
import wt7 from '../assets/Wearable Tech/w7.webp';
import s1 from '../assets/SALE/s1.webp'
import s2 from '../assets/SALE/s2.webp'
import s3 from '../assets/SALE/s3.webp'
import s4 from '../assets/SALE/s4.webp'
import s5 from '../assets/SALE/s5.webp'
import s6 from '../assets/SALE/s6.webp'
import s7 from '../assets/SALE/s7.webp'
import s8 from '../assets/SALE/s8.webp'
import s9 from '../assets/SALE/s9.webp'
import s10 from '../assets/SALE/s10.webp'
import a1 from '../assets/Shop All/a1.webp';
import a2 from '../assets/Shop All/a2.webp';
import a3 from '../assets/Shop All/a3.webp';
import a4 from '../assets/Shop All/a4.webp';
import a5 from '../assets/Shop All/a5.webp';
import a6 from '../assets/Shop All/a6.webp';
import a7 from '../assets/Shop All/a7.webp';
import a8 from '../assets/Shop All/a8.webp';
import a9 from '../assets/Shop All/a9.webp';
import a10 from '../assets/Shop All/a10.webp';
import a11 from '../assets/Shop All/a11.webp';
import a12 from '../assets/Shop All/a12.webp';
import a13 from '../assets/Shop All/a13.webp';
// import a14 from '../assets/Shop All/a14.webp';
import a15 from '../assets/Shop All/a15.webp';
import a16 from '../assets/Shop All/a16.webp';
// import a17 from '../assets/Shop All/a17.webp';

const products = {
  dronesAndCameras: [
    { id: 1, imageSrc: d1, title: "Drone Product 1", price: "$10.99", starRatings: 4, onSale: true },
    { id: 2, imageSrc: d2, title: "Drone Product 2", price: "$10.99", starRatings: 4, onSale: true },
    { id: 3, imageSrc: d3, title: "Drone Product 3", price: "$10.99", starRatings: 4, onSale: true },
    { id: 4, imageSrc: d4, title: "Drone Product 4", price: "$10.99", starRatings: 4, onSale: true },
    { id: 5, imageSrc: d5, title: "Drone Product 5", price: "$10.99", starRatings: 4, onSale: true },
    { id: 6, imageSrc: d6, title: "Drone Product 6", price: "$10.99", starRatings: 4, onSale: true },
    { id: 7, imageSrc: d7, title: "Drone Product 7", price: "$10.99", starRatings: 4, onSale: true },
    { id: 8, imageSrc: d8, title: "Drone Product 8", price: "$10.99", starRatings: 4, onSale: true },
  ],
  mobile: [
    { id: 1, imageSrc: m5, title: "Mobile Product 1", price: "$499", starRatings: 5, onSale: false, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum eius quos quo eligendi repellat iure modi aliquid. Odit, dolorum illum voluptate sunt ut nemo, earum cumque corporis necessitatibus autem nam quos." },
    { id: 2, imageSrc: m1, title: "Mobile Product 2", price: "$499", starRatings: 5, onSale: false, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum eius quos quo eligendi repellat iure modi aliquid. Odit, dolorum illum voluptate sunt ut nemo, earum cumque corporis necessitatibus autem nam quos." },
    { id: 3, imageSrc: m2, title: "Mobile Product 3", price: "$499", starRatings: 5, onSale: false, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum eius quos quo eligendi repellat iure modi aliquid. Odit, dolorum illum voluptate sunt ut nemo, earum cumque corporis necessitatibus autem nam quos." },
    { id: 4, imageSrc: m3, title: "Mobile Product 4", price: "$499", starRatings: 5, onSale: false, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum eius quos quo eligendi repellat iure modi aliquid. Odit, dolorum illum voluptate sunt ut nemo, earum cumque corporis necessitatibus autem nam quos." },
    { id: 5, imageSrc: m4, title: "Mobile Product 5", price: "$499", starRatings: 5, onSale: false, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum eius quos quo eligendi repellat iure modi aliquid. Odit, dolorum illum voluptate sunt ut nemo, earum cumque corporis necessitatibus autem nam quos." },
  ],
  computers: [
    { id: 1, imageSrc: c1, title: "Computer Product 1", price: "$999", starRatings: 4, onSale: true },
    { id: 2, imageSrc: c2, title: "Computer Product 2", price: "$999", starRatings: 4, onSale: true },
    { id: 3, imageSrc: c3, title: "Computer Product 3", price: "$999", starRatings: 4, onSale: true },
    { id: 4, imageSrc: c4, title: "Computer Product 4", price: "$999", starRatings: 4, onSale: true },
    { id: 5, imageSrc: c5, title: "Computer Product 5", price: "$999", starRatings: 4, onSale: true },
    { id: 6, imageSrc: c6, title: "Computer Product 6", price: "$999", starRatings: 4, onSale: true },
  ],
  tablets: [
    { id: 1, imageSrc: t1, title: "Tablet Product 1", price: "$299", starRatings: 4, onSale: true },
    { id: 2, imageSrc: t2, title: "Tablet Product 2", price: "$299", starRatings: 4, onSale: true },
    { id: 3, imageSrc: t3, title: "Tablet Product 3", price: "$299", starRatings: 4, onSale: true },
    { id: 4, imageSrc: t4, title: "Tablet Product 4", price: "$299", starRatings: 4, onSale: true },
    { id: 5, imageSrc: t5, title: "Tablet Product 5", price: "$299", starRatings: 4, onSale: true },
  ],
  tvAndHomeCinema: [
    { id: 1, imageSrc: tv1, title: "TV Product 1", price: "$999", starRatings: 4, onSale: true },
    { id: 2, imageSrc: tv2, title: "TV Product 2", price: "$999", starRatings: 4, onSale: true },
    { id: 3, imageSrc: tv3, title: "TV Product 3", price: "$999", starRatings: 4, onSale: true },
    { id: 4, imageSrc: tv4, title: "TV Product 4", price: "$999", starRatings: 4, onSale: true },
    { id: 5, imageSrc: tv5, title: "TV Product 5", price: "$999", starRatings: 4, onSale: true },
  ],
  wearableTech: [
    { id: 1, imageSrc: wt1, title: "Wearable Tech Product 1", price: "$199", starRatings: 4, onSale: true },
    { id: 2, imageSrc: wt2, title: "Wearable Tech Product 2", price: "$199", starRatings: 4, onSale: true },
    { id: 3, imageSrc: wt3, title: "Wearable Tech Product 3", price: "$199", starRatings: 4, onSale: true },
    { id: 4, imageSrc: wt4, title: "Wearable Tech Product 4", price: "$199", starRatings: 4, onSale: true },
    { id: 5, imageSrc: wt5, title: "Wearable Tech Product 5", price: "$199", starRatings: 4, onSale: true },
    { id: 6, imageSrc: wt6, title: "Wearable Tech Product 6", price: "$199", starRatings: 4, onSale: true },
    { id: 7, imageSrc: wt7, title: "Wearable Tech Product 7", price: "$199", starRatings: 4, onSale: true },
  ],
  sale: [
    { id: 1, imageSrc: s1, title: "Sale Product 1", price: "$49.99", starRatings: 4, onSale: true },
    { id: 2, imageSrc: s2, title: "Sale Product 2", price: "$49.99", starRatings: 4, onSale: true },
    { id: 3, imageSrc: s3, title: "Sale Product 3", price: "$49.99", starRatings: 4, onSale: true },
    { id: 4, imageSrc: s4, title: "Sale Product 4", price: "$49.99", starRatings: 4, onSale: true },
    { id: 5, imageSrc: s5, title: "Sale Product 5", price: "$49.99", starRatings: 4, onSale: true },
    { id: 6, imageSrc: s6, title: "Sale Product 6", price: "$49.99", starRatings: 4, onSale: true },
    { id: 7, imageSrc: s7, title: "Sale Product 7", price: "$49.99", starRatings: 4, onSale: true },
    { id: 8, imageSrc: s8, title: "Sale Product 8", price: "$49.99", starRatings: 4, onSale: true },
    { id: 9, imageSrc: s9, title: "Sale Product 9", price: "$49.99", starRatings: 4, onSale: true },
    { id: 10, imageSrc: s10, title: "Sale Product 10", price: "$49.99", starRatings: 4, onSale: true },
  ],
  shopAll: [
    { id: 1, imageSrc: a1, title: "Product 1", price: "$10.99", starRatings: 4 },
    { id: 2, imageSrc: a2, title: "Product 2", price: "$12.99", starRatings: 3 },
    { id: 3, imageSrc: a3, title: "Product 3", price: "$14.99", starRatings: 5 },
    { id: 4, imageSrc: a4, title: "Product 4", price: "$9.99", starRatings: 4 },
    { id: 5, imageSrc: a5, title: "Product 5", price: "$11.99", starRatings: 4 },
    { id: 6, imageSrc: a6, title: "Product 6", price: "$13.99", starRatings: 4 },
    { id: 7, imageSrc: a7, title: "Product 7", price: "$15.99", starRatings: 3 },
    { id: 8, imageSrc: a8, title: "Product 8", price: "$10.99", starRatings: 5 },
    { id: 9, imageSrc: a9, title: "Product 9", price: "$12.99", starRatings: 4 },
    { id: 10, imageSrc: a10, title: "Product 10", price: "$14.99", starRatings: 4 },
    { id: 11, imageSrc: a11, title: "Product 11", price: "$9.99", starRatings: 5 },
    { id: 12, imageSrc: a12, title: "Product 12", price: "$11.99", starRatings: 4 },
    { id: 13, imageSrc: a13, title: "Product 13", price: "$13.99", starRatings: 4 },
    { id: 14, imageSrc: wt2, title: "Product 14", price: "$15.99", starRatings: 3 },
    { id: 15, imageSrc: a15, title: "Product 15", price: "$10.99", starRatings: 4 },
    { id: 16, imageSrc: a16, title: "Product 16", price: "$12.99", starRatings: 4 },
    { id: 17, imageSrc: tv3, title: "Product 17", price: "$14.99", starRatings: 4 },
  ],
};

export default products;
