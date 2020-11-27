import React, {Component} from 'react'
import './App.css';
import Employee from './Employee/Employee' 

class App extends Component {

  state={
    Emp:[
      {name:'mohan_k',age:34},
      {name:'rohan_R',age:35},
      {name:'sohan_Z',age:33}
    ],
    vbl:true
  };

  code=(NewName)=>{
    this.setState({
      Emp:[
        {name:'mohan_k',age:34},
        {name:NewName,age:35},
        {name:'sohan_Z',age:33}
      ] 
    });
  }
  change=(events)=>{
    this.setState({
      Emp:[
        {name:'mohan_k',age:34},
        {name:events.target.value,age:35},
        {name:'sohan_Z',age:33}
      ] 
    });
  }

  show_hide=()=>
  {
    const v=this.state.vbl;
    this.setState({vbl:!v});  
  }

  render()
  {
    const s={
      fontSize:'25px',
      height:'40px',
      width:'230px'  
    };

    let employees=null;
    if(this.state.vbl)
    {
      employees=(
        <div>
            <Employee 
            name={this.state.Emp[0].name} 
            age={this.state.Emp[0].age} />         
            <Employee 
            name={this.state.Emp[1].name} 
            age={this.state.Emp[1].age}
            click={()=>this.code('NewRATAN')}
            change={this.change} />         
            <Employee 
            name={this.state.Emp[2].name} 
            age={this.state.Emp[2].age} />          
        </div>
      );  
    }

    return (
        <div className="App">
          <h1>Final Example goes here</h1>
          <input type="button" style={s} value="show or hide" onClick={this.show_hide} />
          <br/><br />
          {employees}             
        </div>
    );
  }
}
export default App;
