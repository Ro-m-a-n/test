const API_URL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

export const getPositionsAPI = async () =>
  await fetch(API_URL + "positions").then((res) => {
    if (!res.ok) {
      throw Error("Network response was not ok");
    }
    return res.json().catch((err) => {
      console.log(err);
    });
  });

export const getTokenAPI = async () => {
  const res = await fetch(API_URL + "token");
  const resJson = await res.json();
  return resJson;
};

export const signUpAPI = async (token, formData) => {
  const res = await fetch(API_URL + "users", {
    method: "POST",
    headers: { token: token },
    body: formData,
  });
  const resJson = await res.json();
  return resJson;
};
export const getUsersAPI = async (pageQuantity, usersQuantity) => {
  const res = await fetch(
    API_URL + `users?page=${pageQuantity}&count=${usersQuantity}`
  );
  const resJson = await res.json();
  return resJson;
};

export const showMoreUsersAPI = async (next_url) => {
  const res = await fetch(next_url);
  const resJson = await res.json();
  return resJson;
};
