import React, { Component } from 'react';
import Todoitem from './todoitem'
class Todolist extends Component {
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
  onhandleDelete(index){
      let list =[...this.state.list];
      list.splice(index,1)
      this.setState({list})
  }
  gettodoList(){
      return this.state.list.map((item,index)=>{
            return  <Todoitem key={index} index={index} item={item} delete={this.onhandleDelete.bind(this,index)} />
          })
  }
  render() {
    return (
      <div>
        <h3>hello.world</h3>
        <input type='text' value={this.state.inputValue}  onChange={this.onhandleChange}/>
        <button onClick={this.onhandleClick}>添加</button>
        <ul>
          {this.gettodoList()}
        </ul>
      </div>
    );
  }
}

export default Todolist;
