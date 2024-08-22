import React from 'react';
import Data from "../products.json"

const ShopCategory = ({ filterItem, setItem, menuItems, setProducts, selectedCategory }) => {
    return (
        <>
            <div className='width-header'>
                <h5 className='ms-2'>All categories</h5>
            </div>
            <div>

                <button onClick={() => setProducts(Data)} className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}>All</button>
                                {
                    menuItems.map((val, id) => (
                        <button
                            className={`m-2 ${selectedCategory === val ? "bg-warning" : ""}`}
                            key={id}
                            onClick={() => filterItem(val)}
                        >
                            {val}
                        </button>
                    ))
                }
            </div>
        </>
    );
}

export default ShopCategory;
