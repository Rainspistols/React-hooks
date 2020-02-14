import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Search = () => {
  const { show } = useContext(AlertContext);
  const onSubmit = e => {
    if (e.key === 'Enter') {
      show('this is alert');
    }
  };
  return (
    <div className='form-group'>
      <input
        type='text'
        className='form-control'
        placeholder='Enter username'
        onKeyPress={onSubmit}
      />
    </div>
  );
};
