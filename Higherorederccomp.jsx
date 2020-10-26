import React from "react";
import  "./index";
import "./App"
import "./App.css"
import BellA from "./BellA.png"
import BellB from "./BellB.png"


 export const Updatecomp = (props) => {
     //class NewComp1 extends React.Component{
        //constructor(props){
            //super(props);
            //this.state = {
            //  Displayname: "ravi"
           // };
        //}
        
      

    return(
<div><button>Newcomp clicked {props.name} {props.place} </button>
<p>Hi See the bell button</p></div>
    ); 


//}return NewComp1
//export  Updatecomp new change
}

export class NewComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          Displayname: "chandar ",
          message:"will i change",
          imageURL: BellB

        };
       
    }
    
  Onceclicked =()=>{
    this.setState = {
        Displayname: "Ravichandar ",
        message:" i changed",
        imageURL: BellA

      };
  }

render(){
return(

    <div className = "App">
    <button onClick={this.Onceclicked} >Newcomp image clicked {this.props.Displayname} "{this.state.message}"   {this.state.Displayname} </button>
    
    <img style={{ width: " 30px" , height:"30px"}} scr={this.state.imageURL} alt="" />
    </div>
); 
}

}
