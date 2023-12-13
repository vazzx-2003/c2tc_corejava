import React, { useEffect, useState } from 'react';
import Shopservice from '../services/Shopservice';
import {Navigate, navigate, useParams} from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
const Update = (props) => {
  const { shopid } = useParams();
  
  
  const [state, setState] = useState({
   
   shopid: parseInt(shopid, 10),
    category: '',
    empid: '',
    name: '',
    cust: '',
    status: '',
    owner: '',
    leasests: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/shops/${shopid}`, {
          method: 'GET',
          credentials: 'include', // or 'same-origin' if the server is on the same origin
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        const { data1 } = await Shopservice.getshopByid(state.shopid);
        setState((prevState) => ({
          ...prevState,
          category: data.category,
          empid: data.empid,
          name: data.name,
          cust: data.cust,
          status: data.status,
          owner: data.owner,
          leasests: data.leasests,
        }));
      } catch (error) {
        console.error('Error fetching shop data:', error);
      }
    };

    fetchData();
  }, [state.shopid]);

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const updateShop = async (e) => {
    e.preventDefault();

    const shop = {
      shopid: state.shopid,
      category: state.category,
      empid: state.empid,
      name: state.name,
      cust: state.cust,
      status: state.status,
      owner: state.owner,
      leasests: state.leasests,
    };
    try {
      const response = await fetch(`http://localhost:8081/shop/update/${shop.shopid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // or 'same-origin' if the server is on the same origin
        body: JSON.stringify(shop),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const updatedData = await response.json();
      console.log('Update successful:', updatedData);
      //Navigate('/shops');
  
      // If you want to redirect or perform any other action after the update, you can do it here.
    } catch (error) {
      console.error('Error updating shop:', error);
    }
  

    // Shopservice.updateshop(state.shopid, shop)
    //   .then((res) => {
    //     console.log('Update successful:', res.data);
    //     Navigate('/shops');
    //   })
    //   .catch((error) => {
    //     console.error('Error updating shop:', error);
    //   });
      
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <h1 className="text">UPDATE SHOP</h1>
          <div className="card-body">
            <form>
            <div className="form">
                <label> Category</label>
                <input
                 // placeholder="Enter the Category"
                  name="shopid"
                  className="control"
                  value={state.shopid}
                  onChange={handleChange} /></div>
              <div className="form">
                <label> Category</label>
                <input
                  placeholder="Enter the Category"
                  name="category"
                  className="control"
                  value={state.category}
                  onChange={handleChange}
                />
              </div>
              <div className="form">
                <label> Employee Id</label>
                <input
                  placeholder="Employee id"
                  name="empid"
                  className="control"
                  value={state.empid}
                  onChange={handleChange}
                />
              </div>
              <div className="form">
                <label> Name</label>
                <input
                  placeholder="Enter the Name"
                  name="name"
                  className="control"
                  value={state.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form">
                <label> Customer</label>
                <input
                  placeholder="Customer"
                  name="customer"
                  className="control"
                  value={state.cust}
                  onChange={handleChange}
                />
              </div>
              <div className="form">
                <label> Status</label>
                <input
                  placeholder="Enter the Status"
                  name="status"
                  className="control"
                  value={state.status}
                  onChange={handleChange}
                />
              </div>
              <div className="form">
                <label> Owner</label>
                <input
                  placeholder="Enter the Owner"
                  name="owner"
                  className="control"
                  value={state.owner}
                  onChange={handleChange}
                />
              </div>
              <div className="form">
                <label> Lease Status</label>
                <input
                  placeholder="Lease status"
                  name="leasests"
                  className="control"
                  value={state.leasests}
                  onChange={handleChange}
                />
              </div>

              <button className="btn" onClick={updateShop}>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
