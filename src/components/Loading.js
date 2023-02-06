import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-[400px] gap-4 max-[470px]:w-[250px]">
      <FontAwesomeIcon
        icon={faStar}
        color="#94a3b8"
        size="4x"
        className="animate-spin"
      />
      <span className="text-base font-medium text-gray-500 w-[330px] text-center">
        Cargando...
      </span>
    </div>
  );
};

export default Loading;
