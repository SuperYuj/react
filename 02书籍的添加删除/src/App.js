import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      list:['html','css','js']
    }
    this.onhandleChange=this.onhandleChange.bind(this)
    this.onhandleClick=this.onhandleClick.bind(this)
  }
  onhandleChange(e){
   this.setState({
     inputValue:e.target.value
   })
  }
  onhandleClick(){
    let list=this.state.list;
    list.push(this.state.inputValue)
    this.setState({
      list,
      inputValue:''
    })
  }
  render() {
    return (
      <div>
        <h3>hello.world</h3>
        <input type='text' value={this.state.inputValue}  onChange={this.onhandleChange}/>
        <button onClick={this.onhandleClick}>添加</button>
        <ul>
          {this.state.list.map((item,index)=>{
            return  <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
