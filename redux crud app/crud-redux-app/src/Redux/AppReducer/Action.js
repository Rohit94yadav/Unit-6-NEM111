import axios from "axios";
import * as types from "./ActionType";

const getMusicRecordRequest = () => {
  return {
    type: types.GET_MUSIC_RECORD_REQUEST,
  };
};

const deleteMusicRecordRequest = () => {
  return {
    type: types.DELETE_MUSIC_RECORD_REQUEST,
  };
};

const addMusicRecordRequest = () => {
  return {
    type: types.ADD_MUSIC_RECORD_REQUEST,
  };
};

const editMusicRecordRequest = () => {
  return {
    type: types.EDIT_MUSIC_RECORD_REQUEST,
    
  };
};

const updateMusicRecordRequest = () => {
  return {
    type: types.UPDATE_MUSIC_RECORD_REQUEST,
  };
};

export const setAlbumUpdated = (payload) => {
  return {
    type: types.SET_ALBUM_UPDATED,
    payload
  };
};


const getMusicRecord = (queryParams) => (dispatch) => {
  dispatch(getMusicRecordRequest());
  return axios
    .get(`http://localhost:8080/albums`, queryParams)
    .then((res) => {
      dispatch({
        type: types.GET_MUSIC_RECORD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_MUSIC_RECORD_FAILURE,
      });
    });
};

const deleteMusicRecord = (id) => (dispatch) => {
  dispatch(deleteMusicRecordRequest());
  dispatch(getMusicRecordRequest());
  return axios
    .delete(`http://localhost:8080/albums/${id}`)
    .then((res) => {
      dispatch({
        type: types.DELETE_MUSIC_RECORD_SUCCESS,
        
      });
      
      
      
      console.log(res)
    })
    .catch((err) => {
      dispatch({
        type: types.DELETE_MUSIC_RECORD_FAILURE,
      });
    });
};

const addMusicRecord = (music) => (dispatch) => {
  dispatch(addMusicRecordRequest());
  return axios
    .post(`http://localhost:8080/albums`,music)
    .then((res) => {
      dispatch({
        type: types.ADD_MUSIC_RECORD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.ADD_MUSIC_RECORD_FAILURE,
      });
    });
};

const editMusicRecord = (id) => (dispatch) => {
  dispatch(editMusicRecordRequest());
  return axios
    .get(`http://localhost:8080/albums/${id}`)
    .then((res) => {
      
      dispatch({
        type: types.EDIT_MUSIC_RECORD_SUCCESS,
        payload: res.data,
      });

    })
    .catch((err) => {
      dispatch({
        type: types.EDIT_MUSIC_RECORD_FAILURE,
      });
    });
};

const updateMusicRecord = (albums, id) => (dispatch) => {
  dispatch(updateMusicRecordRequest());
  return axios
    .put(`http://localhost:8080/albums/${id}`,albums)
    .then((res) => {
      dispatch({
        type: types.UPDATE_MUSIC_RECORD_SUCCESS,
        
      });
      console.log(res.data)
    })
    .catch((err) => {
      dispatch({
        type: types.UPDATE_MUSIC_RECORD_FAILURE,
      });
      console.log(err)
    });
};



export { getMusicRecordRequest, getMusicRecord, deleteMusicRecord, addMusicRecord,editMusicRecord, updateMusicRecord};
