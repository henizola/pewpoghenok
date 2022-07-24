import React, { Component } from 'react';
import CurrencyStore from '../../components/CurrencyStore/CurrencyStore';
import { Container } from './Currency.style';

export default class Currency extends Component {
  render() {
    const currencyPoges = [
      { img: false, pog: 500, price: 5 },
      { img: false, pog: 1000, price: 10 },
      { img: false, pog: 1500, price: 15 },
      { img: false, pog: 2000, price: 20 },
      { img: true, pog: 5000, price: 50 },
      { img: true, pog: 10000, price: 100 },
    ];
    return (
      <Container>
        <h2>Store</h2>
        <div className="pages">
          {currencyPoges.map((pog) => (
            <CurrencyStore img={pog.img} pog={pog.pog} price={pog.price} />
          ))}
        </div>
      </Container>
    );
  }
}
