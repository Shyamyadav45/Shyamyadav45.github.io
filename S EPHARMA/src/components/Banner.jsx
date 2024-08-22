import React, { useState } from 'react';
import productData from "../products.json";
import { Link } from 'react-router-dom';
import SelectedCategory from './SelectedCategory';

const title = (
    <h2>Search Your One From Thousand of Products</h2>
); 
const desc = "We have the largest collection of products ";
const bannerList = [
    {
        iconName: "iconfont-user-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "iconfont-notification",
        text: "more than 2000 Merchants",
    },
    {
        iconName: "iconfont-globe",
        text: "Buy Anything Online",
    },
];

const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filterProducts, setFilterProducts] = useState([]);

    // Search functionality
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        // Filtering products based on search
        const filtered = productData.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilterProducts(filtered);
    };

    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form>
                        <SelectedCategory select={"all"}/>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search for your product"
                            value={searchInput}
                            onChange={handleSearch}
                        />
                        <button type="submit">
                        <i className="icofont-search-2"></i>
                        </button>
                    </form>
                    <p>{desc}</p>
                    <ul className="lab-ul">
                        {searchInput && filterProducts.length > 0 && filterProducts.map((product) => (
                            <li key={product.id}>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;
