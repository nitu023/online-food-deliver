import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar'
import SerachArea from './component/seracharea'
import OrderItem from './component/ordersection'
import OrderConfirm from './component/orderconfirm'
import Success from './component/sucess'
class App extends React.Component {
   constructor(props){
     super(props);
       this.state={
        step:1,
        customerOder:[],
        orderHistory:[],
        orderItem:"",
        orderRestName:"",
        orderprice:0,
        ResturantDetails: [
          {
            name: 'Chicken do Pyaza',
            img: "https://lorempixel.com/output/food-q-c-150-150-6.jpg",
            pricing: 300,
            minimumOrder: 50,
            deliveryTime: 30,
            rating: 3.6,
            totalVotes: 564,
            totalReview: 153,
            resName:'Imperio'
  
          },

          {
            name: 'Chicken Tandoori',
            img: "https://lorempixel.com/output/food-q-c-150-150-7.jpg",
            pricing: 300,
            minimumOrder: 50,
            deliveryTime: 30,
            rating: 2.6,
            totalVotes: 654,
            totalReview: 123,
            resName:'Delhiwale'
  
          },
          {
            name: 'Chicken do Pyaza',
            img: "https://lorempixel.com/output/food-q-c-150-150-3.jpg",
            pricing: 300,
            minimumOrder: 50,
            deliveryTime: 30,
            rating: 4.9,
            totalVotes: 487,
            totalReview: 123,
            resName:'PunJabi Tadka'
  
          },
          {
            name: 'Chicken Masala',
            img: "https://lorempixel.com/output/food-q-c-150-150-4.jpg",
            pricing: 300,
            minimumOrder: 50,
            deliveryTime: 30,
            rating: 3.9,
            totalVotes: 444,
            totalReview: 83,
            resName:'Sgar Ratna'
  
          },
          {
            name: 'Chicken Curry',
            img: "https://lorempixel.com/output/food-q-c-150-150-9.jpg",
            pricing: 300,
            minimumOrder: 50,
            deliveryTime: 30,
            rating: 2.2,
            totalVotes: 987,
            totalReview: 73,
            resName:'MTR'
  
          },
          {
            name: 'Chicken Garllic',
            img: "https://lorempixel.com/output/food-q-c-150-150-2.jpg",
            pricing: 300,
            minimumOrder: 50,
            deliveryTime: 30,
            rating: 3.2,
            totalVotes: 354,
            totalReview: 93,
            resName:'KFC'
  
          },
          {
            name: 'Chicken Butter Masala',
            img: "https://lorempixel.com/output/food-q-c-150-150-4.jpg",
            pricing: 300,
            minimumOrder: 50,
            deliveryTime: 30,
            rating: 1.2,
            totalVotes: 409,
            totalReview: 63,
            resName:'PunJabi Host'
  
          },
          {
            name: 'Chicken Grilled',
            img: "https://lorempixel.com/output/food-q-c-150-150-2.jpg",
            pricing: 300,
            minimumOrder: 50,
            deliveryTime: 30,
            rating: 4.2,
            totalVotes: 324,
            totalReview: 33,
            resName:'PunJabi Tadka'
  
          },
          {
            name: 'Chicken Rice',
            img: "https://lorempixel.com/output/food-q-c-150-150-8.jpg",
            pricing: 300,
            minimumOrder: 50,
            deliveryTime: 30,
            rating: 3.8,
            totalVotes: 554,
            totalReview: 13,
            resName:'PunJabi Tadka'
  
          },
          {
            name: 'Chicken Biryani',
            img: "https://lorempixel.com/output/food-q-c-150-150-5.jpg",
            pricing: 300,
            minimumOrder: 50,
            deliveryTime: 30,
            rating: 3.2,
            totalVotes: 984,
            totalReview: 23,
            resName:'PunJabi Tadka'
  
          }
        ]
       
       }
    this.orderSelItem = this.orderSelItem.bind(this)
  }
  orderSelItem = (index,val,res,price) =>{
    console.log("button clicked",val,index);
    this.nextStep();
    this.setState({
      orderItem:val,
      orderRestName:res,
      orderprice:price,
    })
  }
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
 render() {
   let a=this.state.ResturantDetails.map((i,index)=>{return <OrderItem item={i} index={index} order={this.orderSelItem} nextStep={this.nextStep}/>})
    {this.state.ResturantDetails.map((i)=>console.log({i}))};
    
    switch (this.state.step) {
      case 1:
        return (
          <div>
           <div> <Navbar /></div>
            <SerachArea />
            <div className="border border-primary row ">
              <div className ="row"> 
                {a} 
            </div>
            </div>
          </div>
          
        );
      case 2:
        return (
          <div>
            <div> <Navbar /></div>
            <OrderConfirm  itemName={this.state.orderItem} itemRes={this.state.orderRestName} itemPrice={this.state.orderprice} itemArr={this.state.customerOder} nextStep={this.nextStep} />
          </div>
        );
      case 3:
        return (
         <div>
           <div> <Navbar /></div>
             <Success  itemArr={this.state.customerOder} itemPrice={this.state.orderprice}/>
         </div>
        );
      
      default:
        return  <div> <Navbar /></div>
    }
  return (
    <div>
    
     
     
    </div>
  );
 }  
}

export default App;
