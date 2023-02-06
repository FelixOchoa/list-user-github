import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink, faSadTear } from "@fortawesome/free-solid-svg-icons";

const UserList = () => {
  const userContext = useContext(UserContext);
  const { users } = userContext;

  return (
    <>
      {users?.items?.length > 0 ? (
        <div className="flex flex-col pr-10 border-r min-h-[500px] w-[350px] max-lg:w-[250px] max-[530px]:w-[200px]">
          <div className="flex flex-col w-full">
            <div className="flex flex-col ml-4 gap-2 pb-2 mt-2">
              {users.items.map(
                (user, index) =>
                  index < 9 && (
                    <>
                      <div
                        className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-xl max-[530px]:gap-1.5"
                        onClick={() => {
                          userContext.setSelectedUser(user);
                        }}
                      >
                        <img
                          className="w-[30px] h-[30px] object-cover rounded-full max-[530px]:w-[20px] max-[530px]:h-[20px]"
                          src={user.avatar_url}
                          alt="profile"
                        />
                        <span className="text-base font-medium max-lg:text-sm max-[530px]:text-[12px]">
                          {user.login}
                        </span>
                        <span className="font-medium text-gray-500 max-lg:text-sm max-[530px]:text-[9px]">
                          @{user.id}
                        </span>
                      </div>
                    </>
                  )
              )}
            </div>
          </div>
        </div>
      ) : users?.length === 0 || !users ? (
        <div className="flex flex-col w-full items-center justify-center min-h-[400px] gap-4">
          <FontAwesomeIcon icon={faSmileWink} color="#94a3b8" size="4x" />
          <span className="text-base font-medium text-gray-500 w-[330px] text-center">
            ¡Hola! Prueba a realizar una búsqueda para que lluevan los
            resultados...
          </span>
        </div>
      ) : (
        <div className="flex flex-col w-full items-center justify-center min-h-[400px] gap-4">
          <FontAwesomeIcon icon={faSadTear} color="#94a3b8" size="4x" />
          <span className="text-base font-medium text-gray-500 w-[330px] text-center">
            La búsqueda no ha devuelto ningún resultado...
          </span>
        </div>
      )}
    </>
  );
};

export default UserList;
