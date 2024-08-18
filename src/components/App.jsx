import React from "react";
import Profile from "./Profile/Profile";
import user from "../data/user.json";
import friends from "../data/friends.json";
import FriendList from "./FriendList/FriendList";
import transactions from "../data/transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
