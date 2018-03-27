import React from 'react';
import { OrderOrderedItem } from './OrderOrderedItem';
import './OrderOrderedItemList.css';

export const OrderOrderedItemList = ({ orderedItems }) => (
  <ul className='orderOrderedItems'>
    {
      orderedItems.map(({ label, count, totalItemPrice }) => (
        <OrderOrderedItem
          key={label}
          label={label}
          count={count}
          totalItemPrice={totalItemPrice}
        />
      ))
    }
  </ul>
);
