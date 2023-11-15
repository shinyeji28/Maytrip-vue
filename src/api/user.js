import { localAxios } from "@/util/http-commons";

const local = localAxios();

async function login(data) {
  return await local.post(`/login`, JSON.stringify(data));
}

async function signup(data) {
  return await local.post(`/signup`, JSON.stringify(data));
}

async function modifyUser(data) {
  return await local.put(`/user`, JSON.stringify(data));
}

export { login, signup, modifyUser };
