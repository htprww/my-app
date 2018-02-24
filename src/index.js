import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {str: 'abc'};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.str}.</h2>
      </div>
    );
  }
}

const ele = <Clock />;

ReactDOM.render(
  ele,
  document.getElementById('root')
);

window.x = ele;
