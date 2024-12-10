import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData : []
}

export const movieoSlice = createSlice({
  name: 'movieo',
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload
    }
  }
})