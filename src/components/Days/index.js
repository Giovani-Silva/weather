import React, { Component } from 'react';
import { groupByDate, weekday } from '../../services/utils';

class Days extends Component {
  renderToday = () => {
    const { weather } = this.props;
     return (
            <li className="list__items" key={weather.dt}>
              <div className="list__items_left">
                <i className={`wi owm-${weather.weather[0].icon}`} />
                <div>
                  <strong>{weekday(weather.dt_txt)}</strong>
                  <small></small>
                </div>
              </div>
              <div className="list__items_right">
                <span>
                  {weather.main.temp_min}º
                </span>
                <span className="list__items_bar" />
                <span>
                  {weather.main.temp_max}º
                </span>
              </div>
            </li>
          );
  };

  renderItem = () => {
    const { days } = this.props;
    if (days) {
      const list = groupByDate(days.list);
      const keys = Object.keys(list);
      keys.shift();

      return keys.map(key => list[key].map((item, index) => {
        if (!index) {
          return (
            <li className="list__items" key={item.dt}>
              <div className="list__items_left">
                <i className={`wi owm-${item.weather[0].icon}`} />
                <div>
                  <strong>{weekday(item.dt_txt)}</strong>
                  <small>{Math.trunc(item.main.temp)}</small>
                </div>
              </div>
              <div className="list__items_right">
                <span>
                  {Math.trunc(item.main.temp_min)}
º
                </span>
                <span className="list__items_bar" />
                <span>
                  {Math.trunc(item.main.temp_max)}
º
                </span>
              </div>
            </li>
          );
        }
      }));
    }
  };

  render() {
    return (
      <section className="days">
        <ul className="list__days">
          {this.renderToday()}
          {this.renderItem()}
        </ul>
      </section>
    );
  }
}

export default Days;
