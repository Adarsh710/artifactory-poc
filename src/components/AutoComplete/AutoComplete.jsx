import React from 'react';
import { TextField, InputLabel } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

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
