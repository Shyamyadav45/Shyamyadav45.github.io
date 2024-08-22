import React, { useState } from 'react';
import { Button, Modal, Tabs, Tab } from 'react-bootstrap';
import "../components/Modal.css"
import { useLocation, useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    // handle tab change 
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // direct to home page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleOrderConfirm = () => {
        alert("Your order Is Placed successfully !")
        localStorage.removeItem("cart");
        navigate(from, {replace: true})
    }
    return (
        <div className='modelCard'>
            <Button variant='primary' className='py-2' onClick={handleShow}>Proceed to Checkout</Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                centered
            >
                <div className='model-dialog'>
                    <h5 className='px-3 mb-3'>Select Your payment Method</h5>
                    <div className='model-content'>
                        <div className='model-body'>
                            <div className="tabs-mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`} 
                                        id='visa-tab'
                                        data-toggle="tab"
                                        role='tab'
                                        aria-controls='visa'
                                        aria-selected={activeTab === "visa"}
                                        onClick={() => handleTabChange("visa")}
                                        href="#visa">
                                        <img src="https://www.pngitem.com/pimgs/m/5-55610_logo-visa-mastercard-png-transparent-png.png" alt="" width="80" />
                                    </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "paytm" ? "active" : ""}`} 
                                        id='paytm-tab'
                                        data-toggle="tab"
                                        role='tab'
                                        aria-controls='paytm'
                                        aria-selected={activeTab === "paytm"}
                                        onClick={() => handleTabChange("paytm")}
                                        href="#paytm">
                                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp&w=256" alt="" width="80" />
                                    </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "Gpay" ? "active" : ""}`} 
                                        id='Gpay-tab'
                                        data-toggle="tab"
                                        role='tab'
                                        aria-controls='Gpay'
                                        aria-selected={activeTab === "Gpay"}
                                        onClick={() => handleTabChange("Gpay")}
                                        href="#Gpay">
                                        <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png" alt="" width="80" />
                                    </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "Phone Pay" ? "active" : ""}`} 
                                        id='Phone Pay-tab'
                                        data-toggle="tab"
                                        role='tab'
                                        aria-controls='Phone Pay'
                                        aria-selected={activeTab === "Phone Pay"}
                                        onClick={() => handleTabChange("Phone Pay")}
                                        href="#Phone Pay">
                                        <img src="https://i.pinimg.com/originals/db/42/53/db4253052cfc0f80ac281486c19f9d57.png" alt="" width="80" />
                                    </a>
                                    </li>
                                </ul>
                                {/* contents */}
                              <div className='tab-content' id='myTabContent'>
                                {/* visa content */}
                                <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                id='visa'
                                role='tabpanel'
                                aria-labelledby='visa-tab'
                                >
                                     {/* visa tab content */}
                                     <div className='mt-4 mx-4'>
                                        <div className='text-center'>
                                            <h5>Credit Card</h5>
                                        </div>
                                        <div className='form mt-3'>
                                            <div className='inputbox'>
                                                <input type="text" name='name'  id='name' className='form control'
                                                required/>
                                                <span>Cardholder Name</span>
                                            </div>
                                        </div>
                                            <div className='inputbox'>
                                                <input type="text" name='number'  id='number' min="1" max="999" className='form control'
                                                required/>
                                                <span>Card Number</span> <i className='fa fa-eye'></i>
                                            </div>
                                            <div className='d-flex flex-row'>
                                            <div className='inputbox'>
                                                <input type="text" name='number'  id='number' min="1" max="999" className='form control'
                                                required/>
                                                <span>Expiration date</span> 
                                            </div>
                                            <div className='inputbox'>
                                                <input type="text" name='number'  id='number' min="1" max="999" className='form control'
                                                required/>
                                                <span>CVV</span> 
                                            </div>
                                            </div>
                                            <div className='px-5 pay'>
                                                <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add Card</button>
                                            </div>
                                     </div>
                                </div>
                                {/* paytm content */}
                                <div className={`tab-pane fade ${activeTab === "paytm" ? "show active" : ""}`}
                                id='paytm'
                                role='tabpanel'
                                aria-labelledby='paytm-tab'
                                >
                                     <div className='mt-4 mx-4'>
                                        <div className='text-center'>
                                            <h5>Paytm Account Info</h5>
                                        </div>
                                        <div className='form mt-3'>
                                            <div className='inputbox'>
                                                <input type="text" name='name'  id='name' className='form control'
                                                required/>
                                                <span>Your Name</span>
                                            </div>
                                        </div>
                                            <div className='inputbox'>
                                                <input type="text" name='number'  id='number' min="1" max="999" className='form control'
                                                required/>
                                                <span>Enter Your Phone Number</span> 
                                            </div>
                                            <div className='d-flex flex-row'>
                                            <div className='inputbox'>
                                                <input type="text" name='number'  id='number' min="1" max="999" className='form control'
                                                required/>
                                                <span>Enter Your Paytm Upi Id</span> 
                                            </div>
                                            </div>
                                            <div className='px-5 pay'>
                                                <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add Paytm</button>
                                            </div>
                                     </div> 

                                </div>
                                {/* Gpay content */}
                                <div className={`tab-pane fade ${activeTab === "Gpay" ? "show active" : ""}`}
                                id='paytm'
                                role='tabpanel'
                                aria-labelledby='paytm-tab'
                                >
                                     <div className='mt-4 mx-4'>
                                        <div className='text-center'>
                                            <h5>Paytm Account Info</h5>
                                        </div>
                                        <div className='form mt-3'>
                                            <div className='inputbox'>
                                                <input type="text" name='name'  id='name' className='form control'
                                                required/>
                                                <span>Your Name</span>
                                            </div>
                                        </div>
                                            <div className='inputbox'>
                                                <input type="text" name='number'  id='number' min="1" max="999" className='form control'
                                                required/>
                                                <span>Enter Your Phone Number</span> 
                                            </div>
                                            <div className='d-flex flex-row'>
                                            <div className='inputbox'>
                                                <input type="text" name='number'  id='number' min="1" max="999" className='form control'
                                                required/>
                                                <span>Enter Your Gpay Upi Id</span> 
                                            </div>
                                            </div>
                                            <div className='px-5 pay'>
                                                <button className='btn btn-success btn-block'onClick={handleOrderConfirm}>Add Gpay</button>
                                            </div>
                                     </div> 

                                </div>
                                {/* Phone Pay content */}
                                <div className={`tab-pane fade ${activeTab === "Phone Pay" ? "show active" : ""}`}
                                id='paytm'
                                role='tabpanel'
                                aria-labelledby='paytm-tab'
                                >
                                     <div className='mt-4 mx-4'>
                                        <div className='text-center'>
                                            <h5>Paytm Account Info</h5>
                                        </div>
                                        <div className='form mt-3'>
                                            <div className='inputbox'>
                                                <input type="text" name='name'  id='name' className='form control'
                                                required/>
                                                <span>Your Name</span>
                                            </div>
                                        </div>
                                            <div className='inputbox'>
                                                <input type="text" name='number'  id='number' min="1" max="999" className='form control'
                                                required/>
                                                <span>Enter Your Phone Number</span> 
                                            </div>
                                            <div className='d-flex flex-row'>
                                            <div className='inputbox'>
                                                <input type="text" name='number'  id='number' min="1" max="999" className='form control'
                                                required/>
                                                <span>Enter Your Phone Pay Upi Id</span> 
                                            </div>
                                            </div>
                                            <div className='px-5 pay'>
                                                <button className='btn btn-success btn-block'onClick={handleOrderConfirm}>Add Phone Pay</button>
                                            </div>
                                     </div> 

                                </div>
                              </div>
                              {/* payment desclaimer */}
                              <p className='mt-3 px-4 p-Disclaimer'><em>Payment Disclaimer:</em>In no event shall payment or partial payment by owner for any 
                              material or service
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default CheckOutPage;
