import { createSlice } from "@reduxjs/toolkit";

const initialBook={
    books:[
        {id:1, title:'Books Hospility', author:'Firoj Kobir'},
        {id:1, title:'Natural Bauty', author:'Tania Khatun'}
    ]
};

export const bookSlice= createSlice({
    name:'books',
    initialState: initialBook,
    reducers: {
        showBooks:(state)=>state,
        addBooks:(state, action)=>{
            state.books.push(action.payload);
        },
    }
})

export const {showBooks, addBooks}= bookSlice.actions;
export default bookSlice.reducer;