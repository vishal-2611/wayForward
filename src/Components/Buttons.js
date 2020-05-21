import React, { Component } from "react";
import { numbers, symbols } from "./constants";
export class Buttons extends Component {
  render() {
    const {
      handleNumberInput,
      handleSymbolInput,
      handleCalculate,
    } = this.props;
    return (
      <div className="button-container">
        <div className="numbers">
          {numbers.map((number, index) => (
            <button
              name={number}
              key={number}
              onClick={handleNumberInput}
              className="button"
            >
              {number}
            </button>
          ))}
          <button name="=" onClick={handleCalculate} className="button equal">
            =
          </button>
        </div>
        <div className="symbols">
          {symbols.map((symbol, index) => (
            <button
              name={symbol}
              key={symbol}
              onClick={handleSymbolInput}
              className="button"
            >
              {symbol}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Buttons;
