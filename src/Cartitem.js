
import React from 'react';

class Cartitem  extends React.Component{
    constructor(){
        super();
        this.state = {
           price:999,
           title:'Mobile Phone',
           qty:1
        }
    }
    
    increaseQuantity = () =>{
      this.setState({

        qty:this.state.qty + 1
      });
    }

    decreaseQuantity = () =>{
        this.setState({
  
          qty:this.state.qty - 1
        });
      }
  
    render (){
        const {title,price,qty} =this.state;
        return(
         <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.images} src="" alt=""/>
            </div>
            <div className='right-block'>
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>RS:{price}</div>
                <div style={{color:'#777'}}>QTY:{qty}</div>
                <div className='cart-item-actions'>
                <img  alt="increase" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1614594803~hmac=27e63ad413131423aa99a9521dc2b714"
                onClick={this.increaseQuantity}
                />
                <img  alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1614594653~hmac=db582325df1b2a63fac0ac48e23e5ad2"
                  onClick={this.decreaseQuantity}
                />
                <img  alt="delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/565/565491.svg?token=exp=1614594841~hmac=b3ced74b4ed5d87a50da1b03bfb0ce52"/>
              </div>
            </div>
         </div>
        );    
    }    
}

const styles={
    images:{
     height: 110,
     width: 110,
     borderRedius:4,
     background:'#ccc'
    }
}


export default Cartitem;