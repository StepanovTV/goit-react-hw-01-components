import React from 'react';
import SocialProfile from './SocialProfile/SocialProfile';
import Stats from './Stats/Stats';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <>
    <SocialProfile />
    <hr />
    <Stats />
    <hr />
    <FriendList />
    <hr />
    <TransactionHistory />
  </>
);

export default App;
