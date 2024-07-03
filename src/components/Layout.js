// Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../common/Layout.css'; // Import CSS file for styles

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;