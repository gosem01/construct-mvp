import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import { calcStudCount, calcStudCost } from '../utils/calc';
import { calcDrywallCount, calcDrywallCost } from '../utils/calc';

function Wall({ onSubmit }) {

  let count = 0;
  let cost = 0;
  let qty = 0;
  let drywallHeight = 0;
  let drywallWidth = 0;
  let price = 0;

//   const originatingForm = "Wall";

  const [spacing, setSpacing] = useState(''); 
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [wallHeight, setWallHeight] = useState('');
  const [wallLength, setWallLength] = useState('');
  const [drywallPanelType, setDrywallPanelType] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  let [studCount, setStudCount] = useState(0);
  let [studCost, setStudCost] = useState(0);
  let [quantity, setQuantity] = useState(0);
  let [dryWallPanelCount, setDryWallPanelCount] = useState(0);
  let [dryWallPanelCost, setDryWallPanelCost] = useState(0);

  if(drywallPanelType == 0){
        drywallHeight = 4;
        drywallWidth = 8;
        price = localStorage.getItem('38x4x8RegularDrywallPrice');
  } else if(drywallPanelType == 1){
        drywallHeight = 4;
        drywallWidth = 8;
        price = localStorage.getItem('14x4x8RegularDrywallPrice');
    } else if(drywallPanelType == 2){
        drywallHeight = 4;
        drywallWidth = 8;
        price = localStorage.getItem('58x4x8FireResistantDrywallPrice');
    } else if(drywallPanelType == 3){
        drywallHeight = 4;
        drywallWidth = 10;
        price = localStorage.getItem('58x4x10FireResistantDrywallPrice');
    } else if(drywallPanelType == 4){
        drywallHeight = 4;
        drywallWidth = 12;
        price = localStorage.getItem('58x4x12FireResistantDrywallPrice');
    } else if(drywallPanelType == 5){
        drywallHeight = 4;
        drywallWidth = 8;
        price = localStorage.getItem('12x4x8LightWeightDrywallPrice');
    } else if(drywallPanelType == 6){
        drywallHeight = 4;
        drywallWidth = 10;
        price = localStorage.getItem('12x4x10LightWeightDrywallPrice');
    } else if(drywallPanelType == 7){
        drywallHeight = 4;
        drywallWidth = 12;
        price = localStorage.getItem('12x4x12LightWeightDrywallPrice');
    } else if(drywallPanelType == 8){
        drywallHeight = 4;
        drywallWidth = 8;
        price = localStorage.getItem('12x4x8MoldResistantDrywallPrice');
    } else {
        drywallHeight = 4;
        drywallWidth = 8;
        price = localStorage.getItem('38x4x8RegularDrywallPrice');
    }

  const handleWallLengthChange = (event) => {
    setWallLength(event.target.value);
  };
  
  const handleWallHeightChange = (event) => {
    setWallHeight(event.target.value);
  };

  const handleSpacingChange = (event) => {
    setSpacing(event.target.value);
  };
  
  const handleDrywallPanelTypeChange = (event) => {
    setDrywallPanelType(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleQTYChange = (event) => {
    setQuantity(Number(event.target.value));
  };

    // const handleWallSubmit = (event) => {
    //   event.preventDefault();
    //   setSubmitted(true);
    //   console.log("Wall Length: " + wallLength)
    //   console.log("Height: " + height)
    //   console.log("Wall Height: " + wallHeight)
    //   console.log("Width: " + 4)
    //   console.log("Quantity before set quantity function: " + quantity)
    //   setWallHeight(wallHeight);
    //   setQuantity(quantity);
    //   dryWallPanelCount = calcDrywallCount(wallLength, wallHeight, drywallHeight, drywallWidth, quantity);
    //   console.log("Count after calc function: " + dryWallPanelCount);
    //   dryWallPanelCost = calcDrywallCost(price, dryWallPanelCount, drywallPanelType);
    //   console.log("Cost after calc function: " + dryWallPanelCost);

    // //   setStudCount(count);
    // //   setStudCost(cost);
    //   setDryWallPanelCount(dryWallPanelCount);
    //   setDryWallPanelCost(dryWallPanelCost);
    //   console.log("Quantity: " + quantity);
    //   onSubmit(wallLength, dryWallPanelCount, dryWallPanelCost, quantity);
    // };
    const handleWallSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        console.log("Wall Length: " + wallLength)
        console.log("Height: " + height)
        console.log("Wall Height: " + wallHeight)
        console.log("Width: " + 4)
        console.log("Quantity before set quantity function: " + quantity)
        setWallHeight(wallHeight);
        setQuantity(quantity);
        dryWallPanelCount = calcDrywallCount(wallLength, wallHeight, drywallHeight, drywallWidth, quantity);
        console.log("Count after calc function: " + dryWallPanelCount);
        dryWallPanelCost = calcDrywallCost(price, dryWallPanelCount, drywallPanelType);
        console.log("Cost after calc function: " + dryWallPanelCost);
      
        const newSubmission = {
          formType: 'Wall',
          length: wallLength,
          count: dryWallPanelCount,
          cost: dryWallPanelCost,
          quantity: quantity
        };
      
        setDryWallPanelCount(dryWallPanelCount);
        setDryWallPanelCost(dryWallPanelCost);
        console.log("Quantity: " + quantity);
        onSubmit(newSubmission);
      };

    return (
      <div id="frame">
        <form onSubmit={handleWallSubmit}>
          <FormControl style={{width: "250px"}}>
            <div class="form-item">
                <TextField
                onChange={handleWallLengthChange}
                label="Wall Length (In Feet)" 
                fullWidth/>
            </div>
            <div class="form-item">
                <TextField
                onChange={handleWallHeightChange}
                label="Wall Height (In Feet)" 
                fullWidth/>
            </div>
            <div class="form-item">
                <Select
                value={drywallPanelType}
                onChange={handleDrywallPanelTypeChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                fullWidth
            >
                
                <MenuItem value="">
                <em>Drywall Type</em>
                </MenuItem>
                <MenuItem value={0}>Regular 3/8 in. x 4 ft. x 8 ft.</MenuItem>
                <MenuItem value={1}>Regular 1/4 in. x 4 ft. x 8 ft.</MenuItem>
                <MenuItem value={2}>Fire Resistant 5/8 in. x 4 ft. x 8 ft.</MenuItem>
                <MenuItem value={3}>Fire Resistant 5/8 in. x 4 ft. x 10 ft.</MenuItem>
                <MenuItem value={4}>Fire Resistant 5/8 in. x 4 ft. x 12 ft.</MenuItem>
                <MenuItem value={5}>Light Weight 1/2 in. x 4 ft. x 8 ft.</MenuItem>
                <MenuItem value={6}>Light Weight 1/2 in. x 4 ft. x 10 ft.</MenuItem>
                <MenuItem value={7}>Light Weight 1/2 in. x 4 ft. x 12 ft.</MenuItem>
                <MenuItem value={8}>Mold Resistant 1/2 in. x 4 ft. x 8 ft.</MenuItem>
            </Select>
          </div>
          <div class="form-item">
          <TextField
            onChange={handleQTYChange}
            label="QTY: Number of Walls" 
            fullWidth/>
            </div>
            <div class="form-item">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            </div>
          </FormControl>
        </form>
        {submitted && (
        <Typography variant="h6" color="primary">
          For a wall {wallLength} feet long, you will need {dryWallPanelCount} panels. This will cost {dryWallPanelCost}.
        </Typography>
      )}
      </div>
    );
  }

export default Wall;