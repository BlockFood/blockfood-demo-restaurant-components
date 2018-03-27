import React from 'react';
import { Order } from '../Order';
import { OrderHeader } from '../OrderHeader';
import { OrderOrderedItemList } from '../OrderOrderedItemList';
import { OrderComment } from '../OrderComment';
import './OngoingOrder.css';

export const OngoingOrder = ({ orderId, deliveryTime, orderedItems, comment }) => (
  <Order className='ongoingOrder'>
    <OrderHeader
      orderId={orderId}
      deliveryTime={deliveryTime}
    />
    <OrderOrderedItemList
      orderedItems={orderedItems}
    />
    {
      comment &&
      <OrderComment
        comment={comment}
      />
    }
  </Order>
);
