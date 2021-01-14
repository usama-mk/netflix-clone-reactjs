import './App.css';
import Row from './Components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Netflix clone</h1>
      <Row title="Netflix Trending" fetchUrl={requests.fetchTrending} />
      <Row title= "Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}
// netflix-clone-reactjs-da6a6.web.app

export default App;
