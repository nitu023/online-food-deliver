import React from 'react';
var total=0;
class Sucess extends React.Component{
    constructor(props){
     super(props);
     this.state={
         price:0,
     }
     
}

    render(){
        total = this.props.itemArr[0].quantity * this.props.itemPrice;
        console.log(total);
       console.log(this.props.itemArr)
        return(
           <div className="container sucessPage">
              <div class="jumbotron">
                <h1 class="display-4">Congratulation You have Successfully Placed Order</h1>
                <p class="lead">Order Details</p>
                <hr class="my-4" />
                 <p>Name : {this.props.itemArr[0].name}</p>
                 <p> Email :{this.props.itemArr[0].email}</p>
                 <p>Address:{this.props.itemArr[0].address}</p>
                 <p> Qutanity :{this.props.itemArr[0].quantity}</p>
                  <p> Price :{total} </p> 
                 <a class="btn btn-primary btn-sm"  href="#" role="button">Home</a>
                </div>
            </div>
                            
           
        );
    }

}
export default Sucess;