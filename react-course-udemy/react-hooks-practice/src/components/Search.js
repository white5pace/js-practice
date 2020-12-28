import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/AlertContext";
import {GithubContext} from "../context/github/GithubContext";

const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    github.clearUsers()

    if(value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('Enter user info')
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className='form-control'
        placeholder="Enter user nickname"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};

export default Search;