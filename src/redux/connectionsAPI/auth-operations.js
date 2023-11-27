import axios from "axios";

import { isRejectedWithValue } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';

//? https://connections-api.herokuapp.com

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}


export const registerUsers = createAsyncThunk('auth/register', async dataUser => {
    try {
        const { data } = await axios.post('/users/signup', dataUser);
        token.set(data.token);
        console.log('contact: ', data);
        return data;
    } catch (error) {
        return isRejectedWithValue(error);
    }
});

export const loginUsers = createAsyncThunk('auth/login', async dataUser => {
    try {
        const { data } = await axios.post('/users/login', dataUser);
        token.set(data.token);
        // console.log('contact: ', data);
        return data;
    } catch (error) {
        // return isRejectedWithValue(error);
        console.log(error)
    }
});

export const logOut = createAsyncThunk('auth/logOut', async () => {
    try {
     await axios.post('/users/logout');
     token.unset ();
    } catch (error) {
     return isRejectedWithValue(error);
    }
});

export const currentUser = createAsyncThunk('auth/currentUser', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.users.token;
    if (!persistToken) {
    return;
    };
    token.set(persistToken)
    try {
    const {data} = await axios.get('/users/current');
     return data
    } catch (error) {
     return isRejectedWithValue(error);
    }
});

// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const createUsers = createAsyncThunk(
//     'authorization/fetchRegisterUsers',
//     async (UserParam, { rejectWidthValue }) => {
//         try {
//          const contact = await contactsAPI.fetchRegistrationUser(UserParam);
//          return contact;  
//         } catch (err) {
//             return rejectWidthValue(err);
//         }
        
//     }
// )