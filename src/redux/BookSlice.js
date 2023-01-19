import { createSlice } from "@reduxjs/toolkit";

const initialBook={
    books:[
        {id:1, title:'Books Hospility', author:'Firoj Kobir'},
        {id:2, title:'Natural Bauty', author:'Tania Khatun'}
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
        updateBooks:(state, action)=>{
            const{ id, title, author }= action.payload;
            const isBookExit=state.books.filter(book=>book.id ==id);
            if(isBookExit){
                isBookExit[0].title= title;
                isBookExit[0].author= author;
            }
            
       
        },
        deleteBooks:(state, action)=>{
            const id= action.payload;
          state.books=state.books.filter(book=>book.id !==id)
        },
    }
})

export const {showBooks, addBooks, deleteBooks, updateBooks}= bookSlice.actions;
export default bookSlice.reducer;