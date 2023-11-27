import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';



export const getContactUser = createAsyncThunk('get/contact', async () => {
    try {
        const { data } = await axios.get('/contacts');
        
        // console.log('contact: ', data);
        return data;
    } catch (error) {
     console.log(error)
    }
});

export const createNewContact = createAsyncThunk('create/contact', async contactParam => {
    try {
        const { data } = await axios.post('/contacts',contactParam);
        
        console.log('contact: ', data);
        return data;
    } catch (error) {
     console.log(error)
    }
});

export const deleteContact = createAsyncThunk('delete/contact', async id => {
    try {
        const { data } = await axios.delete('/contacts',id);
        
        console.log('contact: ', data);
        return data;
    } catch (error) {
     console.log(error)
    }
});

