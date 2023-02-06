import React, { useEffect, useContext } from "react";
import UserContext from "../context/User/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faFaceFrown,
  faFaceLaughBeam,
} from "@fortawesome/free-solid-svg-icons";
import Loading from "./Loading";

const Profile = () => {
  const userContext = useContext(UserContext);
  const { selectedUser, users, repos, loading } = userContext;

  useEffect(() => {
    if (selectedUser) {
      userContext.getRepos(selectedUser.login);
    }
  }, [selectedUser]);

  if (!loading && selectedUser) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <>
        {!selectedUser && users?.items?.length !== 0 && users?.items && (
          <div className="flex flex-col w-full items-center justify-center min-h-[400px] gap-4">
            <FontAwesomeIcon icon={faFaceLaughBeam} color="#94a3b8" size="4x" />
            <span className="text-base font-medium text-gray-500 w-[330px] text-center max-[590px]:w-[200px] max-[400px]:text-sm max-[400px]:w-[150px]">
              Prueba a seleccionar un usuario para ver su perfil de GitHub...
            </span>
          </div>
        )}
        {selectedUser && users?.items && (
          <div className="flex flex-col w-[700px] max-lg:w-[450px]">
            <div className="bg-gradient-to-r from-teal-100 via-rose-100 to-white w-full h-[120px] relative flex flex-col items-center">
              <img
                src={selectedUser.avatar_url}
                className="w-[100px] h-[100px] rounded-full absolute -bottom-12 border-4 border-white shadow-md"
                alt="profile"
              />
            </div>
            <div className="flex flex-col items-center mt-16">
              <span className="text-xl font-semibold">
                @{selectedUser.login}
              </span>
              <span className="text-base text-gray-500">
                {selectedUser.type}
              </span>
              <span className="text-base text-gray-500 mb-4">
                {" "}
                Mejores repositorios
              </span>
              <div
                className={
                  repos.length > 2
                    ? "grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1"
                    : repos.length === 0
                    ? "flex flex-col items-center mt-10"
                    : repos.length === 1
                    ? "grid grid-cols-1"
                    : "grid grid-cols-2 gap-4 max-lg:grid-cols-1"
                }
              >
                {repos.length !== 0 ? (
                  repos.map(
                    (repo, index) =>
                      index < 3 && (
                        <div className="w-[200px] border rounded-lg p-4 flex flex-col gap-1 relative min-h-[180px] max-lg:w-[180px] max-[530px]:w-[150px]">
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
                    <span className="mt-2 text-base text-gray-500 mb-4 text-center max-[590px]:w-[200px] max-[400px]:text-sm max-[400px]:w-[150px]">
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
  }
};

export default Profile;
