import { login, getUserInfo } from "@/api/user";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem("token") || "",
    userInfo: {},
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
      localStorage.setItem("token", payload);
    },
    setUserInfo(state, userInfo) {
      state.userInfo = { ...userInfo };
    },
    reomveUserInfo(state) {
      state.userInfo = {};
    },
  },
  actions: {
    async getToken(context, payload) {
      const { data } = await login(payload);
      console.log(data.msg);
      if (data.msg === "验证码错误") {
        return;
      } else {
        router.push("/");
      }

      context.commit("setToken", data.token);
    },
  },
  async getUserInfo(context) {
    const result = await getUserInfo();
    context.commit("setUserInfo", result);
    return result;
  },
};
