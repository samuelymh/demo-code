import logo from './logo.svg';
import './App.css';

// Import components
import Card from './components/Card/Card';
import SomeComponent from './components/SomeOtherComponent/SomeComponent';

function App() {
  return (
    <div className="App">
      <Card /> 
      <SomeComponent />
    </div>
  );
}

export default App;
