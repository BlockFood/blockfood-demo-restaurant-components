import React from 'react';
import { formatCurrency } from '../utils';
import './OrderTotal.css';

export const OrderTotal = ({ totalPrice }) => (
  <div className='orderTotal'>
    <div>
      <strong>TOTAL</strong>
    </div>
    <div className='orderTotalAmount'>
      {formatCurrency(totalPrice)}
    </div>
  </div>
);
