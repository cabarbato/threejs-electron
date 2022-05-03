import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  position: [-2, -5, -20],
  scale: [.1, .1, .1],
  rotate: [0, .1, 0]
};

const sceneSlice = createSlice({
  name: 'scene',
  initialState,
  reducers: {
    reset(state, action) {
      Object.entries(initialState).forEach(([k, v]) => state[k] = v)
    },
    dragScene(state, action) {
      console.log(action.payload)
    },
    changeRotate(state, action) {
      state.rotate[1] += action.payload / 10
    },
  }
})

export const {
  reset,
  dragScene,
  changeRotate
} = sceneSlice.actions

export default sceneSlice.reducer