import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

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
    /**
     * 구조분해할당
     * state 객체의 'isLoading value'를 상응하는 'isLoading'변수에 대입한다. 
     * movies에는 배열이 대입되고 아래에 map()함수로 처리된다.
     */
    return(
        <section className="container">
          { isLoading 
            ? (
              <div className="loader">
                <span className="loader_text">Loading</span>
              </div>
            ) : (
          // console.log(movie);
          // movies에는 api로 불러온 movies배열
          // import된 Movie로 값을 넘겨주고 컴포넌트 반환 
              <div className="movies">
              { movies.map(movie => (
                <Movie
                  key={movie.id}
                  //id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              )) }
            </div>
            )}
        </section>
    );
  }
}

export default App;