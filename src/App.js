import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent 
        buttonContent="HELLO"
        />
        <ImageComponent 
        image="https://i.kym-cdn.com/photos/images/facebook/001/577/437/294.jpg"
        />
      </header>
    </div>
  );
}

export default App;
