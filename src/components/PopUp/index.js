import React, { Component } from 'react';

class PopUp extends Component {
  state = {
    inputCity: '',
  };

  send = (e) => {
    e.preventDefault();
    this.props.setCity(this.state.inputCity);
  };

  render() {
    const { closePopup } = this.props;
    return (
      <div className="fade">
        <div className="popup__content">
          <div className="popup__header">Adicionar Cidade</div>
          <div className="popup__body">
            <p>Adicione o nome da cidade. </p>
            <small> Ex: São Paulo,br </small>

            <form onSubmit={this.send}>
              <input
                type="text"
                placeholder="São Paulo"
                onChange={e => this.setState({ inputCity: e.target.value })}
              />
              <div className="actions">
                <button type="button" onClick={closePopup}>
                  Cancel
                </button>
                <button type="submit">OK</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUp;
