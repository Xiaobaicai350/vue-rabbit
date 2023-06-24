/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */
import httpInstance from "@/utils/http";
export function getBannerAPI() {
  return httpInstance({
    url: "home/banner",
  });
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};
