import { POST_MESSAGE} from './ActionsTypes';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/posts';

export const createPost = ({ message }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, {message})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPostSuccess =  (data) => {
  return {
    type: POST_MESSAGE,
    payload: data
  }
};