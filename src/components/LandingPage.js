import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Items from './Items';
import Customers from './Customers';
import AppSales from './AppSales';
import CounterSales from './CounterSales';
import Analysis from './Analysis';
import NeedHelp from './NeedHelp';
import Header from './Header';
import Footer from './Footer';
import useAuth from '../hooks/useAuth';
import '../common/LandingPage.css'; // Import CSS file for styles

const LandingPage = () => {
  useAuth();

  return (
    <div className="landing-page">
      <Header />
      <div className="content">
        <nav className="tile-container">
          <Link to="items" className="tile">
            {/* <img src="/images/items-icon.png" alt="Items" className="tile-icon" /> */}
            Items
          </Link>
          <Link to="customers" className="tile">Customers</Link>
          <Link to="app-sales" className="tile">App Sales</Link>
          <Link to="counter-sales" className="tile">Counter Sales</Link>
          <Link to="analysis" className="tile">Analysis</Link>
          <Link to="need-help" className="tile">Need Help</Link>
        </nav>
        <Routes>
          <Route path="items" element={<Items />} />
          <Route path="customers" element={<Customers />} />
          <Route path="app-sales" element={<AppSales />} />
          <Route path="counter-sales" element={<CounterSales />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="need-help" element={<NeedHelp />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
