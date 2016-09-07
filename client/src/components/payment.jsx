import React, { Component } from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import NavBar from './navBar.jsx';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({trip: this.props.params.trip});
  }

  render () {
    return (
      <div>
        <NavBar />
        <div className="payment-container">
          <h1>Save Your Spot</h1>
          <form action="/your-charge-code" method="POST" id="payment-form">
            <span className="payment-errors"></span>

            <div className="form-row">
              <span>Card Number</span>
              <input className="form-control" type="text" size={20} maxLength={20} data-stripe="number" />
            </div>

            <div className="form-row">
              <span>Expiration (MM/YY)</span>
              <div className="expiration">
                <input className="form-control" type="text" size={2} maxLength={2} data-stripe="exp_month" />
                <span>/</span>
                <input className="form-control flush-left" type="text" size={2} maxLength={2} data-stripe="exp_year" />
              </div>
            </div>

            <div className="form-row">
              <span>CVC</span>
              <input className="form-control" type="text" size={4} maxLength={4} data-stripe="cvc" />
            </div>
            <div className="submit-container">
              <button className="btn btn-primary" type="submit" value="Submit Payment" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Payment;
