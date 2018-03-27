import React from 'react';
import './Header.css';

export const Header = () => (
  <header className='header'>
    <div className='branding'>
      <strong>Block</strong>Food <strong>Cuisto</strong>
    </div>

    <div>
      <button>Connexion</button>
      <button>fr</button>
    </div>
  </header>
);
