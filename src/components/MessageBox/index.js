import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = ({ msg, close }) => (
  <div className={`message__box ${msg.type}`}>
    <p className="message__content">{msg.info}</p>
    <button type="button" onClick={close}>
      X
    </button>
  </div>
);

MessageBox.static = {
  msg: {
    style: 'default',
    info: 'Message box',
  },
};

MessageBox.proTypes = {
  msg: PropTypes.shape({
    style: PropTypes.string,
    info: PropTypes.string,
  }).isRequired,
};

export default MessageBox;
