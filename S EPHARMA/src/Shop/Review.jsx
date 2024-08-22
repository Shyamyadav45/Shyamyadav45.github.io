import React, { useState } from 'react';
import Ratting from '../components/Ratting';
import { left } from '@popperjs/core';

// Data for reviews
const reviewTitle = "Add a Review";
const reviewList = [
    { imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource." },
    { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource." },
    { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource." },
    { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource." },
];

const Review = () => {
    const [reviewShow, setReviewShow] = useState(false); // Default to false to show description initially

    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={() => setReviewShow(false)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(true)}>Reviews {reviewList.length}</li>
            </ul>

            {/* Description & review content */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                {reviewShow ? (
                    <div className='review-showing'>
                        <ul className='content lab-ul'>
                            {reviewList.map((review, i) => (
                                <li key={i}>
                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt={review.imgAlt} />
                                    </div>
                                    <div className='post-details'>
                                        <div className='entry-meta'>
                                            <div className='posted-on'>
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className='entry-content'>
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {/* add review field */}
                        <div className='client_review'>
                            <div className='review-form'>
                                <div className='review-title'>
                                    <h5>{reviewTitle}</h5>
                                </div>
                                <form action="action" className='row'>
                                    <div className='col-md-4 col-12'>
                                        <input type="text" name='name' id='name' placeholder='Full Name *' />
                                    </div>
                                    <div className='col-md-4 col-12'>
                                        <input type="email" name='email' id='name' placeholder='Your Email *' />
                                    </div>
                                    <div className='col-md-4 col-12'>
                                        <div className='rating'>
                                            <span className='me-2'>Your Ratings</span>
                                            <Ratting />
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-12'>
                                        <textarea name="message" id="message" rows="10" placeholder='Type Here Message'></textarea>
                                    </div>
                                    <div className='col-12'>
                                        <button type='submit' className='default-button'>
                                            <span>submit Review</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className='description'>
                        {/* Place your description content here */}
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum, dolor sit amet consecteturexercitationem
                             quasi totam provident itaque, voluptate earum excepturi architecto 
                             aliquid, nostrum sed et ad fugiat.</p>
                         <div className='post-item'>
                            <div className='post-thumb'>
                                <img src="/src/assets/images/shop/M2.jpg" alt="" style={{width: "300px", height: "250px"}}/>
                            </div>
                            <div className='post-content'>
                                <ul className='lab-ul'>
                                    <li>Lorem ipsum dolor sit amet conse.</li>
                                    <li>Lorem ipsum, dolor sit amet consectetur.</li>
                                    <li>quasi totam provident itaque, voluptate earum.</li>
                                    <li>Lorem ipsum, dolor sit amet consecteturexercitationem.</li>
                                </ul>
                            </div>
                         </div>
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Lorem ipsum, dolor sit amet consecteturexercitationem
                             quasi totam provident itaque, voluptate earum excepturi architecto 
                             aliquid, nostrum sed et ad fugiat.</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Review;