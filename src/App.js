import React from 'react';
import axios from 'axios';
import Movie from './Movie';

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
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // await가 실행완료 되고 난후 setState 실행.
    this.setState({ movies, isLoading: false });
    //console.log(movies);
    // movies : name과 value가 동일한 이름일 때 단축속성 사용 가능, (= movies: movies)
  }

  componentDidMount() {
    this.getMovies();
  }
  // render()이후 실행되는 componentDidMount()에 setState 실행.
  
  render() {
    const { isLoading, movies } = this.state;
    // state 객체의 'isLoading value'를 상응하는 'isLoading'변수에 대입한다.
    // 구조분해할당.
    return(
        <div>
          { isLoading 
            ? 'Loading...' 
            : movies.map((movie) => {
              console.log(movie);
              return <Movie />;
            })}
        </div>
    );
  }
}

export default App;