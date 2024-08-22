import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now"

const categoryList = [
  {
    imgUrl: 'src/assets/images/category/generic1.jpg',
    imgAlt: 'GENERIC MEDICINES',
    iconName: 'icofont-brand-windows',
    title: 'GENERIC MEDICINES',
  },
  {
    imgUrl: 'src/assets/images/category/homeo1.jpg',
    imgAlt: 'HOMEOPATHY MEDICINES',
    iconName: 'icofont-brand-windows',
    title: 'HOMEOPATHY MEDICINES',
  },
  {
    imgUrl: 'src/assets/images/category/bandage1.jpg',
    imgAlt: 'WOUND CARE PRODUCTS',
    iconName: 'icofont-brand-windows',
    title: 'WOUND CARE PRODUCTS',
  },
  {
    imgUrl: 'src/assets/images/category/glucon d logo.jpg',
    imgAlt: 'GLUCON D',
    iconName: 'icofont-brand-windows',
    title: 'GLUCON D',
  },
  {
    imgUrl: 'src/assets/images/category/hdrinks.jpg',
    imgAlt: 'HEALTH DRINKS',
    iconName: 'icofont-brand-windows',
    title: 'HEALTH DRINKS',
  },
  {
    imgUrl: 'src/assets/images/category/baby care logo.avif',
    imgAlt: 'BABY CARE PRODUCTS',
    iconName: 'icofont-brand-windows',
    title: 'BABY CARE PRODUCTS',
  },
  {
    imgUrl: 'src/assets/images/category/jhandu balm logo.png',
    imgAlt: 'ZANDU BALM',
    iconName: 'icofont-brand-windows',
    title: 'ZANDU BALM',
  },
  {
    imgUrl: 'src/assets/images/category/senitary pad logo.jpg',
    imgAlt: 'SENITARY PADS',
    iconName: 'icofont-brand-windows',
    title: 'SENITARY PADS',
  },
  {
    imgUrl: 'src/assets/images/category/VicksLogo.png',
    imgAlt: 'VICKS',
    iconName: 'icofont-brand-windows',
    title: 'VICKS',
  },
  
 
];

const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        {/* section header */}
        <div className="section-header text-center image-size">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>

        {/* section card */}
        <div className="section wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
            {categoryList.map((val, i) => (
              <div key={i} className="col">
                <Link to="/shop" className="category-item">
                  <div className="category-inner image-size">
                    {/* image thumbnail */}
                    <img src={val.imgUrl} alt={val.imgAlt} style={{ width: '2800px', height: '250px' }} />
                  </div>
                 
                  {/* content */}
                  <div className="category-content">
                    <div className="cate-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <h6>{val.title}</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCategory;
