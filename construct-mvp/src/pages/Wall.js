import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import { calcStudCount, calcStudCost } from '../utils/calc';

function Wall({ onSubmit }) {

  let count = 0;
  let cost = 0;
  let qty = 0;

  const [spacing, setSpacing] = useState(''); 
  const [height, setHeight] = useState(''); 
  const [wallLength, setWallLength] = useState('');
  const [submitted, setSubmitted] = useState(false);
  let [studCount, setStudCount] = useState(0);
  let [studCost, setStudCost] = useState(0);
  let [quantity, setQuantity] = useState(0);

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

  const handleQTYChange = (event) => {
    setQuantity(Number(event.target.value));
  };

    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
      console.log(wallLength)
      console.log(spacing)
      count = calcStudCount(wallLength, spacing, quantity);
      console.log(count);
      cost = calcStudCost(localStorage.getItem('TwoByFourByEightStudPrice'), count);
      console.log(cost);
      setQuantity(quantity);
      setStudCount(count);
      setStudCost(cost);
      console.log(quantity);
      onSubmit(wallLength, count, cost, quantity); 
    };

    // const handleSubmit = (wallLength, count, cost, quantity) => {
    //   setSubmissions(prevSubmissions => [...prevSubmissions, { length: wallLength, count, cost, quantity }]);
    // };
  
    return (
      <div id="frame">
        {/* <h1>Walls Page</h1> */}
        <form onSubmit={handleSubmit}>
          <FormControl>
            <div class="form-item">
            <TextField
            onChange={handleWallLengthChange}
            label="Wall Length (In Feet)" />
            {/* <TextField label="Stud Spacing" /> */}
            </div>
            <div class="form-item">
            <Select
            value={spacing}
            onChange={handleSpacingChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            
            <MenuItem value="">
              <em>Stud Spacing</em>
            </MenuItem>
            <MenuItem value={16}>16 inches apart</MenuItem>
            <MenuItem value={24}>24 inches apart</MenuItem>
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
          </div>
          <div class="form-item">
          <Select
            value={height}
            onChange={handleHeightChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
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
            label="QTY: Number of Walls" />
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
          For a wall {wallLength} feet long, you will need {studCount} studs. This will cost {studCost}. QTY: {quantity}
        </Typography>
      )}
      </div>
    );
  }

export default Wall;