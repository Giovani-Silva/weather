import React from 'react';

import StackItem from './StackItem';
import { montaArrayBar } from '../../services/utils';

const loadList = (days, col, weather) => {
  if (days) {
    const { list } = days;
    const lista = list.slice(0, 6);
    const now = new Date();
    const stack = montaArrayBar(now, lista);

    let check = null;
    return stack.map((obj, i) => {
      const first = check !== obj.color && 'first';
      check = obj.color;
      return (
        <StackItem index={i} first={first} key={obj.hour} item={obj} col={col} weather={weather} />
      );
    });
  }
};
const StackBar = ({ days, weather }) => (
  <section>
   <h2 className="hide">Temperatura próximas 12 horas</h2>
    <div className="stack">
      <div className="stack__container">
        <div className="stack__group flex-1">{loadList(days, 'left', weather)}</div>
      </div>
      <div className="stack__container">
        <div className="stack__group flex-1">{loadList(days, 'mid', weather)}</div>
      </div>

      <div className="stack__container stack__container--icons">
        <div className="stack__group flex-1">{loadList(days, 'right', weather)}</div>
      </div>
    </div>
  </section>
);

export default StackBar;
