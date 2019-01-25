import React, { Component } from 'react';
import { groupByDate, weekday } from '../../services/utils';

class Days extends Component {
  renderToday = () => {
    const { weather } = this.props;
    const widthBar = 105 - Math.trunc((weather.main.temp_min / weather.main.temp_max) * 100);
    return (
      <li className="list__items" key={weather.dt}>
        <div className="list__items_left">
          <i className={`wi owm-${weather.weather[0].icon}`} />
          <div>
            <strong>{weekday(new Date(weather.dt * 1000))}</strong>
            <small />
          </div>
        </div>
        <div className="list__items_right">
          <span>
            {weather.main.temp_min}
º
          </span>
          <span className="list__items_bar" style={{ width: `${widthBar}%` }} />
          <span>
            {weather.main.temp_max}
º
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

      return keys.map(key => list[key].list.map((item, index) => {
        if (index) return null;
        return (
          <li className="list__items" key={item.dt}>
            <div className="list__items_left">
              <i className={`wi owm-${item.weather[0].icon}`} />
              <div>
                <strong>{weekday(item.dt_txt)}</strong>
                <small>{`${Math.trunc(item.main.temp)}º`}</small>
              </div>
            </div>
            <div className="list__items_right">
              <span>{`${Math.trunc(list[key].minDay)}º`}</span>
              <span className="list__items_bar" style={{ width: `${list[key].widthBar}%` }} />
              <span>{`${Math.trunc(list[key].maxDay)}º`}</span>
            </div>
          </li>
        );
      }));
    }
    return null;
  };

  render() {
    return (
      <section className="days">
       <h2 className="hide">Informações de temperatura próximos 5 dias</h2>
        <ul className="list__days">
          {this.renderToday()}
          {this.renderItem()}
        </ul>
      </section>
    );
  }
}

export default Days;
