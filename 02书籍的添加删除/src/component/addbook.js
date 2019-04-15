import React from 'react';
class Addbook extends React.Component{
    constructor(props){
        super(props)
        this.state={
            book:{
                id: 1,
                author: "曹雪芹",
                name: "红楼梦",
                price: 32.0,
                count: 1
            }
        }
         this.onhandleChange1 = this.onhandleChange1.bind(this)
         this.onhandleChange2 = this.onhandleChange2.bind(this)
         this.onhandleChange3 = this.onhandleChange3.bind(this)
         this.onhandleChange4 = this.onhandleChange4.bind(this)
    }
    
    onhandleChange1(e){
         let val=e.target.value;
         let data = Object.assign({}, this.state.book, { author: val })
         this.setState({book: data})
    }
    onhandleChange2(e){
         let val=e.target.value;
         let data = Object.assign({}, this.state.book, { name: val })
         this.setState({book: data})
    }
    onhandleChange3(e){
         let val=e.target.value;
         let data = Object.assign({}, this.state.book, { price: val })
         this.setState({book: data})
    }
    onhandleChange4(e){
         let val=e.target.value;
         let data = Object.assign({}, this.state.book, { count: val })
         this.setState({book: data})
    }
    addbook(book){
     this.props.add(book)
    }
    render(){
        return(
      <div>
      <h3>添加书籍</h3>
      <div className="form-group">
        <label >书名</label>
        <input type="text" className="form-control" onChange={this.onhandleChange1}/>
      </div>
      <div className="form-group">
        <label >作者</label>
        <input type="text" className="form-control" onChange={this.onhandleChange2} />
      </div>
      <div className="form-group">
        <label >价格</label>
        <input type="number" className="form-control" onChange={this.onhandleChange3}/>
      </div>
      <div className="form-group">
        <label >数量</label>
        <input type="number" className="form-control" onChange={this.onhandleChange4}/>
      </div>
      <button className="btn btn-primary btn-block" onClick={this.addbook.bind(this,this.state.book)}>添加</button>
    </div>
        )
    }
}
export default Addbook