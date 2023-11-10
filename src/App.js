import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
function App() {
  return (
    <>
      <Navbar title="textUtils"/>
      
      <div className='container'>
      <h2 >Enter your text below</h2>
        <Textbox/>       
      </div>
      
  
      </>
  );
}

export default App;
