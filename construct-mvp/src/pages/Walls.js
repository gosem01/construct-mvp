import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
// import {getPrimeStudTwoByFourByEight} from '../utils/getPrices';
import { calcStudCount, calcStudCost } from '../utils/calc';

function Walls({ onSubmit }) {

  let count = 0;
  let cost = 0;

  const [spacing, setSpacing] = useState(''); 
  const [height, setHeight] = useState(''); 
  const [wallLength, setWallLength] = useState('');
  const [submitted, setSubmitted] = useState(false);
  let [studCount, setStudCount] = useState(0);
  let [studCost, setStudCost] = useState(0);

  const handleWallLengthChange = (event) => {
    setWallLength(event.target.value);
  };

  const handleSpacingChange = (event) => {
    setSpacing(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
      count = calcStudCount(wallLength, spacing);
      console.log(count);
      cost = calcStudCost(localStorage.getItem('TwoByFourByEightStudBulkPrice'), count);
      console.log(cost);
      setStudCount(count);
      setStudCost(cost);
      onSubmit(wallLength, count, cost); 
    };
  
    return (
      <div>
        <h1>Walls Page</h1>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <TextField
            onChange={handleWallLengthChange}
            label="Wall Length (In Feet)" />
            {/* <TextField label="Stud Spacing" /> */}
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
          <Select
            value={height}
            onChange={handleHeightChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>Stud height</em>
            </MenuItem>
            <MenuItem value={8}>8 feet</MenuItem>
            <MenuItem value={10}>10 feet</MenuItem>
            <MenuItem value={12}>12 feet</MenuItem>
          </Select>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </FormControl>
        </form>
        {submitted && ( // Add this block
        <Typography variant="h6" color="primary">
          For a wall {wallLength} feet long, you will need {studCount} studs. This will cost {studCost}.
        </Typography>
      )}
      </div>
    );
  }

export default Walls;