import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    // creating state in the constructor bcz it called first when a class loads
    this.state = {
      count: 0,
    };
  }
  /**
   *
   * lifecycle methods
   *
   * constructor
   * render
   * componentDidMount
   * set state
   * render
   * update on dom
   * componentDidUpdate
   * componentWillUnmount  (in this we have to clear our setintervals or other related tasks..)
   *
   *
   *
   */
  componentDidMount() {
    // best place for api call
    //  called only one time
    console.log("componentDidMount");
    // same as useEffect(() => {}, []);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count !== prevState.count
      // || this.state.count !== prevState.count    for other state variables
    ) {
      // then here do something
      // same as    useEffect(() => {}, [count]);
    }
    console.log("component did Update");
  }
  render() {
    console.log("Render");
    return (
      <div>
        <p>Profile class based</p>
        <h1>Name : {this.props.name} </h1>
        <h1>Location : {this.props.location} </h1>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.setState({ count: 1 })}>set Count</button>
      </div>
    );
  }
}

export default Profile;
