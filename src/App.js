import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  }

  add = (e) => {
    console.log('add');
  }

  minus = () => {
    console.log('minus');
  }
  
  render() {
    return(
      <>
        <h1>안녕하세요 {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </>
    );
  }
}

export default App;