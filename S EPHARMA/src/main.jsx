import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Shop from './Shop/Shop';
import SingleProduct from './Shop/SingleProduct';
import CartPage from './Shop/CartPage';
import SingleBlog from './components/SingleBlog';
import About from './About/About';
import Contact from './components/Contact';
import AuthProvider from './contexts/AuthProvider'; // Added this import
import PrivateRoute from './Privateroute/PrivateRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomeCategory from './components/HomeCategory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <SingleBlog /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:id", element: <SingleProduct /> },
      { path: "cart-page", element: <PrivateRoute><CartPage/></PrivateRoute> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> }
    ]
  },
  {
    path: "/home",
    element: <HomeCategory/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  }
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
