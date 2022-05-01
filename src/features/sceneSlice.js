import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  position: [-2, -5, -20],
  scale: [.1, .1, .1],
  rotate: .1
  };

const sceneSlice = createSlice({
  name: 'scene',
  initialState,
  reducers: {
    reset(state, action) {
      Object.entries(initialState).forEach(([k, v]) => state[k] = v)
    },
  }
})

export const { reset } = sceneSlice.actions

export default sceneSlice.reducer