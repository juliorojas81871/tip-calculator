import React from "react";

const Form = ({ state, updateValues }) => {
  const { billAmount, tipPercentage, noOfPerson } = state;
  const percentage = [5, 10, 15, 20, 25];
  return (
    <div>
      <div className="input-group">
        <label htmlFor="billAmount">Bill Amount</label>
        <input
          onChange={(e) => {
            updateValues({
              billAmount: e.target.value,
            });
          }}
          value={billAmount}
          type="number"
          id="billAmount"
        />
      </div>
      <p>Tip Percentage</p>
      <div className="percentage-list">
        {percentage.map((p) => (
          <div
            key={p}
            className={`percentage-list__box ${
              tipPercentage == p ? "active" : ""
            }`}
            onClick={(e) => updateValues({ tipPercentage: p })}
          >
            {p}%
          </div>
        ))}

        <input
          type="number"
          value={tipPercentage}
          placeholder="custom"
          max={100}
          min={0}
          className="custom-tip-input"
          onChange={(e) =>
            updateValues({
              tipPercentage:
                e.target.value < 0
                  ? 0
                  : e.target.value > 100
                  ? 100
                  : e.target.value,
            })
          }
        />
      </div>
      <div className="input-group">
        <label htmlFor="noOfPerson">Number of Person</label>
        <input
          value={noOfPerson}
          id="noOfPerson"
          type="number"
          min={0}
          onChange={(e) =>
            updateValues({
              noOfPerson: e.target.value < 0 ? 0 : e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default Form;
