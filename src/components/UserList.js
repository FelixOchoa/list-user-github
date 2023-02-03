import React from "react";

const UserList = ({ users, setSelectedUser }) => {
  return (
    <>
      {users.length > 0 ? (
        <div className="flex flex-col w-1/2 pr-10 border-r min-h-[450px]">
          <div className="flex flex-col w-full">
            <div className="flex flex-col ml-4 gap-2 pb-2">
              {users.map(
                (user, index) =>
                  index < 9 && (
                    <>
                      <div
                        className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
                        key={index}
                        onClick={() => setSelectedUser(user)}
                      >
                        <img
                          className="w-[30px] h-[30px] object-cover rounded-full"
                          src={user.avatar_url}
                          alt="profile"
                        />
                        <span className="text-base font-medium">
                          {user.login}
                        </span>
                        <span className="font-medium text-gray-500">
                          @{user.id}
                        </span>
                      </div>
                    </>
                  )
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full items-center justify-center min-h-[400px]">
          <span className="text-base font-medium text-gray-500">
            ¡Hola! Aquí aparecerán resultados...
          </span>
        </div>
      )}
    </>
  );
};

export default UserList;
