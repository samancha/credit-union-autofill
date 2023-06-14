'use client'
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


// const Page = () => {
//   const [savingsGoal, setSavingsGoal] = useState();
//   const [frequency, setFrequency] = useState();
//   const [contributions, setContributions] = useState();
//   const [interest, setInterestRate] = useState();
//   const [result, setResult] = useState();

const calculate = () => {
  // contribution = (Monthly contribution = FV / ((1 + r) ^ n - 1) / r
// Where:
// FV = Future value (desired amount) = $10,000
// r = Monthly interest rate = 0.00417
// n = Number of compounding periods = 60

    const
}

export default function Page() {

  return (
  <div className="SavingCalculator">
      <h1>Savings Calculator</h1>
    <Stack 
      direction='column'
      spacing={2}
    >
    <form>
      <TextField 
        label="Total Savings Goal" 
        variant="outlined" 
        onChange={(e) => setSavingsGoal(e.target.value)}
      />
      <TextField 
        label="Frequency" 
        variant="outlined" 
        onChange={(e) => setFrequency(e.target.value)}
      />
      <TextField 
        label="Contributions" 
        variant="outlined" 
        onChange={(e) => setContributions(e.target.value)}
      />
      <TextField 
        label="Annual Interest" 
        variant="outlined"
        onChange={(e) => setInterestRate(e.target.value / 100)}
      />
      <Button 
        variant='contained'
        color="primary"
        onClick={() => {}}>
          Calculate
      </Button>
    </form> 
    </Stack>    
  </div>
  ) 
  
}

