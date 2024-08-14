import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import BodyComp from './component/BodyComp';

function App() {

  let x = 10;

  console.log("Hello")
  return (
    <div className="App">
      

      <Navbar></Navbar>
     

      <BodyComp></BodyComp>
    </div>

    
  );
}

export default App;
