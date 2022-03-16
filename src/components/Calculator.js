import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateVar: '',
    };
  }

  render() {
    const { stateVar } = this.state;
    return (
      <div style={{ width: '75vw', height: '75vh' }}>
        <p>{stateVar}</p>
        <div className="d-grid gray">
          <div
            className="g-item gray"
            style={{
              gridColumn: '1/5',
              justifyContent: 'flex-end',
              fontSize: '4rem',
            }}
          >
            0
          </div>
          <div className="g-item white">AC</div>
          <div className="g-item white">+/-</div>
          <div className="g-item white">%</div>
          <div className="g-item orange">&divide;</div>
          <div className="g-item white">7</div>
          <div className="g-item white">8</div>
          <div className="g-item white">9</div>
          <div className="g-item orange">x</div>
          <div className="g-item white">4</div>
          <div className="g-item white">5</div>
          <div className="g-item white">6</div>
          <div className="g-item orange">-</div>
          <div className="g-item white">1</div>
          <div className="g-item white">2</div>
          <div className="g-item white">3</div>
          <div className="g-item orange">+</div>
          <div className="g-item white" style={{ gridColumn: '1/3' }}>
            0
          </div>
          <div className="g-item white">.</div>
          <div className="g-item orange">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
