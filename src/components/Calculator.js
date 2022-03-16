import React from 'react';
import calculate from '../logic/calculate';
import Display from './Display';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { next: '', total: null, operation: '' };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(
      {
        next: state.next,
        total: state.total,
        operation: state.operation,
      },
      e.target.innerHTML,
    ));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div style={{ width: '75vw', height: '75vh' }}>
        <div className="d-grid gray">
          <Display next={next} operation={operation} total={total} />
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            AC
          </button>
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            +/-
          </button>
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            %
          </button>
          <button
            type="button"
            className="g-item orange"
            onClick={this.handleClick}
          >
            &divide;
          </button>
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            7
          </button>
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            8
          </button>
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            9
          </button>
          <button
            type="button"
            className="g-item orange"
            onClick={this.handleClick}
          >
            x
          </button>
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            4
          </button>
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            5
          </button>
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            6
          </button>
          <button
            type="button"
            className="g-item orange"
            onClick={this.handleClick}
          >
            -
          </button>
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            1
          </button>
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            2
          </button>
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            3
          </button>
          <button
            type="button"
            className="g-item orange"
            onClick={this.handleClick}
          >
            +
          </button>
          <button
            type="button"
            className="g-item white"
            style={{ gridColumn: '1/3' }}
            onClick={this.handleClick}
          >
            0
          </button>
          <button
            type="button"
            className="g-item white"
            onClick={this.handleClick}
          >
            .
          </button>
          <button
            type="button"
            className="g-item orange"
            onClick={this.handleClick}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
