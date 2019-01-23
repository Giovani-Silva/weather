import React from 'react';

const StackBar = () => (
  <section>
    <div className="stack">
      <div className="stack__container">
        <div className="stack__group flex-2">
          <div className="stack__item">Now</div>
          <div className="stack__item">11 am</div>
        </div>
        <div className="stack__group flex-2">
          <div className="stack__item">1 pm</div>
          <div className="stack__item">3 pm</div>
        </div>
        <div className="stack__group flex-3">
          <div className="stack__item">5 pm</div>
          <div className="stack__item">7 pm</div>
          <div className="stack__item">9 pm</div>
        </div>
        <div className="stack__group flex-1">
          <div className="stack__item">11 pm</div>
        </div>
      </div>

      <div className="stack__container stack__container--bar">
        <div className="stack__group stack__group-morning flex-2">
          <div className="stack__item">21º</div>
          <div className="stack__item">25º</div>
        </div>
        <div className="stack__group stack__group-early  flex-2">
          <div className="stack__item">26º</div>
          <div className="stack__item">26º</div>
        </div>
        <div className="stack__group stack__group-afternoon flex-3">
          <div className="stack__item">27º</div>
          <div className="stack__item">28º</div>
          <div className="stack__item">25º</div>
        </div>
        <div className="stack__group stack__group-night flex-1">
          <div className="stack__item">25º</div>
        </div>
      </div>

      <div className="stack__container stack__container--icons">
        <div className="stack__group flex-2">
          <i className="wi owm-01d" />
        </div>
        <div className="stack__group flex-2">
          <i className="wi wi-owm-200" />
        </div>
        <div className="stack__group flex-3">
          <i className="wi owm-03d" />
        </div>
        <div className="stack__group flex-1">
          <i className="wi owm-09n" />
        </div>
      </div>
    </div>
  </section>
);

export default StackBar;
