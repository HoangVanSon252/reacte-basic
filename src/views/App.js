import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/mycomponent';
function App (){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with RactJS(Son)
        </p>
      <MyComponent />
      </header>
    </div>
  );
}

export default App;
