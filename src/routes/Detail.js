import React from 'react';

class Detail extends React.Component {
   constructor(props) {
    super(props);
    console.log(this.props);
  } 
  /*
  props는 Link 에서 보내는 props.
  */
  
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
      // location 객체 전체 ...
      // history 객체 전체 ...
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
    return (
      <div>{location.state.title}</div>
    );} else {
      return null;
    }
  }
}

export default Detail;