import React from 'react';
import { formatCurrency } from '../../utils';
import './OrderOrderedItem.css';

export const OrderOrderedItem = ({ label, count, totalItemPrice }) => (
  <li className='orderOrderedItem'>
    <div className='orderedItemLabel'>
      {label}
    </div>
    <div className='orderedItemCount'>
      {count > 1 ? `x${count}` : ''}
    </div>
    {
      totalItemPrice &&
      <div className='orderedItemTotalPrice'>
        {formatCurrency(totalItemPrice)}
      </div>
    }
  </li>
);
