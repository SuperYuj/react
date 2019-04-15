import React from 'react';
class Todoitem extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    onclickDelete(index){
    this.props.delete(index)
    }
    render(){
            return <li key={this.props.index} onClick={this.onclickDelete.bind(this,this.props.index)} >{this.props.item} </li>
          }
    }
export default Todoitem