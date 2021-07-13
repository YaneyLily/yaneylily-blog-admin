/*
 * @Description: 测试文件
 * @Author: Yaney
 * @Github: https://github.com/YaneyLily
 * @Date: 2021-07-13 14:16:50
 * @LastEditors: Yaney
 * @LastEditTime: 2021-07-13 14:16:51
 */
import request from '@/utils/request'
export default {
  test() {
    return request({ // Promise
      url: '/test',
      method: 'get'
    })
  }
}

