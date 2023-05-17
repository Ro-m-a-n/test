const API_URL = "https://frontend-test-assignment-api.abz.agency/";

export const getPositionsAPI = async () =>
  await fetch(API_URL + "api/v1/positions").then((res) => {
    if (!res.ok) {
      throw Error("Network response was not ok");
    }
    return res.json().catch((err) => {
      console.log(err);
    });
  });

export const getTokenAPI = async () => {
  const res = await fetch(API_URL + "api/v1/token");
  const resJson = await res.json();
  return resJson;
};

export const signUpAPI = async (token, formData) => {
  const res = await fetch(API_URL + "api/v1/users", {
    method: "POST",
    headers: { token: token },
    body: formData,
  });
  const resJson = await res.json();
  return resJson;
};

// export const deleteNoteAPI = (noteId) =>
//   fetch(API_URL + `apps/${appId}/dtypes/${noteId}.json`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify({
//       rest_api_key: API_key,
//     }),
//   });

// export const updateNoteAPI = (noteId, newNote) =>
//   fetch(API_URL + `apps/${appId}/dtypes/${noteId}.json`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify({
//       rest_api_key: API_key,
//       values: {
//         cyW4vsW5fiW47dIg8uWOfD: newNote,
//       },
//     }),
//   });
