import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Frame from './pages/Frame';
import Wall from './pages/Wall';
import SidePanel from './components/SidePanel';

// 2x4x8 Stud Price
if(localStorage.getItem('TwoByFourByEightStudPrice') === null) {
  localStorage.setItem('TwoByFourByEightStudPrice', 3.18);
}
if(localStorage.getItem('TwoByFourByEightStudBulkPrice') === null) {
  localStorage.setItem('TwoByFourByEightStudBulkPrice', 2.86);
}

// 2x4x10 Stud Price
if(localStorage.getItem('TwoByFourByTenStudPrice') === null) {
  localStorage.setItem('TwoByFourByTenStudPrice', 5.32);
}
if(localStorage.getItem('TwoByFourByTenStudBulkPrice') === null) {
  localStorage.setItem('TwoByFourByTenStudBulkPrice', 4.79);
}

// 2x4x12 Stud Price
if(localStorage.getItem('TwoByFourByTwelveStudPrice') === null) {
  localStorage.setItem('TwoByFourByTwelveStudPrice', 6.35);
}
if(localStorage.getItem('TwoByFourByTwelveStudBulkPrice') === null) {
  localStorage.setItem('TwoByFourByTwelveStudBulkPrice', 5.72);
}

// fire resistant drywall 5/8 in. x 4 ft. x 8 ft.
if(localStorage.getItem('58x4x8FireResistantDrywallPrice') === null) {
  localStorage.setItem('58ByFourBy8FireResistantDrywallPrice', 15.41);
}
if(localStorage.getItem('58x4x8FireResistantDrywallBulkPrice') === null) {
  localStorage.setItem('58x4x8FireResistantDrywallBulkPrice', 13.10);
}

// fire resistant drywall 5/8 in. x 4 ft. x 10 ft.
if(localStorage.getItem('58x4x10FireResistantDrywallPrice') === null) {
  localStorage.setItem('58ByFourBy8FireResistantDrywallPrice', 20.44);
}
if(localStorage.getItem('58x4x10FireResistantDrywallBulkPrice') === null) {
  localStorage.setItem('58x4x10FireResistantDrywallBulkPrice', 15.33);
}

// fire resistant drywall 5/8 in. x 4 ft. x 12 ft.
if(localStorage.getItem('58x4x12FireResistantDrywallPrice') === null) {
  localStorage.setItem('58x4x12FireResistantDrywallPrice', 23.98);
}
if(localStorage.getItem('58x4x12FireResistantDrywallBulkPrice') === null) {
  localStorage.setItem('58x4x12FireResistantDrywallBulkPrice', 17.99);
}

// light weight drywall 1/2 in. x 4 ft. x 8 ft.
if(localStorage.getItem('12x4x8LightWeightDrywallPrice') === null) {
  localStorage.setItem('12x4x8LightWeightDrywallPrice', 12.85);
}
if(localStorage.getItem('12x4x8LightWeightDrywallBulkPrice') === null) {
  localStorage.setItem('12x4x8LightWeightDrywallBulkPrice', 10.92);
}

// light weight drywall 1/2 in. x 4 ft. x 10 ft.
if(localStorage.getItem('12x4x10LightWeightDrywallPrice') === null) {
  localStorage.setItem('12x4x10LightWeightDrywallPrice', 18.46);
}
if(localStorage.getItem('12x4x10LightWeightDrywallBulkPrice') === null) {
  localStorage.setItem('12x4x10LightWeightDrywallBulkPrice', 13.85);
}

// light weight drywall 1/2 in. x 4 ft. x 12 ft.
if(localStorage.getItem('12x4x12LightWeightDrywallPrice') === null) {
  localStorage.setItem('12x4x12LightWeightDrywallPrice', 18.68);
}
if(localStorage.getItem('12x4x12LightWeightDrywallBulkPrice') === null) {
  localStorage.setItem('12x4x12LightWeightDrywallBulkPrice', 14.01);
}

// regular drywall 3/8 in. x 4 ft. x 8 ft.
if(localStorage.getItem('38x4x8RegularDrywallPrice') === null) {
  localStorage.setItem('38x4x8RegularDrywallPrice', 14.78);
}
if(localStorage.getItem('38x4x8RegularDrywallBulkPrice') === null) {
  localStorage.setItem('38x4x8RegularDrywallBulkPrice', 12.56);
}

// regular drywall 1/4 in. x 4 ft. x 8 ft.
if(localStorage.getItem('14x4x8RegularDrywallPrice') === null) {
  localStorage.setItem('14x4x8RegularDrywallPrice', 15.41);
}
if(localStorage.getItem('14x4x8RegularDrywallBulkPrice') === null) {
  localStorage.setItem('14x4x8RegularDrywallBulkPrice', 13.10);
}

// mold resistant drywall 1/2 in. x 4 ft. x 8 ft.
if(localStorage.getItem('12x4x8MoldResistantDrywallPrice') === null) {
  localStorage.setItem('12x4x8MoldResistantDrywallPrice', 20.26);
}
if(localStorage.getItem('12x4x8MoldResistantDrywallBulkPrice') === null) {
  localStorage.setItem('12x4x8MoldResistantDrywallBulkPrice', 17.22);
}





function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);
  // const [wallLength, setWallLength] = useState(0);
  // const [studCount, setStudCount] = useState(0);
  // const [studCost, setStudCost] = useState(0);
  const [showFrame, setShowFrame] = useState(true);
  const [showWall, setShowWall] = useState(false);


  const [submissions, setSubmissions] = useState([]);

  // const handleFrameFormSubmit = (length, count, cost, quantity) => {
  //   setSubmissions(prevSubmissions => [...prevSubmissions, { length, count, cost, quantity }]);
  // };

  // const handleWallFormSubmit = (length, count, cost, quantity) => {
  //   setSubmissions(prevSubmissions => [...prevSubmissions, { length, count, cost, quantity }]);
  // };

  const handleFrameFormSubmit = (newSubmission) => {
    setSubmissions(prevSubmissions => [...prevSubmissions, newSubmission]);
  };

  const handleWallFormSubmit = (newSubmission) => {
    setSubmissions(prevSubmissions => [...prevSubmissions, newSubmission]);
  };

  const handleRemove = (index) => {
    setSubmissions(prevSubmissions => prevSubmissions.filter((_, i) => i !== index));
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleFrameToggle = () => {
    setShowFrame(prevShowFrame => !prevShowFrame);
  };

  const handleWallToggle = () => {
    setShowWall(prevShowWall => !prevShowWall);
  };


  return (
    <div className="App">
      <Header /> {/* Use the Header component */}
      <div>
      <div style={{ display: 'inline-block' }}>
        <div style={{ display: 'block' }}>
          {/* <Walls onSubmit={handleFormSubmit} /> */}
          <Button onClick={handleFrameToggle}>
            {showFrame ? '- Hide Studs' : '+ Show Studs'}
          </Button>
          {showFrame && <Frame onSubmit={handleFrameFormSubmit} />}
          <br></br>
          <Button onClick={handleWallToggle}>
            {showWall ? '- Hide Drywall' : '+ Show Drywall'}
          </Button>
          {showWall && <Wall onSubmit={handleWallFormSubmit} />}
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
