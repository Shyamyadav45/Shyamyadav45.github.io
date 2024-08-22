import React, { useState } from 'react';
import Ratting from './Ratting';
import { Link } from 'react-router-dom';

const title = "Our Products";

const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryTab/brounvita women.jpg',
        cate: 'Horlicks',
        title: 'BROUNVITA WOMEN',
        author: 'assets/images/course/author/01.jpg',
        brand: 'BROUNVITA',
        price: '$4.18',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/ecosprin1.webp',
        cate: 'Medicines',
        title: 'ECOSPRIN AV 75/20',
        author: 'assets/images/course/author/02.jpg',
        brand: 'ECOSPRIN',
        price: '$0.54',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/glucon d orange.jpg',
        cate: 'Horlicks',
        title: 'GLUCON D ORANGE',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'GLUCON D',
        price: '$1.19',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/himalya baby care.jpg',
        cate: 'Baby',
        title: 'HIMALAYA BABY CARE',
        author: 'assets/images/course/author/04.jpg',
        brand: 'HIMALAYA',
        price: '$4.18',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/horlicks chocolate.jpg',
        cate: 'Horlicks',
        title: 'HORLICKS CHOCOLATE',
        author: 'assets/images/course/author/05.jpg',
        brand: 'HORLICKS',
        price: '$4.18',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/jhonson baby logo.jpg',
        cate: 'Baby',
        title: 'JHONSONS BABY CARE PRODUCTS',
        author: 'assets/images/course/author/06.jpg',
        brand: 'JHONSON',
        price: '$4.18',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/stayfree.webp',
        cate: 'Sanitary',
        title: 'STAYFREE PADS  ',
        author: 'assets/images/course/author/01.jpg',
        brand: 'STAYFREE',
        price: '$0.54',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/whisper.jpg',
        cate: 'Sanitary',
        title: 'WHISPER PADS',
        author: 'assets/images/course/author/02.jpg',
        brand: 'WHISPER',
        price: '$0.54',
        id: 8,
    },
];

const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData);

    //   category based filtering
    const filterItem = (category) => {
        if (category === "All") {
            setItems(ProductData);
        } else {
            setItems(ProductData.filter(product => product.cate === category));
        }
    }

    return (
        <div className="course-section style-3 padding-tb">
            {/* shapes */}
            <div className="course-shape one">
                <img src="/src/assets/images/shape-img/icon/01.png" alt="" />
            </div>
            <div className="course-shape two">
                <img src="/src/assets/images/shape-img/icon/02.png" alt="" />
            </div>

            {/* main section */}
            <div className="container">
                {/* section header */}
                <div className="section-header">
                    <h2 className="title">{title}</h2>
                    <div className="course-filter-group">
                        <ul className="lab-ul">
                            <li onClick={() => filterItem("All")}>All</li>
                            <li onClick={() => filterItem("Baby")}>Baby</li>
                            <li onClick={() => filterItem("Horlicks")}>Horlicks</li>
                            <li onClick={() => filterItem("Medicines")}>Medicines</li>
                            <li onClick={() => filterItem("Sanitary")}>Sanitary</li>
                        </ul>
                    </div>
                </div>

                {/* section body */}
                <div className="section wrapper">
                    <div className="row g-8 justify-content-center row-cols-x1-6  row-col-lg-4 row-cols-md-2 row-cols-1">
                        {
                            items.map((product) => (
                                <div key={product.id} className="col">
                                    <div className="course-item style-4">
                                        <div className="course-inner">
                                            <div className="course-thumb">
                                                <img src={product.imgUrl} alt={product.title} style={{ width: '400px', height: '350px' }}/>
                                                <div className="course-category">
                                                       <div className="course-cate">
                                                                <a href="#">{product.cate}</a>
                                                       </div>
                                                       <div className="course-reiew">
                                                               <Ratting/>
                                                       </div>
                                                </div>
                                            </div>
                                            {/* content */}
                                            <div className="course-content">
                                                <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                                                <div className="course-footer">
                                                    <div className="course-author">
                                                    <Link to="/" className="ca-name">{product.brand}</Link>
                                                    </div>
                                                    <div className="course-price">
                                                        {product.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryShowCase;
