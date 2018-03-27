import React from 'react';
import { Order } from '../Order';
import { OrderHeader } from '../OrderHeader';
import { OrderOrderedItemList } from '../OrderOrderedItemList';
import { OrderTotal } from '../OrderTotal';
import './FinishedOrder.css';

const computeTotalPrice = orderedItems => orderedItems.reduce((total, item) => total += item.totalItemPrice, 0);

export const FinishedOrder = ({ orderId, deliveryTime, orderedItems }) => (
  <Order className='finishedOrder'>
    <OrderHeader
      orderId={orderId}
      deliveryTime={deliveryTime}
    />
    <OrderOrderedItemList
      orderedItems={orderedItems}
    />
    <OrderTotal
      totalPrice={computeTotalPrice(orderedItems)}
    />
  </Order>
);
