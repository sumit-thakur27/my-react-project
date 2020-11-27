import React from 'react';
import Employee from './employee/employee'
import './App.css'
class Code extends React.Component {
  state = {
    emp: [
      { name: "Sumit", age: "19" },
      { name: "Rahul", age: "20" },
      { name: "Arjun", age: "25" }
    ],
    cont: true
  }
  hide_show = () => {
    const v = this.state.cont
    this.setState({ cont: !v })
  }
  Change = (event) => {
    this.setState({
      emp: [
        { name: "Sumit", age: "19" },
        { name: event.target.value, age: "20" },
        { name: "Arjun", age: "25" }
      ]
    })
  }
  render() {
    let Employ = null;
    if (this.state.cont) {
      Employ = (
        <div className="App">
          <Employee name={this.state.emp[0].name} age={this.state.emp[0].age} />
          <Employee name={this.state.emp[1].name} age={this.state.emp[1].age} Change={this.Change} />
          <Employee name={this.state.emp[2].name} age={this.state.emp[2].age} />
        </div>
      )
    }
    return (
      <div>
        <button type="button" onClick={this.hide_show} className="change_content">Hide and Show </button>
        {Employ}
      </div>
    )
  }
}
export { Code }