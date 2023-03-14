export const todos = (userCredential) => {
  return axios.get("https://todoapi-fawn.vercel.app/api/todos/", {
    headers: {
      Authorization: userCredential.token,
    },
  });
};
