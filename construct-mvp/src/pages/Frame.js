import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import { calcStudCount, calcStudCost } from '../utils/calc';

function Frame({ onSubmit }) {

  let count = 0;
  let cost = 0;
  let qty = 0;
  let price = 0;

  // const originatingForm = "Frame"

  const [spacing, setSpacing] = useState(''); 
  const [height, setHeight] = useState(''); 
  const [wallLength, setWallLength] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [studCount, setStudCount] = useState(0);
  const [studCost, setStudCost] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [studType, setStudType] = useState(0);

  if(studType == 8){
    price = localStorage.getItem('TwoByFourByEightStudPrice');
  } else if(studType == 10){
    price = localStorage.getItem('TwoByFourByTenStudPrice');
  } else if(studType == 12){
    price = localStorage.getItem('TwoByFourByTwelveStudPrice');
  } else {
    price = localStorage.getItem('TwoByFourByEightStudPrice');
  }
  
  // let [count, setCount] = useState(0);

  // const classes = useStyles();

  const handleWallLengthChange = (event) => {
    setWallLength(event.target.value);
  };

  const handleSpacingChange = (event) => {
    setSpacing(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleStudTypeChange = (event) => {
    setStudType(event.target.value);
  };

  const handleQTYChange = (event) => {
    setQuantity(Number(event.target.value));
  };

    const handleSubmit = (event) => {
      event.preventDefault();
      // setSubmitted(true);
      // console.log(wallLength)
      // console.log(spacing)
      // count = calcStudCount(wallLength, spacing, quantity);
      // console.log(count);
      // cost = calcStudCost(localStorage.getItem('TwoByFourByEightStudPrice'), count);
      // console.log(cost);
      // setQuantity(quantity);
      // setStudCount(count);
      // setStudCost(cost);
      // console.log(quantity);
      // onSubmit(wallLength, count, cost, quantity); 

      // const newSubmission = {
      //   formType: 'Frame',
      //   length: wallLength,
      //   count: calcStudCount(wallLength, spacing, quantity),
      //   cost: calcStudCost(localStorage.getItem('TwoByFourByEightStudPrice'), count),
      //   quantity: quantity
      // };

      // const newSubmission = {
      //   formType: 'Frame',
      //   length: wallLength,
      //   count: studCount,
      //   cost: studCost,
      //   quantity: quantity
      // };

      // console.log("Wall Length: " + wallLength)
      // console.log("Spacing: " + spacing)
      // console.log("Quantity: " + quantity)
      // console.log("Count: " + count)
      // console.log("Cost: " + cost)
      // console.log("newSubmission.count: " + newSubmission.count)
      // console.log("newSubmission.cost: " + newSubmission.cost)
    
      // setSubmitted(true);
      // // setCount(newSubmission.count);
      // setQuantity(quantity);
      // setStudCount(newSubmission.count);
      // // setCount(newSubmission.count);
      // console.log(count)
      // setStudCost(newSubmission.cost);
    
      // onSubmit(newSubmission); 


      event.preventDefault();
      setSubmitted(true);
      // console.log("Wall Length: " + wallLength)
      // console.log("Height: " + height)
      // console.log("Wall Height: " + wallHeight)
      // console.log("Width: " + 4)
      console.log("Quantity before set quantity function: " + quantity)
      // setWallHeight(wallHeight);
      setQuantity(quantity);
      console.log("COUNT AND COST BEFORE")
      // setStudCount(count);
      // setStudCost(cost);
      console.log(count)
      console.log(cost)
      count = calcStudCount(wallLength, spacing, quantity);
      console.log("Count after calc function: " + studCount);
      cost = calcStudCost(price, count);
      console.log("Cost after calc function: " + studCost);
      console.log("COUNT AND COST AFTER")
      // setStudCount(count);
      // setStudCost(cost);
      console.log(count)
      console.log(cost)
    
      const newSubmission = {
        formType: 'Frame',
        length: wallLength,
        count: count,
        cost: cost,
        quantity: quantity
      };
    
      setStudCount(count);
      setStudCost(cost);
      console.log("Quantity: " + quantity);
      onSubmit(newSubmission);
    };
  
    return (
      <div id="frame">
        <form onSubmit={handleSubmit}>
          <FormControl style={{width: "250px"}}>
            <div class="form-item">
            <TextField
            onChange={handleWallLengthChange}
            label="Wall Length (In Feet)" 
            fullWidth/>
            </div>
            <div class="form-item">
            <Select
            value={spacing}
            onChange={handleSpacingChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            fullWidth
          >
            <MenuItem value="">
              <em>Stud Spacing</em>
            </MenuItem>
            <MenuItem value={16}>16 inches apart</MenuItem>
            <MenuItem value={24}>24 inches apart</MenuItem>
          </Select>
          </div>
          <div class="form-item">
          <Select
            value={height}
            // onChange={handleHeightChange}
            onChange={(event) => {
              handleHeightChange(event);
              handleStudTypeChange(event);
            }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            fullWidth
          >
            <MenuItem value="">
              <em>Stud height</em>
            </MenuItem>
            <MenuItem value={8}>2 in. x 4 in. x 8 ft.</MenuItem>
            <MenuItem value={10}>2 in. x 4 in. x 10 ft.</MenuItem>
            <MenuItem value={12}>2 in. x 4 in. x 12 ft.</MenuItem>
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
          For a wall {wallLength} feet long, you will need {studCount} studs. This will cost {studCost}.
        </Typography>
      )}
      </div>
    );
  }

export default Frame;