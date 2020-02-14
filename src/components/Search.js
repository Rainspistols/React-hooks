import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';
import { githubReducer } from '../context/github/githubReducer';

export const Search = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = e => {
    if (e.key !== 'Enter') {
      return;
    }

    github.clearUsers();

    if (value.trim()) {
      alert.hide();
      github.search(value.trim());
    } else {
      alert.show('Enter user details!');
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
