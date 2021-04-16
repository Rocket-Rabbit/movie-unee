import React, { Fragment } from 'react';
import "./Detail.css";

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
    console.log(location);
    if (location.state) {
      // 새로고침으로 인해 state에 값이 없을때...
    return (
      <div className="movie-alone-wrap">
        <div className="movie-poster"><img src={location.state.posterLg} /></div>
        <h2 className="movie-title">{location.state.title}</h2>
        <div className="movie-genres">
          {location.state.genres.map((genre, index) => {
            return (
              <span key={index} className="movie_genre">{genre}</span>
              // map을 통해 반복되는 콤포넌트는 반드시 고유의 key 가 있어야 한다.
            );
          })}
        </div>
        <p className="movie-summary">{location.state.summary.slice(0, 300)}...</p>
      </div>
    );} else {
      return null;
    }
  }
}

export default Detail;