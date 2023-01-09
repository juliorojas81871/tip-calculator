import React, { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

const App = () => {
  const [state, setState] = useState({
    billAmount: 0,
    tipPercentage: 0,
    noOfPerson: 1,
  });

  const updateValues = (newState) => {
    setState({
      ...state,
      ...newState,
    });
  };

  return (
    <div className="container ">
      <h1>Tip Calculator</h1>
      <div className="wrapper ">
        <Form state={state} updateValues={updateValues} />
        <Result state={state} />
      </div>
    </div>
  );
};

export default App;
