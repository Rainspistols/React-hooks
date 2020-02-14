import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Search = () => {
  const [value, setValue] = useState('');
  const { show } = useContext(AlertContext);
  const onSubmit = e => {
    if (e.key !== 'Enter') {
      return;
    }
    if (value.trim()) {
      console.log('Make request with: ', value);
    } else {
      show('Enter user details!');
    }
  };
  return (
    <div className='form-group'>
      <input
        type='text'
        className='form-control'
        placeholder='Enter username'
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};
