import React, { useState, useEffect } from 'react';
import Shopservice from '../services/Shopservice';
import { Link, useNavigate } from 'react-router-dom';
import './Shoplist.css';

const Shoplist = () => {
   
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [newShopData, setNewShopData] = useState({
    name: '',
    category: '',
    empid: '',
    cust: '',
    status: '',
    owner: '',
    leasests: '',

  });

  const getShops = () => {
    Shopservice.getShops().then((res) => {
      setShops(res.data);
    });
  };

  const deleteShop = (shopid) => {
    Shopservice.deleteshop(shopid)
      .then((res) => {
        if (res.status === 200) {
          // Update the state to remove the deleted shop
          setShops((prevShops) => prevShops.filter((shop) => shop.shopid !== shopid));
        }
      })
      .catch((error) => {
        console.error("Error deleting shop:", error);
      });
  };

  const editShop = (shopid) => {
    navigate(`/update/${shopid}`);
  };
  const viewShop=(shopid)=>
  {
    navigate(`/view/${shopid}`);
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission logic, e.g., call an API to add a shop
  //   // You can use state variables to get the form data
  //   // For simplicity, I'll just log the form data for now
  //   console.log("Form submitted:", newShopData);
  // };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setNewShopData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  useEffect(() => {
    getShops();
  }, []);

  return (
    <div>
       <div className="navbar">
        <h1>SHOP MANAGEMENT</h1>
      </div>
      <div className="add-shop-btn">
        <button onClick={() => navigate('/add')}>Go to Add Shop</button>
      </div>
      <div className='row'>
        <table className='table'>
          <thead>
            <tr>
              <th>Shopid</th>
              <th>Shop Name</th>
              <th>Category</th>
              <th>Employee Id</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Lease Status</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop) => (
              <tr key={shop.shopid}>
                <td>{shop.shopid}</td>
                <td>{shop.name}</td>
                <td>{shop.category}</td>
                <td>{shop.empid}</td>
                <td>{shop.cust}</td>
                <td>{shop.status}</td>
                <td>{shop.owner}</td>
                <td>{shop.leasests}</td>
                <td>
                  
                    <button onClick={()=>editShop(shop.shopid)}className='btn'>Update</button>
                  </td>
                  <td>
                  <button onClick={() => deleteShop(shop.shopid)} className='btn'>
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => viewShop(shop.shopid)} className='btn'>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default Shoplist;
