import React from "react";
//import "./index";
import Updatecomp from"./Higherorederccomp";
import "./styles.css";
//import Updta from "./Higherorederccomp";
//import OriginalComp from "./Higherorederccomp";
//import NewComp from "./Higherorederccomp"

export class App extends React.Component {
  render() {
    Updatecomp.nameProp="chandar in my commp";
    return (
      <div>
        <Updatecomp nameProp={Updatecomp.nameProp}/>
        <Content />
        <Header />
        <Clickcounter />
        <Cilckhover />
      </div>
    );
  }
}


class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <p> I understood RAvi</p>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <h2> I understood chandar </h2>;
  }
}


export class Fnccomp extends React.Component {
  render() {
    return <h3>HELLLLLo</h3>;
  }
}

//function Incrementcclick(){
//const clickincrement= cilckhover => {

//}

export class Clickcounter extends React.Component {
  constructor(NewComp) {
    super(NewComp);
    
    this.state = {
      count: 0
   
    };
  }
  UpdateClick = () => {
    //this.setprops=OriginalComp.Name;
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    //const { Name } = this.props.Name;
    //const { Updatecomp }= Updatecomp.Name;
    //if ({Updta}) {
    return (
      <div>
        <button onClick={this.UpdateClick}>
          {this.props.headerProp} clicked {count} time
          {this.props.nameProp} clicked {count} time
        </button>
      </div>
    );
   // }
  /* else {
      return (
        <div>
          <button onClick={this.UpdateClick}>
           clicked {count} time
          </button>
        </div>
      );
      }*/
  }
}
/*Clickcounter.defaultProps = {
  headerProp: "Header from props...",
  contentProp:"Content from props..."
}*/

export class Cilckhover extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
     // data:[{
      "count": 0,
      isShow: true,
 //   "Name": ""
 //   }]
    };
    //Name="";
  }
  HoverClick = () => {
    //this.props.Name
    this.setState({ count: this.state.count + 1
    });
  }

  render() {
    const { count } = this.state;
   // if (name) {
    return (
      
      <div>
        <button onMouseEnter={this.HoverClick}>
       
          {this.props.Name} clicked hover {count} time
        </button>
      
      </div>
      
    );
    /*}
    else{
      return (
      
        <div>
          <button onMouseEnter={this.HoverClick}>
            didnt have prop's clicked hover {count} time
          </button>
        
        </div>
        
      );
    }*/
  }
}

//return App;
//export default OriginalComp(Clickcounter);
export default App;
