// import axios from "axios";

// import { isRejectedWithValue } from "@reduxjs/toolkit";

// //? https://connections-api.herokuapp.com

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// export async function fetchRegistrationUser(UserRegisterParams) {
//     try {
//         const { data } = await axios.post('/users/signup',UserRegisterParams);
//         console.log('data: ', data);
//         return data;
//     } catch (err) {  
//      return isRejectedWithValue(err);
//     }
// };

// export async function fetchLoginUser() {
//     try {
//      const { data } = await axios.post('/users/login');
//      return data;
//     } catch (err) {  
//      return isRejectedWithValue(err);
//     }
// };

// export async function fetchCurrentUser() {
//     try {
//      const { data } = await axios.post('/users/current');
//      return data;
//     } catch (err) {  
//      return isRejectedWithValue(err);
//     }
// };