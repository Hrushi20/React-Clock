import React, { Component } from 'react';
import './App.css';
import  Button from './components/button';
import Display from './components/display';

class App extends Component {
   state = {
     time: new Date().toLocaleTimeString(),
     showDate : false
   }
   componentDidMount = ()=>{
     setInterval(()=> this.setState({time: new Date().toLocaleTimeString()}),1000);
   }
   showDateHandler = ()=>{
      this.setState({
        showDate: !this.state.showDate
      })
   }
   
   
   
    render(){
     
    const date = new Date().toLocaleDateString();
      
    return (
        <div className = 'content'>
          <header>
          <i className="fa fa-clock-o"></i>
          <h3>React Clock</h3>
          </header>
          <Button click = {this.showDateHandler} showDate = {this.state.showDate}/>
          <Display time = {this.state.time} date = {date} showDate = {this.state.showDate}/>  
        </div>
      )
   }
  }

export default App;
