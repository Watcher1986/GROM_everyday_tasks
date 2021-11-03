import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((res) => res.json())
      .then((user) => {
        setUserData({
          avatarUrl: user.avatar_url,
          userName: user.name,
          userLocation: user.location,
        });
      });
  }, [userId]);

  if (!userData) {
    return null;
  }

  const { avatarUrl, userName, userLocation } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userName}</span>
        <span className="user__location">{userLocation}</span>
      </div>
    </div>
  );
};

export default User;


//   componentDidMount() {
//     console.log('componentDidMount was called');

//     console.log(this.props.match);

//     // const userId = this.props.match.params.userId

//     this.updateUserData(this.props.match.params.userId)
//   }

//   componentDidUpdate(prevProps) {
//     console.log(prevProps);

//     const currentUserId = this.props.match.params.userId;
//     const prevUserId = prevProps.match.params.userId;

//     if (currentUserId !== prevUserId) {
//       this.updateUserData(currentUserId);
//     }
//     console.log('componentDidUpdate was called');
//   }

//   updateUserData = () => {
//      fetch(`https://api.github.com/users/${this.props.match.params.userId}`)
//        .then((res) => res.json())
//        .then((userData) => {
//          this.setState({
//            avatarUrl: userData.avatar_url,
//            userName: userData.name,
//            userLocation: userData.location,
//          });
//        });
//   }

//   render() {
//     console.log('render was called');

//     const { avatarUrl, userName, userLocation } = this.state;

//     if (!avatarUrl || !userName || !userLocation) {
//       return null;
//     }

//     return (
//       <div className="user">
//         <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
//         <div className="user__info">
//           <span className="user__name">{userName}</span>
//           <span className="user__location">{userLocation}</span>
//         </div>
//       </div>
//     );
//   }
// }
