'use client'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useForm } from 'react-hook-form'


export default function Page() {

  const [formData, setFormData] = useState({
    first: "",
    last: "",
  });

  const { handleSubmit, register, formState: {isValid} } = useForm({
    defaultValues: {
      firstName: "bill",
      lastName: "luo",
    },
    mode: 'onChange'
  })

  const handleRegistration = (data) => console.log("Form data", data)

  return (
    <div>
      <h1>Hello from the Login DIRECTORY</h1>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <input {...register('firstName')} id="first" name="firstName" label="Username" variant="outlined"/>
        <TextField {...register('lastName')} id="last" name="lastName" label="Password" variant="outlined"/>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}