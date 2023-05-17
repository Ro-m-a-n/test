import { getPositionsAPI, getTokenAPI, signUpAPI } from "../api/api";

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
