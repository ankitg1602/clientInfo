import {
  GET_POST,
  CREATE_POST,
  UPDATE_POST
} from "./types";
import axios from "axios";


import { apiURL} from "../shared/config";

const actions = {
  getPost: params => {
    return dispatch => {
      return axios
        .get(`${apiURL}/public/post`)
        .then(resp => {
          let actionData = {};
            actionData = {
              type: GET_POST,
              payload: resp.data.query && resp.data.query.length ? resp.data.query : []
            };
         
          dispatch(actionData);
        })
        .catch(error => {
            throw error;
        });
    };
  },
  
  createPost: (params) => {
    return dispatch => {
      return axios.post(`${apiURL}/public/post/create`, {
        params
      }).then(res => {
        dispatch({
          type: CREATE_POST,
          payload: res.data.data
        });
      });
    };
  },
  updatePostById: params => {
    return dispatch => {
      return axios
        .put(`${apiURL}/public/post/${params.id}`, {
          params
        })
        .then(resp => {
          if (resp.data && resp.data.data) {
            dispatch({
              type: UPDATE_POST,
              payload: resp.data
            });
          }
        })
        .catch(error => {
        });
    };
  }
};

export default actions;
