import { createSlice } from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes")):[]
  
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {

    //    // Check if title is empty
    // if (!paste.title || paste.title.trim() === "") {
    //     toast.error("Please provide a title");
    //     return; // Exit early, don't add to pastes
    // }
      
      const paste =  action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully")

      
    },

    updateToPastes: (state,action) => {
      const paste = action.payload;
      console.log("Updating paste with _id:", paste._id);
      const index = state.pastes.findIndex((item)=>item._id === paste._id);

 
      {
        state.pastes[index]= paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));

        toast.success("Paste Updated");
      }
      
    },

    resetAllPastes: (state, action) => {
      
      state.pastes=[];
      localStorage.removeItem("pastes");
    },

     removeFromPastes: (state, action) => {
      const pasteId = action.payload;

      console.log(pasteId);
      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if(index>=0)
      {
        state.pastes.splice(index,1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste Deleted");
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {  addToPastes, updateToPastes,  resetAllPastes,  removeFromPastes} = pasteSlice.actions

export default pasteSlice.reducer