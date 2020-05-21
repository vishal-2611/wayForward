import React, { Component } from "react";
import Buttons from "../Components/Buttons";
import UserInput from "../Components/UserInput";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      operation: null,
      result: 0,
    };
    this.handleNumberInput = this.handleNumberInput.bind(this);
  }

  handleNumberInput(event) {
    if (!this.state.operation) {
      const e =
        this.state.number1 === 0
          ? event.target.name
          : this.state.number1 + event.target.name;
      this.setState({ number1: e });
    } else {
      const e =
        this.state.number2 === 0
          ? event.target.name
          : this.state.number2 + event.target.name;
      this.setState({ number2: e });
    }
  }

  handleSymbolInput = (event) => {
    this.setState({ operation: event.target.name });
  };

  handleCalculate = () => {
    const { number1, number2, operation } = this.state;
    switch (operation) {
      case "+":
        this.setState({
          result: Number(number1) + Number(number2),
        });
        break;
      case "-":
        this.setState({
          result: Number(number1) - Number(number2),
        });
        break;
      case "/":
        this.setState({
          result: Number(number1) / Number(number2),
        });
        break;
      case "*":
        this.setState({
          result: Number(number1) * Number(number2),
        });
        break;

      default:
        break;
    }
  };
  render() {
    // const { number1, number2, result } = this.state;
    return (
      <div className="container">
        <UserInput number={this.state} />
        <Buttons
          handleNumberInput={this.handleNumberInput}
          handleSymbolInput={this.handleSymbolInput}
          handleCalculate={this.handleCalculate}
        />
      </div>
    );
  }
}

export default Home;
