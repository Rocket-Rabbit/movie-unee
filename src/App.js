import React from 'react';
import axios from 'axios';

// https://yts-proxy.now.sh/list_movies.json

class App extends React.Component {  
  state = {
    isLoading: true, // flag var.
    movies: [],
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // await가 실행완료 되고 난후 setState 실행.
    this.setState({ movies: movies, isLoading: false });
    //console.log(movies);
  }

  componentDidMount() {
    this.getMovies();
  }
  // render()이후 실행되는 componentDidMount()에 setState 실행.
  
  render() {
    const { isLoading } = this.state;
    // state 객체의 'isLoading value'를 상응하는 'isLoading'변수에 대입한다.
    // 구조분해할당.
    return(
        <div>{ isLoading ? 'Loading...' : 'We are ready' }</div>
    );
  }
}

export default App;