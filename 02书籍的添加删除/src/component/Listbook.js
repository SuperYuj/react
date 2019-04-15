import React from 'react';
import Addbook from './addbook'
class Listbook extends React.Component {
  constructor(props){
      super(props)
      this.state={
          books: [{
                  id: 1,
                  author: "曹雪芹",
                  name: "红楼梦",
                  price: 32.0,
                  count: 1
              },
              {
                  id: 2,
                  author: "施耐庵",
                  name: "水浒传",
                  price: 30.0,
                  count: 2
              },
              {
                  id: "3",
                  author: "罗贯中",
                  name: "三国演义",
                  price: 24.0,
                  count: 1
              },
              {
                  id: 4,
                  author: "吴承恩",
                  name: "西游记",
                  price: 20.0,
                  count: 1
              }
          ],
          totalprice:'11'
      }
  }
  delbook(index){
      const books=[...this.state.books]
      books.splice(index,1)
      this.setState({books})
  }
  onaddbook(book){
    let books=this.state.books;
    book.id = books.length+1;
    books.push(book)
    console.log(`length : ${books.length}`)
    this.setState({
      books
    })
  }
  changeCount(){
    let num=0;
    for(var i=0;i<this.state.books.length;i++){
      num=num+this.state.books[i].price*this.state.books[i].count
    }
    return num
  }
  totalprice(){

  }
  componentDidMount(){
    let num=0;
    for(var i=0;i<this.state.books.length;i++){
      num=num+this.state.books[i].price*this.state.books[i].count
    }
    this.setState({
      totalprice:num
    })
  }
  render(){
      return(
    <div>
    <div id="list-book">
      <table className="table table-bordered table-hover">
        <caption>书箱列表信息</caption>
        <thead>
          <tr>
            <th>序号</th>
            <th>名称</th>
            <th>作者</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
              {this.state.books.map((item,index)=>{
                  return (<tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.author}</td>
                      <td>{item.price}</td>
                      <td><input type='number' value={item.count} onChange={this.changeCount.bind(this,index)} /></td>
                      <td><button onClick={this.delbook.bind(this,index)}>删除</button></td>
                  </tr>)
              })}
          </tbody>
          <tr><td>总价为{this.changeCount()}元</td></tr>
      </table>
    </div>
    <Addbook  add={this.onaddbook.bind(this)} />
  </div>
      )
  }
}
export default Listbook