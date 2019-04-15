import React, { Component } from 'react'
import OrderItem from '../OrderItem'
export default class OrderList extends Component {
  render() {
    return (
      <div>
          <div>
              <OrderItem />
              <OrderItem />
              <OrderItem />
          </div>
      </div>
    )
  }
}
