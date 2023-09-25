import React from "react";
import UserContext from "../utils/custom_contexts/UserContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Constructor");
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
    // console.log("componentDidMount");
    // this.timer = setInterval(() => {
    //   console.log("Hello Harshit");
    // }, 1000);
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
    // console.log("component did Update");
  }

  componentWillUnmount() {
    // console.log("unmounting");
    // clearInterval(this.timer);
  }

  render() {
    // console.log("Render");
    return (
      <div>
        <p>Profile class based</p>
        <h1>Name : {this.props.name} </h1>
        <h1>Location : {this.props.location} </h1>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.setState({ count: 1 })}>set Count</button>

        <UserContext.Consumer>
          {({ user }) => (
            <div className="flex space-x-5 bg-green-800 text-white px-5 py-2 m-2 rounded-lg shadow-md shadow-blue-300 max-w-md">
              <h1 className="font-semibold tracking-wider">{user.name}</h1>
              <h1 className="font-semibold tracking-wider">{user.email}</h1>
            </div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Profile;
