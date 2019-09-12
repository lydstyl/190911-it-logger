import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';

// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  }
};

// Add new tech on server
export const addTech = tech => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  }
};

// // Delete log on server
// export const deleteLog = id => async dispatch => {
//   try {
//     setLoading();

//     await fetch(`/logs/${id}`, {
//       method: 'DELETE'
//     });

//     dispatch({
//       type: DELETE_LOG,
//       payload: id
//     });
//   } catch (error) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: error.response.statusText
//     });
//   }
// };

// Set loading to true
export const setLoading = () => {
  return { type: SET_LOADING };
};
