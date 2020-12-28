import React from 'react';
import {useAlert} from "./Alert/AlertContext";

const Main = () => {
  const {show} = useAlert()

  return (
    <>
     <h1>Hello in context example</h1>
     <button onClick={() => show('This text from main')} className="btn-success">Show alert</button>
    </>
  );
};

export default Main;