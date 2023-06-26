import request from "@/utils/http.js";

/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getTopCategoryAPI = (id) => {
  return request({
    url: "/category",
    params: {
      id,
    },
  });
};

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 二级分类id
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
  return request({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};
