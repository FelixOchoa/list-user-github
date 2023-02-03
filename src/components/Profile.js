import React, { useState, useEffect } from "react";
import { getReposFromApi } from "../service/Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faFaceFrown,
  faFaceLaughBeam,
} from "@fortawesome/free-solid-svg-icons";

const Profile = ({ selectedUser, users }) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    if (selectedUser) {
      const fetchRepo = async () => {
        const res = await getReposFromApi(selectedUser.login);
        setRepos(res);
      };
      fetchRepo();
    }
  }, [selectedUser]);

  return (
    <>
      {!selectedUser && users.length !== 0 && users && (
        <div className="flex flex-col w-full items-center justify-center min-h-[400px] gap-4">
          <FontAwesomeIcon icon={faFaceLaughBeam} color="#94a3b8" size="4x" />
          <span className="text-base font-medium text-gray-500 w-[330px] text-center">
            Prueba a seleccionar un usuario para ver su perfil de GitHub...
          </span>
        </div>
      )}
      {selectedUser && users && (
        <div className="flex flex-col w-[700px]">
          <div className="bg-gradient-to-r from-teal-100 via-rose-100 to-white w-full h-[120px] relative flex flex-col items-center">
            <img
              src={selectedUser.avatar_url}
              className="w-[100px] h-[100px] rounded-full absolute -bottom-12 border-4 border-white shadow-md"
            />
          </div>
          <div className="flex flex-col items-center mt-16">
            <span className="text-xl font-semibold">@{selectedUser.login}</span>
            <span className="text-base text-gray-500">{selectedUser.type}</span>
            <span className="text-base text-gray-500 mb-4">
              {" "}
              Mejores repositorios
            </span>
            <div
              className={
                repos.length > 2
                  ? "grid grid-cols-3 gap-4"
                  : repos.length === 0
                  ? "flex flex-col items-center mt-10"
                  : repos.length === 1
                  ? "grid grid-cols-1"
                  : "grid grid-cols-2"
              }
            >
              {repos.length !== 0 ? (
                repos.map(
                  (repo, index) =>
                    index < 3 && (
                      <div className="w-[200px] border rounded-lg p-4 flex flex-col gap-1 relative min-h-[180px]">
                        <h1 className="font-bold text-[13px]">{repo.name}</h1>
                        <p className="text-xs max-h-[33px] overflow-clip">
                          {repo.description
                            ? repo.description + "..."
                            : "Sin descripción..."}
                        </p>
                        <span className="flex flex-row items-center gap-2 absolute bottom-[60px]">
                          <FontAwesomeIcon icon={faStar} color="#ffcc00" />
                          <span className="text-base text-gray-500">
                            {" "}
                            {repo.watchers}
                          </span>
                        </span>
                        <div className="flex flex-row gap-2 pt-2 absolute bottom-4">
                          <span className="text-xs border rounded-full px-2">
                            {repo.language ? repo.language : "N/A"}
                          </span>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-sky-700"
                          >
                            Ver proyecto
                          </a>
                        </div>
                      </div>
                    )
                )
              ) : (
                <div className="flex flex-col items-center justify-center w-full">
                  <FontAwesomeIcon
                    icon={faFaceFrown}
                    color="#94a3b8"
                    size="4x"
                  />
                  <span className="text-base text-gray-500 mb-4">
                    Este usuario no tiene repositorios públicos...
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
