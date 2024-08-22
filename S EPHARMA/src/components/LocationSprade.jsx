import React from 'react';
import { Link } from 'react-router-dom';

// Define your data
const title = "More Then 60,000 Customers";

const desc = "Buy Any Medicines on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb ',
text: 'from thane',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb ',
text: 'form up',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb ',
text: 'from kerla',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb ',
text: 'from usa',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb ',
text: 'from uk',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb ',
text: 'from london',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb ',
text: 'join with us',
},
];


// Component definition
const LocationSprade = () => {
  return (
    <div className="clients-section style-2 padding-tb">
      <div className="container">
        <div className='section-header text-center'>
          <h2 className='title'>{title}</h2>
          <p>{desc}</p>
        </div>
        {/* Main content */}
        <div className='section-wrapper'>
          <div className='clients'>
            {
             clientsList.map((val, i) => (
                <div key={i} className='client-lists'>
                    <Link to="/sign up" className='client-content'>
                    <span>{val.text}</span>
                    </Link>
                    <div className='client-thumb'>
                        <img src={val.imgUrl} alt="image" />
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

export default LocationSprade;
