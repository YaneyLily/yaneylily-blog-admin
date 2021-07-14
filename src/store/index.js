/*
 * @Description: 添加tagsView
 * @Author: Yaney
 * @Github: https://github.com/YaneyLily
 * @Date: 2021-07-13 09:31:24
 * @LastEditors: Yaney
 * @LastEditTime: 2021-07-14 18:04:39
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import tagsView from './modules/tagsView'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    tagsView
  },
  getters
})

export default store
