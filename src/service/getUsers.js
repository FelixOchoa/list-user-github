import Axios from "axios";

export const getUsersFromApi = async (users) => {
  const { data } = await Axios.get(
    `https://api.github.com/search/users?q=${users}`
  );
  const info = {
    items: data.items,
    total_count: data.total_count,
  };
  return info;
};
