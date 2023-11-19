import React from 'react';
import { Typography, Button } from '@mui/material';

function SidePanel({ wallLength, studCount, studCost, submissions, onRemove }) {
    const totalCost = submissions.reduce((total, { cost }) => total + cost, 0);

    return (
    <aside style={{ display: 'inline-block', float: 'right', padding: '20px', width: '500px', height: '600px', backgroundColor: '#f5f5f5' }}>
    <div style={{ overflowY: 'scroll'}}>
        <div style={{ overflowY: 'auto', height: '600px'}}>
            {submissions.map(({ length, count, cost, quantity }, index) => (
            <div style={{ borderBottom: '1px solid black'}} key={index}>
                <Typography variant="h6" color="primary">
                Wall Length: {length}
                <br/>
                Studs:  {count}
                <br/> 
                Cost:  $ {cost}
                <br/>
                QTY: {quantity}
                </Typography>
                <Button onClick={() => onRemove(index)}>Remove</Button>
            </div>
            ))}
        </div>
    </div>
    <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
        <Typography variant="h6" color="primary">
          <b>Total cost: $ {totalCost} </b>
        </Typography>
      </div>
  </aside>
  );
}

export default SidePanel;