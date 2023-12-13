import React, { useState } from 'react';
import Shopservice from '../services/Shopservice';
import { Link, useNavigate } from 'react-router-dom';
import './Createshop.css'
const Createshop = () => {
  
  const navigate = useNavigate();
  const [shop, setShop] = useState({
    category: '',
    empid: '',
    name: '',
    cust: '',
    status: '',
    owner: '',
    leasests: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setShop({ ...shop, [name]: value });
  };

  const saveShop = (e) => {
    e.preventDefault();
    Shopservice.createshop(shop).then((res) => {
      // Handle successful save, e.g., navigate to the shop list page
      console.log('Shop saved successfully');
      navigate('/shops'); // Change the path accordingly
    });
  };

  const cancel = () => {
    // Handle cancellation, e.g., navigate back to the shop list page
    console.log('Cancelled');
    navigate('/shops'); // Change the path accordingly
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='card'>
          <h1 className='text'>ADD SHOP</h1>
          <div className='card-body'>
            <form>
              <div className='form'>
                <label> Category</label>
                <input
                  placeholder='Enter the Category'
                  name='category'
                  className='control'
                  value={shop.category}
                  onChange={handleChange}
                />
              </div>
              <div className='form'>
                <label> Employee Id</label>
                <input
                  placeholder='Employee id'
                  name='empid'
                  className='control'
                  value={shop.empid}
                  onChange={handleChange}
                />
              </div>
              <div className='form'>
                <label> Name</label>
                <input
                  placeholder='Enter the Name'
                  name='name'
                  className='control'
                  value={shop.name}
                  onChange={handleChange}
                />
              </div>
              <div className='form'>
                <label> Customer</label>
                <input
                  placeholder='Customer'
                  name='customer'
                  className='control'
                  value={shop.cust}
                  onChange={handleChange}
                />
              </div>
              <div className='form'>
                <label> Status</label>
                <input
                  placeholder='Enter the Status'
                  name='status'
                  className='control'
                  value={shop.status}
                  onChange={handleChange}
                />
              </div>
              <div className='form'>
                <label> Owner</label>
                <input
                  placeholder='Enter the Owner'
                  name='owner'
                  className='control'
                  value={shop.owner}
                  onChange={handleChange}
                />
              </div>
              <div className='form'>
                <label> Lease Status</label>
                <input
                  placeholder='Lease status'
                  name='leasests'
                  className='control'
                  value={shop.leasests}
                  onChange={handleChange}
                />
              </div>

              <button className='btn' onClick={saveShop}>
                Save
              </button>
              <button className='btn' onClick={cancel} style={{ marginLeft: '10px' }}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createshop;
