import axios from "axios";
export const login = (userCredential) => {
  console.log("login", userCredential);
  return axios.post(
    "https://todoapi-fawn.vercel.app/api/auth/login",
    userCredential
  );
};

export const signup = (userCredential) => {
  return axios.post(
    "https://todoapi-fawn.vercel.app/api/auth/signup/",
    userCredential
  );
};


