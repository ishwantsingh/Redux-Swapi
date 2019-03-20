import axios from "axios";
import { bindActionCreators } from "redux";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
// export const SPINNER_ON = "SPINNER_ON";
// export const SPINNER_OFF = "SPINNER_OFF";

const fetchUrl = `https://swapi.co/api/people`;

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const fetching = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(fetchUrl)
    .then(res => {
      console.log(res.data);
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(res => {
      dispatch({ type: FAILURE, payload: res.data });
    });
};

// export const fetching = () => dispatch => {
//   axios.get("https://swapi.co/api/people").then(res => {
//     console.log("res");
//     dispatch({ type: SUCCESS, payload: res.data });
//   });
// };

// export function spinnerOn() {
//   return {
//     type: SPINNER_ON
//   };
// }

// export function spinnerOff() {
//   return {
//     type: SPINNER_OFF
//   };
// }

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
