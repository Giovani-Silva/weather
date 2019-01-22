import React from 'react';

const Display = () => (
  <section className="display">
    <div className="display__left">
      <div>35º + </div>
      <div>20º - </div>
    </div>
    <div className="display__middle">28º</div>
    <div className="display__right">
      <div>
        <i className="wi wi-owm-957" />
        <span>34</span>
      </div>
      <div>
        <i className="wi wi-owm-762" />
        <span>70</span>
      </div>
      <div>
        <i className="wi wi-owm-906" />
        <span>455</span>
      </div>
    </div>
  </section>
);

export default Display;
