import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchUser = ({ sendUser }) => {
  const handleSendUser = (username) => {
    sendUser(username);
  };
  const getRef = useRef();
  const [focused, setFocused] = useState(false);

  return (
    <>
      <div className="w-full flex flex-row items-center mt-4 border-b pb-2">
        <FontAwesomeIcon icon={faSearch} className="pl-4" />
        <input
          placeholder="Buscar usuario"
          className="font-medium text-xl focus:outline-none w-full mx-4 text-gray-500"
          onFocus={() => setFocused(true)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSendUser(e.target.value);
            }
          }}
          ref={getRef}
        />
        {focused && (
          <button
            className="mr-4 rounded-full bg-black/20 text-white text-xs px-1"
            onClick={() => {
              setFocused(false);
              getRef.current.value = "";
            }}
          >
            X
          </button>
        )}
      </div>
    </>
  );
};

export default SearchUser;
