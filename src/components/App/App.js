import React, { Component } from 'react';
import { Header } from '../Header';
import { PendingOrder } from '../PendingOrder';
import { OngoingOrder } from '../OngoingOrder';
import { FinishedOrder } from '../FinishedOrder';
import { OrderTotal } from '../OrderTotal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <div style={{ display: 'flex', flexFlow: 'row nowrap', padding: '25px 250px' }}>
          <div style={{
            flex: '1 0 33%',
            display: 'flex',
            flexFlow: 'column nowrap',
            borderRight: '1px solid #ccc',
            alignItems: 'center',
          }}>
            <h3 style={{ color: '#50dcb5', fontWeight: 'bold', fontSize: 18, marginTop: 0 }}>
              Commandes en attente
            </h3>
            <PendingOrder
              deliveryTime={new Date()}
              orderedItems={[
                {
                  label: 'Rancheros Platters',
                  count: 2,
                  totalItemPrice: 18.8,
                },
                {
                  label: 'Petite salade',
                  count: 3,
                  totalItemPrice: 7.4,
                },
                {
                  label: 'Pietra 33cl',
                  count: 1,
                  totalItemPrice: 3.5,
                },
              ]}
              comment='Les pâtes sans gluten sur le platter, je vous prie. Merci !'
            />
            <PendingOrder
              deliveryTime={new Date()}
              orderedItems={[
                {
                  label: 'New Mexico Platters',
                  count: 1,
                  totalItemPrice: 9.8,
                },
                {
                  label: 'Rancheros Platters',
                  count: 1,
                  totalItemPrice: 9.4,
                },
                {
                  label: 'Cheescake',
                  count: 2,
                  totalItemPrice: 4.9,
                },
                {
                  label: 'Tiramisu',
                  count: 2,
                  totalItemPrice: 4.5,
                },
              ]}
            />
            <PendingOrder
              deliveryTime={new Date()}
              orderedItems={[
                {
                  label: 'New Mexico Platters',
                  count: 1,
                  totalItemPrice: 9.8,
                },
                {
                  label: 'Rancheros Platters',
                  count: 1,
                  totalItemPrice: 9.4,
                },
                {
                  label: 'Frites Cheddar Bacon',
                  count: 1,
                  totalItemPrice: 4,
                },
                {
                  label: 'Frites',
                  count: 1,
                  totalItemPrice: 2.5,
                },
                {
                  label: 'Petite salade',
                  count: 1,
                  totalItemPrice: 2.8,
                },
                {
                  label: 'Cheescake',
                  count: 1,
                  totalItemPrice: 4.5,
                },
              ]}
            />
          </div>
          <div style={{
            flex: '1 0 33%',
            display: 'flex',
            flexFlow: 'column nowrap',
            borderRight: '1px solid #ccc',
            alignItems: 'center',
          }}>
            <h3 style={{ color: '#50dcb5', fontWeight: 'bold', fontSize: 18, marginTop: 0 }}>
              En cours
            </h3>
            <OngoingOrder
              orderId={2}
              deliveryTime={new Date()}
              orderedItems={[
                {
                  label: 'Enchilada Platters',
                  count: 2,
                },
              ]}
              comment='Sans oignon si possible. Merci bien :)'
            />
            <OngoingOrder
              orderId={3}
              deliveryTime={new Date()}
              orderedItems={[
                {
                  label: 'New Mexico Platters',
                  count: 2,
                },
                {
                  label: 'Rancheros Platters',
                  count: 2,
                },
                {
                  label: 'Cheescake',
                  count: 1,
                },
                {
                  label: 'Tiramisu',
                  count: 1,
                },
              ]}
            />
          </div>
          <div style={{
            flex: '1 0 33%',
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
          }}>
            <h3 style={{ color: '#50dcb5', fontWeight: 'bold', fontSize: 18, marginTop: 0 }}>
              Terminées
            </h3>
            <FinishedOrder
              orderId={1}
              deliveryTime={new Date()}
              orderedItems={[
                {
                  label: 'Rancheros Platters',
                  count: 2,
                  totalItemPrice: 18.8,
                },
                {
                  label: 'Petite salade',
                  count: 3,
                  totalItemPrice: 7.4,
                },
                {
                  label: 'Pietra 33cl',
                  count: 1,
                  totalItemPrice: 3.5,
                },
              ]}
            />
            <OrderTotal
              totalPrice={16.8}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
