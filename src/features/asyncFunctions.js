import {
  getPositionsAPI,
  getTokenAPI,
  getUsersAPI,
  showMoreUsersAPI,
  signUpAPI,
} from "../api/api";

export const getPositions = async (setPositions) => {
  const res = await getPositionsAPI(); // get positions array from server
  setPositions(res.positions); // set it to store
};
export const getToken = async () => {
  const res = await getTokenAPI(); // get token from server
  return res.token;
};

export const signUp = async (
  setIsFetchingForm,
  formData,
  pageQuantity,
  usersQuantity,
  setUrlLinks,
  setUsers,
  getUsers,
  setSendedForm
) => {
  setIsFetchingForm(true); // launch preloader
  const token = await getToken(); // get token for sending to server
  await signUpAPI(token, formData); // sending to server token and formData
  await getUsers(pageQuantity, usersQuantity, setUrlLinks, setUsers); //refreshing data about displayed users
  setIsFetchingForm(false); // turn of preloader
  setSendedForm(true); // showing image of success registration new user
};

export const getUsers = async (
  pageQuantity,
  usersQuantity,
  setUrlLinks,
  setUsers
) => {
  const res = await getUsersAPI(pageQuantity, usersQuantity); // get array of users from server
  setUrlLinks({ next_url: res.links.next_url }); //saving url for the next page
  await setUsers(res.users); // saving users array to store
};

export const showMoreUsers = async (
  next_url,
  setUrlLinks,
  users,
  setUsers,
  setIsFetchingUsers
) => {
  setIsFetchingUsers(true); // launch preloader
  const res = await showMoreUsersAPI(next_url); // geting a next group of users

  if (res.page === res.total_pages) {    // additional check for next_url exist
    setUrlLinks({ next_url: null }); // saving null to url if next page doesn`t exist
    setIsFetchingUsers(false); // turn of preloader
  } else {
    setUrlLinks({ next_url: res.links.next_url }); // saving url for the next page
  }

  await setUsers([...users, ...res.users]); // saving users array to store
  setIsFetchingUsers(false); // turn of preloader
};
