import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { next = '', operation = '', total = null } = this.props;
    return (
      <div
        className="g-item gray"
        style={{
          gridColumn: '1/5',
          justifyContent: 'flex-end',
          fontSize: '4rem',
        }}
      >
        {next || operation || total || '0'}
      </div>
    );
  }
}

export default Display;
