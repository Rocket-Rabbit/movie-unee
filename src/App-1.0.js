import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture}) {
  return (
  <div>
    <h1>I like {name}</h1>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodlike = [
  {
    id: 1,
    name: '타요',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gC_DxaqbA_lVAq5tEnJqrQAAAA%26pid%3DApi&f=1',
    rating: 4.5
  },
  {
    id: 2,
    name: '아파요',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GqCfzS5q3Q-DtZ-x8xChVAHaHK%26pid%3DApi&f=1',
    rating: 4.8
  },
  {
    id: 3,
    name: '맛있어',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a6JGnjpJINxwp1XJ81EvLgAAAA%26pid%3DApi&f=1',
    rating: 4.1
  }
];

function App() {
  return ( 
    <div>
      {foodlike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
    // foodlike배열의 요소를 dish에 담는다
    // 여기서 요소는 한개의 객체.
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;