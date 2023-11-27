import React from 'react';
import { Typography, Button, Divider } from '@mui/material';

function SidePanel({ wallLength, studCount, studCost, submissions, onRemove }) {
    const totalCost = submissions.reduce((total, { cost }) => total + cost, 0).toFixed(2);

    return (
    <aside style={{ display: 'inline-block', float: 'right', padding: '20px', width: '450px', height: '600px', backgroundColor: '#f5f5f5' }}>
    <div style={{ overflowY: 'scroll'}}>
        <div style={{ overflowY: 'auto', height: '600px'}}>
            {submissions.map(({ formType, productType, length, count, cost, quantity }, index) => (
            <div class="statsContainer" style={{ borderBottom: '1px solid black', display: "flex"}} key={index}>
                <div class='productImage' style={{ paddingTop: "20px" }}>                    
                    {formType === 'Frame' ? <img src="/images/2x4primestud.png" /> : <img src="/images/regulardrywall.png" />}
                    <div class='productType'>
                        <Typography variant="h6" color="primary">
                        {productType}
                        </Typography>
                    </div>
                </div>
                        {/* <div class='productImage' style={{ paddingTop: "20px" }}>
                            {formType === 'Frame' ? <img src="/images/2x4primestud.png" /> : <img src="/images/regulardrywall.png" />}
                        </div> */}
                <div class='projectStats'>
                    <Typography variant="h6" color="primary">
                    Wall Length: {length} ft.
                    <br/>
                    Count:  {count}
                    <br/> 
                    Cost:  ${cost}
                    <br/>
                    QTY: {quantity}
                    </Typography>
                    <Button onClick={() => onRemove(index)}>Remove</Button>
                </div>
                {/* <Button onClick={() => onRemove(index)}>Remove</Button> */}
            </div>
            ))}
        </div>
    </div>
    <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
        <Typography variant="h6" color="primary">
          <b>Total project cost: ${totalCost} </b>
        </Typography>
      </div>
  </aside>
  );
}

export default SidePanel;