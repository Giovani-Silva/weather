import React from 'react';

const PopUp = ({ closePopup }) => (
  <div className="fade">
    <div className="popup__content">
      <div className="popup__header">Adicionar Cidade</div>
      <div className="popup__body">
        <p>Adicione o nome da cidade. </p>
        <small> Ex: São Paulo,br </small>

        <input type="text" placeholder="São Paulo" />
        <div className="actions">
          <button type="button" onClick={closePopup}>
            Cancel
          </button>
          <button type="button">OK</button>
        </div>
      </div>
    </div>
  </div>
);

export default PopUp;
