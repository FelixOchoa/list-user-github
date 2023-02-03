import React, { useState } from "react";
import UserList from "./UserList";
import SearchUser from "./SearchUser";
import { getUsersFromApi } from "../service/getUsers";
import Profile from "./Profile";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const sendUser = (user) => {
    if (user) {
      const fetchUsers = async () => {
        const res = await getUsersFromApi(user);
        setUsers(res.items);
      };
      fetchUsers();
    } else {
      setUsers([]);
      setSelectedUser(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400bg-zinc-300 flex flex-col items-center justify-center">
      <div className="flex flex-col w-[800px] min-h-[500px] bg-white rounded-xl shadow-md">
        <SearchUser sendUser={sendUser} />
        <div className="flex flex-row">
          <UserList users={users} setSelectedUser={setSelectedUser} />
          <Profile selectedUser={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default ListUsers;
