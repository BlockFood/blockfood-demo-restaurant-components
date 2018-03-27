import React from 'react';
import './OrderButtons.css';

export const OrderButtons = () => (
  <div className='orderButtons'>
    <button className='button validateButton'>
      Valider
    </button>
    <button className='button declineButton'>
      Refuser
    </button>
  </div>
);
