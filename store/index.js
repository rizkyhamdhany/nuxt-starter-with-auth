import Vuex from 'vuex';
import Cookie from "js-cookie";
import * as types from './types';
import {AUTHENTICATE} from '../network/auth.apiclient';

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null
    },
    mutations: {
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      login(vuexContext, params) {
        return AUTHENTICATE(params)
          .then(response => {
            vuexContext.commit("setToken", response.data.token);
            localStorage.setItem("token", response.data.token);
            Cookie.set("jwt", response.data.token);
          })
          .catch(e => console.log(e));
      },
      logout({commit}) {
        localStorage.removeItem('token');
        commit(types.LOGOUT);
      },
      initAuth(vuexContext, req) {
        let token;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
        } else {
          token = localStorage.getItem("token");
        }
        vuexContext.commit("setToken", token);
      }
    },
    getters: {
      getToken: state => {
        return state.token;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  });
};

export default createStore
