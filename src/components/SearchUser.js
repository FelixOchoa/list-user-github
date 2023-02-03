import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchUser = ({ sendUser }) => {
  const handleSendUser = (username) => {
    sendUser(username);
  };

  return (
    <>
      <div className="w-full flex flex-row items-center mt-4 border-b pb-2">
        <FontAwesomeIcon icon={faSearch} className="pl-4" />
        <input
          placeholder="Buscar usuario"
          className="font-medium text-xl focus:outline-none w-full mx-4 text-gray-500"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSendUser(e.target.value);
            }
          }}
        />
      </div>
    </>
  );
};

export default SearchUser;
