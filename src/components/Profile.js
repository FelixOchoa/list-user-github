import React from "react";

const Profile = ({ selectedUser }) => {
  return (
    <>
      {selectedUser && (
        <div className="flex flex-col w-1/2">
          <div className="bg-gradient-to-r from-teal-100 via-rose-100 to-white w-full h-[150px] relative flex flex-col items-center">
            <img
              src={selectedUser.avatar_url}
              className="w-[100px] h-[100px] rounded-full absolute -bottom-12 border-4 border-white shadow-md"
            />
          </div>
          <div className="flex flex-col items-center mt-16">
            <span className="text-xl font-semibold">@{selectedUser.login}</span>
            <span className="text-base text-gray-500">{selectedUser.type}</span>
            <span className="text-base text-gray-500 mt-6">
              Puntuación: {selectedUser.score}
            </span>
            <span className="text-base text-gray-500">
              Repositorios:{" "}
              <a
                target={"_blank"}
                className="outline-none"
                href={selectedUser.repos_url}
              >
                Click Aquí
              </a>
            </span>
            <a
              target={"_blank"}
              href={selectedUser.html_url}
              className="px-8 py-2 border-2 rounded-lg font-semibold shadow-sm"
            >
              Ver perfil
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
