import {
  getPositionsAPI,
  getTokenAPI,
  getUsersAPI,
  showMoreUsersAPI,
  signUpAPI,
} from "../api/api";

export const getPositions = (setPositions) => {
  getPositionsAPI().then((res) => {
    setPositions(res.positions);
  });
};
export const getToken = async (setToken) => {
  const res = await getTokenAPI();
  setToken(res.token);
};

export const signUp = async (token, setToken, formData) => {
  await getToken(setToken);
  const res = await signUpAPI(token, formData);
  console.log(res);
};

export const getUsers = async (
  pageQuantity,
  usersQuantity,
  setUrlLinks,
  setUsers
) => {
  const res = await getUsersAPI(pageQuantity, usersQuantity);
  setUrlLinks({ next_url: res.links.next_url });
  setUsers(res.users);
};

export const showMoreUsers = async (next_url, setUrlLinks, users, setUsers) => {
  const res = await showMoreUsersAPI(next_url);
  setUrlLinks({ next_url: res.links.next_url });
  setUsers([...users, ...res.users]);
};
