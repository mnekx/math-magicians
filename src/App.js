import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Quote from './components/Quote';
import Home from './components/Home';

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
      <div>
        <header>
          {stateVar}
          <NavBar />
        </header>
        <Routes>
          <Route exact path="/calculator" element={<Calculator />} />
          <Route exact path="/quote" element={<Quote />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Outlet />
      </div>
    );
  }
}

export default App;
