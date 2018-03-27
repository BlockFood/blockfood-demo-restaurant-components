import React from 'react';
import { Order } from '../Order';
import { OrderHeader } from '../OrderHeader';
import { OrderOrderedItemList } from '../OrderOrderedItemList';
import { OrderComment } from '../OrderComment';
import { OrderButtons } from '../OrderButtons';

export const PendingOrder = ({ deliveryTime, orderedItems, comment }) => (
  <Order className='pendingOrder'>
    <OrderHeader
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
    <OrderButtons />
  </Order>
);
