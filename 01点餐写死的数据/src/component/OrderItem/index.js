import React, { Component } from 'react'
import './style.css'
export default class OrderItem extends Component {
  render() {
    return (
       <div className='orderItem'>
                <div className='orderItem__containner'>
                    <div className='orderItem__picContainner'> 
                        <img alt='' className='orderItem__pic' src='https://fuss10.elemecdn.com/0/85/8c35871b76aee22028071ab5f946ejpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/' />
                    </div>
                    <div className='orderItem__content'>
                        <div className='orderItem__product'>黑椒脆皮鸡+时蔬+米饭</div>
                        <div className='orderItem__shop'>张姐烤肉饭脆皮饭</div>
                        <div className='orderItem__detail'>
                            <div className='orderItem__price'>￥18 </div>
                            <div className='orderItem__btn '>
            
                            <button className='orderItem__btn--gray' onClick={this.handleOpenOrCloseEditArea}>已评价</button>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}
