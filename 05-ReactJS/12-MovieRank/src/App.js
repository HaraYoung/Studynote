import React,{memo} from 'react';
import MovieRank from './page/MovieRank';

const App= memo(()=> {
  return (
    <>
      <h1> 13- MovieRank </h1>
      <hr />
      <br/>
      <MovieRank/>
    </>
  );
});

export default App;
