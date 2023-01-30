import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent 
        buttonContent="I'm a button created in react"
        />
        <ImageComponent 
        image="https://i.kym-cdn.com/photos/images/facebook/001/577/437/294.jpg"
        alt="Anakin meme, It's working."
        />
      </header>
    </div>
  );
}

export default App;
