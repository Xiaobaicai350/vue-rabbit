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
