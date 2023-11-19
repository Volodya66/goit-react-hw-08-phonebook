import { createSlice } from '@reduxjs/toolkit'

const initialStates = {
    value: [
        { id: 'id-1', name: 'Alyona Udod', number: '459-12-56' , favorite:false },
         { id: 'id-5', name: 'Nadiia Bulmak', number: '463-21-29', favorite:false },
        { id: 'id-2', name: 'Dad', number: '443-89-12', favorite:false },
        { id: 'id-3', name: 'Mom ❤', number: '645-17-79', favorite:false },
        { id: 'id-4', name: 'Natalia Valko', number: '227-91-26', favorite:false },
        
    ],
   
};

export const listContSlice = createSlice({
    
    name: 'contact',
    initialState : initialStates,
    reducers: {
        addNewContact: (state, action) => {
           state.value.push(action.payload)
        },
        deleteContact: (state, action) => {

        const idx = state.value.findIndex(el => el.id === action.payload)

        state.value.splice(idx, 1);
        },
        favoriteContact: (state, action) => {
        // console.log('action.payload: ', action.payload);
        
        // const idx = state.value.findIndex(el => el.id === action.payload.id)
        // console.log('idx: ', idx);
        const idx = state.value.findIndex(el => el.id === action.payload.id);
            
            // Перевірка, чи існує об'єкт за вказаним індексом
            if (idx !== -1) {
                // Зміна значення властивості 'favorite' на протилежне
                state.value[idx].favorite = !action.payload.status;
            }
        
            
        
        }

    },
});

export const { addNewContact ,deleteContact,setFilter,favoriteContact } = listContSlice.actions // той же екшн 

    