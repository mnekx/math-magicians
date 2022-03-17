import React from 'react';
import './App.css';
import Calculator from './components/Calculator-Hooks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateVar: '',
    };
  }

  render() {
    const { stateVar } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {stateVar}
          <Calculator />
        </header>
      </div>
    );
  }
}

export default App;
