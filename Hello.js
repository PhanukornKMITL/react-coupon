import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import Coupon from './Coupon';
class Home extends Component {
  state = {
    coupon1: {
      secretWord: '$%^&*(IO',
      status: true
    },
    coupon2: {
      secretWord: '$%^&asddsasdadsadsa*(IO',
      status: true
    }
  }
  useCoupon = (name) => {
    const updatedCoupon = { ...this.state };
    updatedCoupon[name].status = false;
    this.setState(updatedCoupon);
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <Coupon
            data={this.state['coupon1']}
            setCoupon={this.useCoupon.bind(this, 'coupon1')} />
          <Coupon
            data={this.state['coupon2']}
            setCoupon={this.useCoupon.bind(this, 'coupon2')} />
        </div>
      </div>
    )
  }
}
export default Home;
