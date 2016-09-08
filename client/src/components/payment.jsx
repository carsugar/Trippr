import React, { Component } from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import NavBar from './navBar.jsx';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.chargeCustomer = this.chargeCustomer.bind(this);
    this.handleNumberInput = this.handleNumberInput.bind(this);
    this.handleMonthInput = this.handleMonthInput.bind(this);
    this.handleYearInput = this.handleYearInput.bind(this);
    this.handleCvcInput = this.handleCvcInput.bind(this);
  }

  componentWillMount() {
    this.setState({trip: this.props.params.trip});
  }

  chargeCustomer() {
    var data = {
      "number": this.state.number,
      "exp_month": this.state.exp_month,
      "exp_year": this.state.exp_year,
      "cvc": this.state.cvc
    };
    axios.post('/pay', data);
  }

  handleNumberInput(evt) {
    this.setState({number: evt.target.value});
  }

  handleMonthInput(evt) {
    this.setState({exp_month: evt.target.value});
  }

  handleYearInput(evt) {
    this.setState({exp_year: evt.target.value});
  }

  handleCvcInput(evt) {
    this.setState({cvc: evt.target.value});
  }

  render () {
    return (
      <div>
        <NavBar />
        <div className="payment-container">
          <h1>Save Your Spot</h1>
          <form id="payment-form">
            <span className="payment-errors"></span>

            <div className="form-row">
              <span>Card Number</span>
              <input onChange={(evt) => this.handleNumberInput(evt)} className="form-control" type="text" size={20} maxLength={20} />
            </div>

            <div className="form-row">
              <span>Expiration (MM/YY)</span>
              <div className="expiration">
                <input onChange={(evt) => this.handleMonthInput(evt)} className="form-control" type="text" size={2} maxLength={2} />
                <span>/</span>
                <input onChange={(evt) => this.handleYearInput(evt)} className="form-control flush-left" type="text" size={2} maxLength={2} />
              </div>
            </div>

            <div className="form-row">
              <span>CVC</span>
              <input onChange={(evt) => this.handleCvcInput(evt)} className="form-control" type="text" size={4} maxLength={4} />
            </div>
            <div className="submit-container">
              <button onClick={this.chargeCustomer} className="btn btn-primary" type="submit">Submit Payment</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Payment;
