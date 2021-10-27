import React from 'react';
import Pagination from './Pagination';
import User from './User';

// REACT AuthROACH
// 0. make a layout +++++
// 1. split on components +++++
// 2. static version in react +++++
// 3. declare state & props
// 4. write logic

class UsersList extends React.Component {
  state = {
    pageNumber: 1,
    usersPerPage: 3,
  };

  handleNext = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };

  handlePrev = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    });
  };

  render() {
    const { users } = this.props;
    const { pageNumber, usersPerPage } = this.state;
    const startIndex = (pageNumber - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToRender = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          usersCount={users.length}
          usersPerPage={usersPerPage}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          pageNumber={pageNumber}
        />

        <ul className="users">
          {usersToRender.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
