import React, { useContext } from "react";
import UserList from "./UserList";
import SearchUser from "./SearchUser";
import Profile from "./Profile";
import UserContext from "../context/User/UserContext";

const ListUsers = () => {
  const userContext = useContext(UserContext);

  const sendUser = (user) => {
    if (user) {
      userContext.getUsers(user);
    } else {
      userContext.getUsers(false);
      userContext.setSelectedUser(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400bg-zinc-300 flex flex-col items-center justify-center">
      <div className="flex flex-col w-[1000px] min-h-[500px] bg-white rounded-xl shadow-md max-lg:w-[800px] max-md:w-full max-md:h-auto">
        <SearchUser sendUser={sendUser} />
        <div className="flex flex-row">
          <UserList />
          <Profile />
        </div>
      </div>
      <div>
        <p className="mt-4 text-center text-gray-500 text-xs">
          © 2023 - Creado por ❤️:
          <a
            className="text-blue-500 hover:text-blue-700 font-bold"
            href="https://github.com/FelixOchoa"
            target="_blank"
            rel="noreferrer"
          >
            @FelixOchoa
          </a>
        </p>
      </div>
    </div>
  );
};

export default ListUsers;
