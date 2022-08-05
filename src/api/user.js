import request from "@/utils/request";
/**
 * 登录
 * @param {String} loginName 用户名
 * @param {String} password 密码
 * @param {String} code 验证码
 * @param {String} clientToken 客户端请求用的token
 * @param {integer} loginType 登录类型 0：后台；1：运营运维端；2：合作商后台
 * @returns  Promise对象
 */
export function login(data) {
  return request({
    url: "/user-service/user/login",
    method: "post",
    data,
  });
}

/**
 *  获取用户的基本资料
 *
 * **/
export function getUserInfo(id) {
  return request({
    url: "user-service/user/" + id,
    method: "post",
  });
}

export function logout() {
  return request({
    url: "/vue-admin-template/user/logout",
    method: "post",
  });
}

/**
 * 获取验证码
 * @param {*} clientToken 请求随机数
 * 响应类型 图片流
 * @returns Promise对象
 */
// 图片验证码
export const imageCodeApi = (clientToken) => {
  return request({
    method: "get",
    url: `/user-service/user/imageCode/${clientToken}`,
    responseType: "blob",
  });
};
