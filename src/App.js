import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import { Component } from 'react';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/counter'
import FunctionClick from './components/functionclick';

class App extends Component{
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        </header>
        <Counter />
        <FunctionClick />
          <Greet name= "Shubham " surname="Jariwala">
            <p>From Sarvajanik College of Engineering and Technology, Surat</p>
          </Greet>
          <Greet name="Farshogar " surname="Bhathena">
            <button>BITS</button>
          </Greet>
          <Greet name="Kiyan " surname="Morena"></Greet>
          <Welcome name="Shubham" surname="Jariwala"></Welcome>
          <Welcome />
           <Message /> 

          


          Learn React
       
     
    </div>
  );
  }
}

export default App;
