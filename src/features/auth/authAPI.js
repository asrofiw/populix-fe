import http from "../../helpers/http";

export async function authLogin(data) {
  try {
    const res = await http().post("api/auth/login", data);

    return res.data;
  } catch (err) {
    throw err;
  }
}
