const API_URL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

export const getPositionsAPI = async () => {
  try {
    const res = await fetch(API_URL + "positions");
    if (!res.ok) {
      throw new Error("Server response is not ok");
    }
    const resJson = res.json();
    return resJson;
  } catch (error) {
    console.log("error:", error);
  }
};

export const getTokenAPI = async () => {
  try {
    const res = await fetch(API_URL + "token");
    if (!res.ok) {
      throw new Error("Server response is not ok");
    }
    const resJson = res.json();
    return resJson;
  } catch (error) {
    console.log(error);
  }
};

export const signUpAPI = async (token, formData) => {
  try {
    const res = await fetch(API_URL + "users", {
      method: "POST",
      headers: { token: token },
      body: formData,
    });
    if (!res.ok) {
      throw new Error("Server response is not ok");
    }
    const resJson = res.json();
    return resJson;
  } catch (error) {
    console.log(error);
  }
};
export const getUsersAPI = async (pageQuantity, usersQuantity) => {
  try {
    const res = await fetch(
      API_URL + `users?page=${pageQuantity}&count=${usersQuantity}`
    );
    if (!res.ok) {
      throw new Error("Server response is not ok");
    }
    const resJson = res.json();
    return resJson;
  } catch (error) {
    console.log(error);
  }
};

export const showMoreUsersAPI = async (next_url) => {
  try {
    const res = await fetch(next_url);
    if (!res.ok) {
      throw new Error("Server response is not ok");
    }
    const resJson = res.json();
    return resJson;
  } catch (error) {
    console.log(error);
  }
};
