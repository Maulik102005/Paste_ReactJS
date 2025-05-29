import { createSlice } from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  :[]
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      
      const paste =  action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast("Paste Created Successfully")

      
    },
    updateToPastes: (state,action) => {
      
    },

    resetAllPastes: (state, action) => {
      
    },

     removeFromPastes: (state, action) => {
      
    },
  },
})

// Action creators are generated for each case reducer function
export const {  addToPastes, updateToPaste,  resetAllPastes,  removeFromPastes} = pasteSlice.actions

export default pasteSlice.reducer