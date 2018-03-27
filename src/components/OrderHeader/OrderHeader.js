import React from 'react';
import './OrderHeader.css';

/* eslint-disable jsx-a11y/accessible-emoji */
export const OrderHeader = ({ orderId, deliveryTime }) => (
  <div className='orderHeader'>
    {
      orderId &&
      <div className='orderHeaderLabel'>
        Commande #{orderId}
      </div>
    }
    <div className='orderHeaderTime'>
      🕑 {deliveryTime.toLocaleTimeString().slice(0, 5)}
    </div>
  </div>
);
/* eslint-enable jsx-a11y/accessible-emoji */
