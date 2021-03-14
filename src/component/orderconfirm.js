import React from 'react';
class OrderConfirm extends React.Component{
    constructor(props){
     super(props);{
        this.state={
            name:"",
            email:"",
            address:"",
            quantity:"",
        }
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
     }
}
handleChange =(e)=>{
    console.log("...",e.target.name,e.target.value);
    this.setState({
        [e.target.name]:e.target.value,
       
    })
    
}
handleSubmit =(e)=>{
    e.preventDefault();
    var priceNew =this.state.quantity * this.props.itemPrice;
    console.log("..."+priceNew);
    // this.setState({
    //    price:this.state.quantity * this.props.itemPrice,
    // })
    this.props.itemArr.push(this.state);
    console.log(this.props.itemArr);
    console.log("here is the new price"+this.state.price);
    this.props.nextStep();
}
    render(){
       console.log("price is"+this.props.itemPrice);
        return(
           <div className="container">
               <div className=" p-5 orderText">
                <div className="card text-center">
                    <div className="card-header">
                       Order Confirmation
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.itemName} From {this.props.itemRes}</h5>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group text-center">
                             <label for="name">Name</label>
                             <input type="text" name="name"  onChange={(e)=>this.handleChange(e)} className="form-control form-control mr-2" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input type="email" name="email" id="email"  onChange={(e)=>this.handleChange(e)} class="form-control form-control-sm" placeholder="Enter email"/>
                                <small class="form-text text-muted">Your email will not be shared with anyone</small>
                            </div>
                            <div className="form-group">
                                <label for="message">Address</label>
                                <textarea id="message" name="address" rows="3"  onChange={(e)=>this.handleChange(e)} class="form-control"></textarea>
                            </div>
                            <div className="form-group">
                              <label for="Quantity">Qunatity</label>
                              <input type="number"  name="quantity"  onChange={(e)=>this.handleChange(e)} className="form-control form-control-sm"/>
                            </div>
                            {/* <div>Price :{ }</div> */}
                            <button className="btn btn-primary">Submit</button>
                        </form>
                        
                       
                    </div>
                    
                    </div>
            </div>
           </div>
            
           
        );
    }
}
export default OrderConfirm;