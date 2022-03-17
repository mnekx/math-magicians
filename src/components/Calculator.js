import { useState, useEffect } from 'react';
import Display from './Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');
  const [total, setTotal] = useState(null);
  let resultObj = {};
  const handleClick = (e) => {
    resultObj = calculate({ next, operation, total }, e.target.innerHTML);
    setNext(resultObj.next);
    setTotal(resultObj.total);
    setOperation(resultObj.operation);
  };

  useEffect(() => {
    let buttons = document.querySelectorAll('.g-item');

    buttons = Array.from(buttons);
    buttons.forEach((button) => {
      button.addEventListener('click', handleClick);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', handleClick);
      });
    };
  });

  return (
    <div style={{ width: '75vw', height: '75vh' }}>
      <div className="d-grid gray">
        <Display next={next} operation={operation} total={total} />
        <button
          type="button"
          className="g-item white"
        >
          AC
        </button>
        <button
          type="button"
          className="g-item white"
        >
          +/-
        </button>
        <button
          type="button"
          className="g-item white"
        >
          %
        </button>
        <button
          type="button"
          className="g-item orange"
        >
          &divide;
        </button>
        <button
          type="button"
          className="g-item white"
        >
          7
        </button>
        <button
          type="button"
          className="g-item white"
        >
          8
        </button>
        <button
          type="button"
          className="g-item white"
        >
          9
        </button>
        <button
          type="button"
          className="g-item orange"
        >
          x
        </button>
        <button
          type="button"
          className="g-item white"
        >
          4
        </button>
        <button
          type="button"
          className="g-item white"
        >
          5
        </button>
        <button
          type="button"
          className="g-item white"
        >
          6
        </button>
        <button
          type="button"
          className="g-item orange"
        >
          -
        </button>
        <button
          type="button"
          className="g-item white"
        >
          1
        </button>
        <button
          type="button"
          className="g-item white"
        >
          2
        </button>
        <button
          type="button"
          className="g-item white"
        >
          3
        </button>
        <button
          type="button"
          className="g-item orange"
        >
          +
        </button>
        <button
          type="button"
          className="g-item white"
          style={{ gridColumn: '1/3' }}
        >
          0
        </button>
        <button
          type="button"
          className="g-item white"
        >
          .
        </button>
        <button
          type="button"
          className="g-item orange"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
