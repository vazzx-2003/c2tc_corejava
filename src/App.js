// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shoplist from './components/Shoplist';
//import Header from './components/Header';
import Footer from './components/Footer';
import Createshop from './components/Createshop';
import Update from './components/Update';
import View from './components/View';
import { RouteMatch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path='/' element={<Shoplist />} />
          <Route path='/shops' element={<Shoplist />} />
          <Route path='/add' element={<Createshop>HI</Createshop>} />
          <Route path='/update/:shopid' element={<Update />} />
          <Route path='/view/:shopid'  element={<View/>}></Route>
        </Routes>
      </Router>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
