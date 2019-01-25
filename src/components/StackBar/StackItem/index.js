import React from 'react';

const StackItem = ({
  item, col, weather, first, index,
}) => {
  const color = item.color.replace(/[0-9]+_/g, '');
  const printFirst = first ? ' first' : '';

  switch (col) {
    case 'left':
      return (
        <div className="stack__item">
          {index ? item.hour.toLocaleString('en-US', { hour: 'numeric', hour12: true }) : 'NOW'}
        </div>
      );
    case 'mid':
      const temp = item.item !== 'weather' ? item.item.main.temp : weather.main.temp;
      return <div className={`stack__item ${color}${printFirst}`}>{`${Math.trunc(temp)}º`}</div>;
    case 'right':
      const icon = item.item !== 'weather' ? item.item.weather[0].icon : weather.weather[0].icon;
      return <i className={`wi owm-${icon}${printFirst}`} />;

    default:
      return null;
  }
};

export default StackItem;
