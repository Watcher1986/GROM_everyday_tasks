import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// input: props(obj)
// output: JSX

// algo
// 1. show Login by default
// 2. after login click - hide login & show Spinner for 2 seconds
// 3. after 2 seconds - hide Spinner & show logout
// 4. after logout click - hide Logout & show Login

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <>
        <Login />
        <Logout />
        <Spinner />
      </>
    );
  }
}

export default App;

// REACT APPROACH
// 0. make a layout +++++
// 1. split on components +++++
// 2. static version in react +++++
// 3. declare state & props
// 4. write logic
