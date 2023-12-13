import React, { useEffect, useState } from 'react';
import Shopservice from '../services/Shopservice';

const View = ({ shopid }) => {
  const [shopData, setShopData] = useState(null);
  const numShopId = parseInt(shopid, 10); // Parse shopid to an integer

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/shops/${numShopId}`, {
          method: 'GET',
          credentials: 'include', // or 'same-origin' if the server is on the same origin
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setShopData(data);
      } catch (error) {
        console.error('Error fetching shop data:', error.message);
      }
    };

    fetchShopData();
  }, [numShopId]);

  return (
    <div>
      <h1>Shop Details</h1>
      {shopData ? (
        <div>
          <p>Shop ID: {shopData.shopid}</p>
          <p>Category: {shopData.category}</p>
          <p>Employee ID: {shopData.empid}</p>
          <p>Name: {shopData.name}</p>
          <p>Customer: {shopData.cust}</p>
          <p>Status: {shopData.status}</p>
          <p>Owner: {shopData.owner}</p>
          <p>Lease Status: {shopData.leasests}</p>
          <p> shopid : 0</p>
          <p> shopName: vasanth</p>
          <p> Category : credit</p>
          <p> employee id : 1</p>
          <p> Customer: ee</p>
          <p> Status : effe</p>
          <p> Owner : ee</p>
          <p> Lease status : effe</p>
         
        </div>
      ) : (
        <p>Loading shop data...</p>
      )}
    </div>
  );
};

export default View;
