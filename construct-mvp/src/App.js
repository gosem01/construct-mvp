import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography } from '@mui/material';
import './App.css';
import Header from './components/Header'; // Import the Header component
import Walls from './pages/Walls';
import SidePanel from './components/SidePanel';

if(localStorage.getItem('TwoByFourByEightStudPrice') === null) {
  localStorage.setItem('TwoByFourByEightStudPrice', 3.18);
}
if(localStorage.getItem('TwoByFourByEightStudBulkPrice') === null) {
  localStorage.setItem('TwoByFourByEightStudBulkPrice', 2.86);
}

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [wallLength, setWallLength] = useState(0);
  const [studCount, setStudCount] = useState(0);
  const [studCost, setStudCost] = useState(0);

  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmit = (length, count, cost) => {
    setSubmissions(prevSubmissions => [...prevSubmissions, { length, count, cost }]);
  };

  const handleRemove = (index) => {
    setSubmissions(prevSubmissions => prevSubmissions.filter((_, i) => i !== index));
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // const handleFormSubmit = (length, count, cost) => {
  //   setWallLength(length);
  //   setStudCount(count);
  //   setStudCost(cost);
  //   setDrawerOpen(true);
  // };

  return (
    <div className="App">
      <Header /> {/* Use the Header component */}
      <div>
      <div style={{ display: 'inline-block' }}>
        <div style={{ display: 'block' }}>
          <Walls onSubmit={handleFormSubmit} /> {/* Use the Walls component */}
        </div>
        {/* <SidePanel open={drawerOpen} onClose={handleDrawerClose} wallLength={wallLength} studCount={studCount} studCost={studCost} /> */}
      </div>
      {/* <SidePanel open={drawerOpen} onClose={handleDrawerClose} wallLength={wallLength} studCount={studCount} studCost={studCost} /> */}
      <SidePanel submissions={submissions} onRemove={handleRemove} />
      </div>
    </div>
  );
}

export default App;
