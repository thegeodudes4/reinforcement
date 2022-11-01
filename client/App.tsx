import MainContainer from './containers/MainContainer';
import './stylesheets/index.css';

const App = () => {
  console.log('App rendering...')
  return (
    <div className="app">
      <MainContainer />
    </div>
    
  );
}

export default App;
