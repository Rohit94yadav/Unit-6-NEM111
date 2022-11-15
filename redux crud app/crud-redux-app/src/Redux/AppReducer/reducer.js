import {
  ADD_MUSIC_RECORD_REQUEST,
  DELETE_MUSIC_RECORD_REQUEST,
  EDIT_MUSIC_RECORD_FAILURE,
  EDIT_MUSIC_RECORD_REQUEST,
  EDIT_MUSIC_RECORD_SUCCESS,
  GET_MUSIC_RECORD_FAILURE,
  GET_MUSIC_RECORD_REQUEST,
  GET_MUSIC_RECORD_SUCCESS,
  SET_ALBUM_UPDATED,
  UPDATE_MUSIC_RECORD_FAILURE,
  UPDATE_MUSIC_RECORD_REQUEST,
  UPDATE_MUSIC_RECORD_SUCCESS,
} from "./ActionType";

const initialState = {
  musicRecords: [],
  isLoading: false,
  isError: false,
  album : null,
  albumUpdated: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MUSIC_RECORD_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case GET_MUSIC_RECORD_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        musicRecords: payload,
      };

    case GET_MUSIC_RECORD_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

      case DELETE_MUSIC_RECORD_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

      case ADD_MUSIC_RECORD_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

      case EDIT_MUSIC_RECORD_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case EDIT_MUSIC_RECORD_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        album: payload,
      };

    case EDIT_MUSIC_RECORD_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

      case UPDATE_MUSIC_RECORD_REQUEST:
        return {
          ...oldState,
          isLoading: true,
          albumUpdated:false,
        };
  
      case UPDATE_MUSIC_RECORD_SUCCESS:
        return {
          ...oldState,
          isLoading: false,
          albumUpdated:true,
          // musicRecords: payload,
        };
  
      case UPDATE_MUSIC_RECORD_FAILURE:
        return {
          ...oldState,
          isLoading: false,
          isError: true,
          albumUpdated:false,
        };

        case SET_ALBUM_UPDATED:
        return {
          ...oldState,
          
          albumUpdated:payload,
          
        };

    default:
      return oldState;
  }
};

export { reducer };
