import { isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
// import { createAsyncThunk } from '@reduxjs/toolkit'

//?https://655a64cf6981238d054d7419.mockapi.io/api/v1/contacts

axios.defaults.baseURL = 'https://655a64cf6981238d054d7419.mockapi.io/api/v1'

export async function fetchContacts() {
    try {
    const {data} = await axios.get('/contacts')  ;
        return data;
    } catch (error) {
        return isRejectedWithValue(error)
    }
};


export async function fetchContactsById(id) {
    try {
    const { data } = await axios.put(`/contacts/${id}`,
    {favorite: true,}, {
    headers: {'Content-Type': 'application/json',},
    });
    return data  
 } catch (error) {
        return isRejectedWithValue(error)
    }    
};

export async function fetchContactsByIdFalse(id) {
    try {
    const { data } = await axios.put(`/contacts/${id}`,
    {favorite: false,}, {
    headers: {'Content-Type': 'application/json',},
    });
    return data
    } catch (error) {
        return isRejectedWithValue(error)
    }
     
};

export async function fetchDeleteContact(id) {
    try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data   
    } catch (error) {
        return isRejectedWithValue(error)
    }
    
};

export async function fetchAddNewContact(contact) {
     try {
     const { data } = await axios.post('/contacts', contact,{
    headers: {'Content-Type': 'application/json',},
});
console.log('data: ', data);
    return data 
    } catch (error) {
        return isRejectedWithValue(error)
    }
     
};






