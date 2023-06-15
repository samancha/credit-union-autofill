'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import styles from './page.module.css'

export default function Page() {
  return  return (
      <div className={styles.backgroundColor}>
        <h1>Payroll Deduction Request</h1>
        <Box
        component="form"
        // sx={{
        //   '& > :not(style)': { m: 1, width: '25ch' },
        // }}
        noValidate
        autoComplete="off"
      >
        <div className={styles.inputsContainer}>
        <TextField required id="name" label="Name:" variant="filled" />
        <TextField required id="email" label="Email:" variant="filled" />
        <TextField className={styles.selectButton} required id="type-of-payroll" select label="What type of payroll deduction are you requesting label?" variant="filled">
          <MenuItem value="">--Please select--</MenuItem>
          <MenuItem value="new">New Deduction</MenuItem>
          <MenuItem value="increase">Increase Existing Deduction</MenuItem>
          <MenuItem value="decrease">Decrease Existing Deduction</MenuItem>
          <MenuItem value="delete">Delete Existing Deduction</MenuItem>
        </TextField>
        <TextField required id="employment-type" select label="Are you a State Farm Agent or Employee?" variant="filled">
          <MenuItem value="">--Please select--</MenuItem>
          <MenuItem value="agent">Agent</MenuItem>
          <MenuItem value="employee">Employee</MenuItem>
        </TextField>
        <TextField required id="alias" label="What is your State Farm Alias?" variant="filled" maxlength="6" />
        </div>

        {/* <InputLabel id="What-type-of-payroll-deduction-are-you-requesting-label">What type of payroll deduction are you requesting?</InputLabel>
        <Select labelId="What-type-of-payroll-deduction-are-you-requesting-label"id="What-type-of-payroll-deduction-are-you-requesting"value=""label="What-type-of-payroll-deduction-are-you-requesting?">
          <MenuItem value="">--Please select--</MenuItem>
          <MenuItem value="new">New Deduction</MenuItem>
          <MenuItem value="increase">Increase Existing Deduction</MenuItem>
          <MenuItem value="decrease">Decrease Existing Deduction</MenuItem>
          <MenuItem value="delete">Delete Existing Deduction</MenuItem>
        </Select>
        </div> */}

        </Box>
      </div>
    )
  }
}