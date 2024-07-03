import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import useAuth from '../hooks/useAuth';
import '../common/Items.css'; // Import CSS file for styles

const CLIENT_ID = '9CB0F686-0336-4CDA-9B6E-3162CF5A2D25';

const Items = () => {
  useAuth();

  const [items, setItems] = useState([]);
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.post(
          'http://localhost:62083/api/Item',
          {
            ClientID: CLIENT_ID,
            isInStock: true,
          }
        );
        if (response.data.status === 1) {
          setItems(response.data.data);
          const initialCounts = response.data.data.reduce((acc, item) => {
            acc[item.itemid] = 0;
            return acc;
          }, {});
          setCounts(initialCounts);
        } else {
          console.error('Failed to fetch items:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);


  return (
    <Layout>
      <div className="items-container">
        {items.map((item) => (
          <div key={item.itemid} className="item-tile">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            
          </div>
        ))}
      </div>
      <Link to="/landing" className="back-link">Back to Landing Page</Link>
    </Layout>
  );
};

export default Items;
