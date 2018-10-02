import React, { Component } from "react";

class Binding extends Component {
  onClickMe = () => console.log(this);

  // constructor(props) {
  //   super(props);

  //   //on way to bind this to class method
  //   // avoid binding in the render because it will bind everytime the component renders
  //   //this.onClickMe = this.onClickMe.bind(this);
  // }
  onClickMe() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.onClickMe}>
          {" "}
          {/*this.onClickMe.bind(this)*/}
          Click Me
        </button>
      </div>
    );
  }
}

export default Binding;
