import { createSlice } from "@reduxjs/toolkit";

import { registerUsers,loginUsers,logOut,currentUser } from './/auth-operations';

const users = createSlice({
name: 'authorization',   
  initialState: {
    user: {name: null, email: null},
    token: false,
    isLoggedIn: false,
    loading:false,
  }, 
  
  extraReducers: (builder) =>{
   builder
   .addCase(registerUsers.pending, (state) => {
     state.loading = true;
    }) 
    .addCase(registerUsers.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      state.user = user
      state.token = token;
      state.loading = false;
      state.isLoggedIn = true;
    })
    .addCase(registerUsers.rejected, (state, action) => {
      state.loading = false;
    })
     
    .addCase(loginUsers.pending, (state) => {
     state.loading = true; 
    }) 
    .addCase(loginUsers.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      state.user = user
      state.token = token;
      state.isLoggedIn = true
      state.loading = false; 
    })
    .addCase(loginUsers.rejected, (state, action) => {
      state.isLoggedIn = false;
    })

    .addCase(logOut.pending, (state) => {
    state.loading = true; 
    }) 
    .addCase(logOut.fulfilled, (state, action) => {
      state.user = {name: null, email: null}
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false; 

      state.contacts = null;
    })
    .addCase(logOut.rejected, (state, action) => {
      state.isLoggedIn = false
    })
         // ????
    .addCase(currentUser.pending, (state) => {
     state.loading = true;
    }) 
    .addCase(currentUser.fulfilled, (state, {payload}) => {
    state.user = payload; 
    state.isLoggedIn = true;
    })
    .addCase(currentUser.rejected, (state) => {
      state.isLoggedIn = false;
    })  
  }
  
})

// @gmail.com
export default users.reducer;

//  users: {
//     user: {
  // ?  Kiras                  van                      bjkjlitgf
// ?    kiras@gmail.com       ivankyk@gmail.com         voloooooooooooooo@gmail.com
//?     ggg27789kira          ivankyk3444               1234567890
//     },
// ?    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTVmOTI5ZWJiOTQzODAwMTRiNDlhY2YiLCJpYXQiOjE3MDA3NjIyNzB9.jLO3cZIaJF72QpLhZA8cdd8RaApVgmM2xYomant467U',
//?     isLoggedIn: false,
//?     loading: false
//   }