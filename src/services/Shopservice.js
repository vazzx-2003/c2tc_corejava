import axios from 'axios';

const SHOP_API_BASE_URL = "http://localhost:8081/shops";
const add_url = "http://localhost:8081/shop/add";
//const getshopByid_url = "http://localhost:8081/shops";
const update_url="http://localhost:8081/shop/update";
const delete_url="http://localhost:8081/shop/delete";

class Shopservice {
  
  getShops() {
    return axios.get(SHOP_API_BASE_URL);
  }

  createshop(shop) {
    return axios.post(`${add_url}`, shop);
    // Use template literals and separate the URL and the data properly.
  }

  getshopByid(numshopid) {
    return axios.get(`${SHOP_API_BASE_URL}/${numshopid}`);
  }
  updateshop(shop, shopid) {
    return axios.put(`${update_url}/${shopid}`, shop,shopid);
  }
  deleteshop(shopid)
  {
   return axios.delete(`${delete_url}/${shopid}`,shopid);
  }
}

export default new Shopservice();
