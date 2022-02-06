import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function BasicDatePicker() {
  const [dueDate, setDueDate] = useState('');

  return (
    <DatePicker
      label='Basic example'
      value={dueDate}
      onChange={(e) => {
        setDueDate(e.target.value);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
