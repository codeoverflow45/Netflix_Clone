import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navigation from './Navigation';


function App() {
  return (
    <div className="app">

			<Navigation />
			<Banner />
			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Animation" fetchUrl={requests.fetchAnimation} />
			<Row title="Mystery" fetchUrl={requests.fetchMystery} />
			<Row title="Sci-Fi" fetchUrl={requests.fetchSciFi} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="TV Shows" fetchUrl={requests.fetchTV} />
      
    </div>
  );
}

export default App;
