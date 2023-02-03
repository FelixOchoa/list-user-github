import Axios from "axios";

export const getUsersFromApi = async (users) => {
  try {
    const { data } = await Axios.get(
      `https://api.github.com/search/users?q=${users}`
    );
    const info = {
      items: data.items,
      total_count: data.total_count,
    };
    if (info.total_count === 0) {
      return null;
    } else {
      return info;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getReposFromApi = async (users) => {
  try {
    const { data } = await Axios.get(
      `https://api.github.com/users/${users}/repos`
    );
    const orderedData = data.sort((a, b) => {
      return b.watchers_count - a.watchers_count;
    });

    return orderedData;
  } catch (error) {
    console.log(error);
  }
};
