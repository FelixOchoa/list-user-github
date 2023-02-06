import React from "react";
import ListUsers from "./components/index";
import UserState from "./context/User/UserState";
const App = () => {
  return (
    <div>
      <UserState>
        <ListUsers />
      </UserState>
    </div>
  );
};

export default App;
