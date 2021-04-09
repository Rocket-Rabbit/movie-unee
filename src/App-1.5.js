import React, { Fragment } from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('hello');
  }

  componentDidMount() {
    console.log('DidMount');
  }

  componentDidUpdate() {
    console.log('Update');
  }

  componentWillUnmount() {
    console.log('BYE');
  }

  state = {
    count: 0,
  }
  // state는 필수명

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  }

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  }
  
  render() {
    console.log('render');
    return(
      <React.Fragment>
        <h1>안녕하세요 {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </React.Fragment>
    );
  }
}

export default App;