import React from 'react';
import './Order.css';

export const Order = ({ children, className }) => (
  <div className={['order', className].join(' ').trim()}>
    {children}
  </div>
);
