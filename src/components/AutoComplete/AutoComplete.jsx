import React from 'react';
import { TextField, InputLabel, Autocomplete } from '@mui/material';

const AutoComplete = ({
  id,
  label,
  options,
  onChange,
  onInputChange,
  ...props
}) => {
  return (
    <>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Autocomplete
        id={id}
        size='small'
        onChange={onChange}
        onInputChange={onInputChange}
        options={options}
        renderInput={(params) => <TextField {...params} variant='outlined' />}
        {...props}
      />
    </>
  );
};

export default AutoComplete;
