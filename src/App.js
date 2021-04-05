import React from 'react';

function Food({name}) {
  return <h1>I like {name}</h1>;
}

const foodlike = [
  {
    name: '타요',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gC_DxaqbA_lVAq5tEnJqrQAAAA%26pid%3DApi&f=1'
  },
  {
    name: '아파요',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GqCfzS5q3Q-DtZ-x8xChVAHaHK%26pid%3DApi&f=1'
  },
  {
    name: '맛있어',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a6JGnjpJINxwp1XJ81EvLgAAAA%26pid%3DApi&f=1'
  }
]

function App() {
  return ( 
    <div>
      <Food fav="kimchi1" />
      <Food fav="kimchi2" />
      <Food fav="kimchi3" />
    </div>
  );
}

export default App;